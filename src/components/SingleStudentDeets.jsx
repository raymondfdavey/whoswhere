import React, { Component } from "react";
import * as api from "../api";
import StudentTile from "./StudentTile";
import studentEmoji from "../studentEmoji.jpeg";

class SingleStudentDeets extends Component {
  state = { studentDetails: {}, loading: true, deleted: false };
  render() {
    const { studentDetails, loading } = this.state;
    return this.state.deleted ? (
      <h1>STUDENT DELETED FROM DATABASE</h1>
    ) : (
      <div className="studentsDeetsContainer">
        {loading ? (
          <p>LOADING...</p>
        ) : (
          <div className="studentsDeetsWriting">
            <h1>Student: {studentDetails.name}</h1>
            <StudentTile student={studentDetails} />
            <button
              onClick={() => {
                this.deleteStudent(studentDetails["_id"]);
              }}
            >
              REMOVE STUDENT
            </button>
          </div>
        )}
        <div className="img">
          <img src={studentEmoji} alt="student emoji" />
        </div>
      </div>
    );
  }
  componentDidMount() {
    api
      .fetchStudentDetails(
        this.props.studentid ? this.props.studentid : this.props.student["_id"]
      )
      .then(response => {
        console.log(response);

        this.setState({ studentDetails: response, loading: false });
      });
  }

  deleteStudent = id => {
    api.deleteStudentById(id).then(response => {
      if (response.status === 204) {
        this.setState({ deleted: true });
      }
    });
  };
}

export default SingleStudentDeets;
