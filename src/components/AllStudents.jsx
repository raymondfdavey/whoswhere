import React, { Component } from "react";
import { Link } from "@reach/router";

class AllStudents extends Component {
  render() {
    return (
      <div className="studentsPage">
        {this.props.children}
        <nav className="studentsNav">
          <Link to="/students">
            <h2>All Students</h2>
          </Link>
          <Link to="/students/newstudent">
            <h2>ADD STUDENT</h2>
          </Link>
          <h1>Select by Cohort</h1>
          <Link to="startingcohort/1">
            <h2>Cohort 1</h2>
          </Link>
          <Link to="startingcohort/2">
            <h2>Cohort 2</h2>
          </Link>
          <Link to="startingcohort/3">
            <h2>Cohort 3</h2>
          </Link>
          <Link to="startingcohort/4">
            <h2>Cohort 4</h2>
          </Link>
          <h1>Select by Block</h1>
          <Link to="currentblock/fun">
            <h2>Fundamentals</h2>
          </Link>
          <Link to="currentblock/be">
            <h2>Back-End</h2>
          </Link>
          <Link to="currentblock/fe">
            <h2>Front-End</h2>
          </Link>
          <Link to="currentblock/proj">
            <h2>Project</h2>
          </Link>
        </nav>
      </div>
    );
  }
}

export default AllStudents;
