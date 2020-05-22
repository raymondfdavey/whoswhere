import React, { Component } from "react";
import SingleStudentDeets from "./SingleStudentDeets";
import * as api from "../api";
class NewStudent extends Component {
  state = { name: "", addedStudent: "", startingCohort: "", loading: true };
  render() {
    return (
      <div className="studentsContainer">
        <h1>NEW STUDENT FORM</h1>
        <h2>PLEASE ENTER THE NEW STUDENTS NAME BELOW</h2>
        <h3>
          THEY WILL BE ADDED AS A NEW STUDENT STARTING ON THE FUNDAMENTALS BLOCK
        </h3>
        <form onSubmit={this.handleSubmit} className="newStudentForm">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={e => this.handleChange(e.target.value, "name")}
          />
          <label htmlFor="startingCohort">Cohort:</label>
          <input
            type="text"
            id="startingCohort"
            value={this.state.startingCohort}
            onChange={e => this.handleChange(e.target.value, "startingCohort")}
          />
          ​<button>Add Student</button>
        </form>
        <div>
          {!this.state.loading && (
            <>
              <h2>New Student Added to Database!</h2>
              <SingleStudentDeets student={this.state.addedStudent} />
            </>
          )}
        </div>
      </div>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, startingCohort } = this.state;
    api.postNewStudent({ name, startingCohort }).then(returnedStudent => {
      this.setState({
        name: "",
        startingCohort: "",
        addedStudent: returnedStudent,
        loading: false
      });
    });
  };
}
export default NewStudent;
