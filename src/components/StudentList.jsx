import React, { Component } from "react";
import StudentLine from "./StudentLine";
import { Router, Link } from "@reach/router";
import Analysis from "./Analysis";
import { render } from "@testing-library/react";

class StudentList extends Component {
  state = { analysis: false };
  render() {
    return (
      <>
        <button onClick={this.toggleAnalysis}>CLICK FOR ANALYSIS</button>
        {this.state.analysis && <Analysis students={this.props.students} />}
        <ul>
          <li className="listHeader">
            <p className="p1">STUDENT ID</p>
            <p className="p2">STUDENT NAME</p>
            <p className="p3">COHORT</p>
            <p className="p4">CURRENT BLOCK</p>
            <button className="dummyButton">GRADUATE</button>
          </li>
          {this.props.students.map(student => (
            <StudentLine student={student} />
          ))}
        </ul>
      </>
    );
  }

  toggleAnalysis = () => {
    this.setState({ analysis: !this.state.analysis });
  };
}

export default StudentList;
