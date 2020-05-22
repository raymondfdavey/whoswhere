import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "./components/Home";
import AllStudents from "./components/AllStudents";

import AllStudentsIndex from "./components/AllStudentsIndex";
import Cohort from "./components/Cohort";
import Block from "./components/Block";
import AllGraduates from "./components/AllGraduates";
import AllGraduatesIndex from "./components/AllGraduatesIndex";
import SingleStudentDeets from "./components/SingleStudentDeets";
import NewStudent from "./components/NewStudent";

function App() {
  return (
    <div>
      <h1 className="mainPageTit">W H O S W H E R E</h1>
      <nav className="nav">
        <Link to="/">
          <p>HOMEPAGE</p>
        </Link>
        <Link to="students">
          <p>STUDENTS</p>
        </Link>
        <Link to="graduates">
          <p>GRADUATES</p>
        </Link>
      </nav>
      <Router>
        <Home path="/" />
        <AllStudents path="students">
          <AllStudentsIndex path="/" />
          <NewStudent path="newstudent" />
          <SingleStudentDeets path="id/:studentid" />

          <Cohort path="startingcohort/:cohort"></Cohort>
          <Block path="currentblock/:block"></Block>
        </AllStudents>
        <AllGraduates path="graduates">
          <AllGraduatesIndex path="/" />
          <SingleStudentDeets path="id/:studentid" />
          <Cohort path="graduatescohort/:cohort"></Cohort>
        </AllGraduates>
      </Router>
    </div>
  );
}

export default App;
