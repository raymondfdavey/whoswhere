import React, { Component } from "react";
import { Link } from "@reach/router";
class AllGraduates extends Component {
  render() {
    return (
      <div className="studentsPage">
        {this.props.children}
        <nav className="studentsNav">
          <h2>All Graduates</h2>
          <Link to="graduatescohort/1">
            <h1>Cohort 1</h1>
          </Link>
          <Link to="graduatescohort/2">
            <h1>Cohort 2</h1>
          </Link>{" "}
          <Link to="graduatescohort/3">
            <h1>Cohort 3</h1>
          </Link>{" "}
          <Link to="graduatescohort/4">
            <h1>Cohort 4</h1>
          </Link>
        </nav>
      </div>
    );
  }
}

export default AllGraduates;
