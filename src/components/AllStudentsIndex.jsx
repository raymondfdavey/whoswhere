import React, { Component } from "react";
import StudentList from "./StudentList";
import * as api from "../api";

class AllStudentsIndex extends Component {
  state = {
    students: [],
    loading: true
  };
  render() {
    return (
      <div className="studentsContainer">
        <div className="studentsHeader">
          {" "}
          <h1>All Students</h1> <h1>Total: {this.state.students.length}</h1>
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
    api.fetchAllCurrentStudents().then(result => {
      this.setState({ students: result, loading: false });
    });
  }
}

export default AllStudentsIndex;
