import React, { Component } from "react";
import {
  analyseData,
  mergeData,
  fullBlockName,
  formatForDoughnut,
  formatForRepeatedBlocksBar,
  formatForNorthcoderJourneyBar,
  formatForJourneySummaryBar
} from "../utils/utils";
import * as api from "../api";
import { Pie, Bar, HorizontalBar } from "react-chartjs-2";

class Analysis extends Component {
  state = {
    detailedData: [],
    detailRequest: false,
    loading: true,
    analysisSummary: {},
    cohortKeys: [],
    blockNumbersKeys: [],
    blockNameKeys: [],
    blockNumbersKeysFull: []
  };
  render() {
    const { analysisSummary } = this.state;
    const { students } = this.props;
    return (
      <div className="analysisWholePage">
        {this.state.loading ? (
          <>
            <p>please note it can take time for analysis to load</p>
            <p>LOADING DATA...</p>
          </>
        ) : (
          <div className="analysisPageContainer">
            {window.location.pathname.includes("students") &&
            !window.location.pathname.includes("cohort") &&
            !window.location.pathname.includes("block") ? (
              <>
                <p>All STUDENTS BY COHORT PIE</p>

                <Pie
                  data={formatForDoughnut(
                    this.state.analysisSummary,
                    this.state.cohortKeys,
                    "cohortNumbers",
                    "Cohort"
                  )}
                />
                <p>ALL STUDENTS BY BLOCK PIE</p>
                <Pie
                  data={formatForDoughnut(
                    this.state.analysisSummary,
                    this.state.blockNumbersKeys,
                    "currentBlockNumbers",
                    "Block"
                  )}
                  options={{
                    title: {
                      display: true,
                      text: "SOME GEHJASHJAHJSHJ",
                      fontColor: "black"
                    }
                  }}
                />
              </>
            ) : window.location.pathname.includes("cohort") &&
              !window.location.pathname.includes("grad") ? (
              <>
                <p>COHORT SUMMARY</p>
                <p>BLOCK PIE</p>
                <Pie
                  data={formatForDoughnut(
                    this.state.analysisSummary,
                    this.state.blockNumbersKeys,
                    "currentBlockNumbers",
                    "Block"
                  )}
                />
              </>
            ) : window.location.pathname.includes("block") &&
              !window.location.pathname.includes("grad") ? (
              <>
                <p>BLOCK SUMMARY</p>
                <p>COHORT PIE</p>
                <Pie
                  data={formatForDoughnut(
                    this.state.analysisSummary,
                    this.state.cohortKeys,
                    "cohortNumbers",
                    "Cohort"
                  )}
                />
              </>
            ) : window.location.pathname.includes("grad") &&
              !window.location.pathname.includes("cohort") ? (
              <>
                <p>ALL GRADUATES SUMMARY</p>
                <p>COHORT PIE</p>
                <Pie
                  data={formatForDoughnut(
                    this.state.analysisSummary,
                    this.state.cohortKeys,
                    "cohortNumbers",
                    "Cohort"
                  )}
                  legend={{ position: "bottom" }}
                />
                <p>NUMBER OF REPEATS PER BLOCK BAR</p>
                <Bar data={formatForRepeatedBlocksBar(analysisSummary)} />
                <p>EACH STUDENT TIME AT NC BAR</p>

                <Bar
                  data={formatForNorthcoderJourneyBar(this.state.detailedData)}
                />
                <p>summary of jounrey bar</p>
                <Bar
                  data={formatForJourneySummaryBar(
                    formatForNorthcoderJourneyBar(this.state.detailedData)
                  )}
                />
              </>
            ) : (
              window.location.pathname.includes("grad") &&
              window.location.pathname.includes("cohort") && (
                <>
                  <p> GRADUATES BY COHORT SUMMARY</p>
                  <p>bar chart and analysis only</p>
                  <Bar data={formatForRepeatedBlocksBar(analysisSummary)} />
                  <p>EACH STUDENT TIME AT NC BAR</p>
                  <Bar
                    data={formatForNorthcoderJourneyBar(
                      this.state.detailedData
                    )}
                  />
                  <p>summary of jounrey bar</p>
                  <Bar
                    data={formatForJourneySummaryBar(
                      formatForNorthcoderJourneyBar(this.state.detailedData)
                    )}
                  />
                </>
              )
            )}
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    const promises = this.props.students.map(student => {
      return fetch(
        "https://nc-student-tracker.herokuapp.com/api/students/" +
          student["_id"]
      )
        .then(buffer => buffer.json())
        .then(({ student }) => {
          return student;
        });
    });

    Promise.all(promises)
      .then(responses => {
        return responses;
      })
      .then(bigData => {
        this.setState({ detailedData: bigData });
        return bigData;
      })
      .then(bigData => {
        const mergedData = mergeData(
          this.state.detailedData,
          this.props.students
        );
        const analysedData = analyseData(mergedData);
        const cohortKeys = Object.keys(analysedData.cohortNumbers);
        const blockNumbersKeys = Object.keys(analysedData.currentBlockNumbers);
        const blockNumbersKeysFull = blockNumbersKeys.map(key =>
          fullBlockName(key)
        );
        const blockNameKeys = Object.keys(analysedData.repeatedBlocks);
        this.setState({
          detailedData: mergedData,
          analysisSummary: analysedData,
          cohortKeys: cohortKeys,
          blockNumbersKeys: blockNumbersKeys,
          blockNameKeys: blockNameKeys,
          blockNumbersKeysFull: blockNumbersKeysFull,
          loading: false
        });
      });
  }
}

// detailedAnalysis = () => {
//   const mergedData = mergeData(this.state.detailedData, this.props.students);
//   const analysedData = analyseData(mergedData);
//   this.setState({ detailedData: mergedData, analysisSummary: analysedData });
// };

export default Analysis;
