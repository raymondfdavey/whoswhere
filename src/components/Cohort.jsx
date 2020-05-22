import React, { Component } from "react";
import * as api from "../api";
import StudentList from "./StudentList";

class Cohort extends Component {
  state = { students: [], loading: true };
  render() {
    return (
      <div className="studentsContainer">
        <div className="studentsHeader">
          {" "}
          <h1>Cohort: {this.props.cohort}</h1>
          <h1>Total Students in Cohort: {this.state.students.length}</h1>
        </div>
        {this.state.loading ? (
          <p>LOADING...</p>
        ) : (
          <StudentList students={this.state.students} />
        )}
      </div>
    );
  }
  componentDidMount() {
    console.log(
      window.location.pathname.includes("graduates"),
      "CHECKING TRUTH IN CPM"
    );
    console.log(this.props.cohort, "CHECKING COHORT");

    if (window.location.pathname.includes("graduates")) {
      api.gradsFetchByCohort(this.props.cohort).then(result => {
        this.setState({ students: result, loading: false });
      });
    } else {
      api.fetchByCohort(this.props.cohort).then(result => {
        this.setState({ students: result, loading: false });
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cohort !== this.props.cohort) {
      this.setState({ loading: true });
      if (window.location.pathname.includes("graduates")) {
        api.gradsFetchByCohort(this.props.cohort).then(result => {
          this.setState({ students: result, loading: false });
        });
      } else {
        api.fetchByCohort(this.props.cohort).then(result => {
          this.setState({ students: result, loading: false });
        });
      }
    }
  }
}

export default Cohort;
