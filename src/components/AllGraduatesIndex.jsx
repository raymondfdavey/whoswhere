import React, { Component } from "react";
import * as api from "../api";
import StudentList from "./StudentList";

class AllGraduatesIndex extends Component {
  state = {
    students: [],
    loading: true
  };
  render() {
    return (
      <div className="studentsContainer">
        <div className="studentsHeader">
          {" "}
          <h1>All Graduates</h1> <h1>Total: {this.state.students.length}</h1>
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
    api.fetchAllGraduates().then(result => {
      this.setState({ students: result, loading: false });
    });
  }
}

export default AllGraduatesIndex;
