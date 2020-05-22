import React, { Component } from "react";
import { fullBlockName } from "../utils/utils";
import { Link } from "@reach/router";
import * as api from "../api";

class StudentLine extends Component {
  state = { graduated: false, newBlock: "" };
  render() {
    const { student } = this.props;

    return (
      <li
        className={
          this.state.graduated
            ? "graduatedStudentLineDeetsLi"
            : "studentLineDeetsLi"
        }
        key={student["_id"]}
      >
        <p className="p1">
          <Link to={`/students/id/${student["_id"]}`}>{student["_id"]} </Link>
        </p>
        <p className="p2">{student.name}</p>
        <p className="p3">{student.startingCohort}</p>
        <p className="p4">
          {this.state.graduated
            ? "PASSED BLOCK"
            : fullBlockName(student.currentBlock)}
        </p>
        <button
          disabled={
            this.state.graduated || (student.currentBlock === "grad" && true)
          }
          onClick={() => {
            this.graduate(student["_id"]);
          }}
        >
          PASS BLOCK
        </button>
      </li>
    );
  }
  graduate = id => {
    api.graduateStudentById(id).then(
      this.setState({
        graduated: true
      })
    );
  };
}

export default StudentLine;
