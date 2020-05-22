import React, { Component } from "react";
import StudentList from "./StudentList";
import * as api from "../api";
import { fullBlockName } from "../utils/utils";

class Block extends Component {
  state = { students: [], loading: true };
  render() {
    return (
      <div className="studentsContainer">
        <div className="studentsHeader">
          {" "}
          <h1>Block: {fullBlockName(this.props.block)}</h1>
          <h1>Total Students on Block: {this.state.students.length}</h1>
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
    api.fetchByBlock(this.props.block).then(result => {
      this.setState({ students: result, loading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.block !== this.props.block) {
      this.setState({ loading: true });
      api.fetchByBlock(this.props.block).then(result => {
        this.setState({ students: result, loading: false });
      });
    }
  }
}

export default Block;
