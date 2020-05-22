import React from "react";
import { fullBlockName, createBlockTally } from "../utils/utils";

function StudentTile(props) {
  const { student } = props;
  const currentBlockSlug =
    student.blockHistory[student.blockHistory.length - 1].slug;
  const currentBlock = fullBlockName(currentBlockSlug);
  const summary = createBlockTally(student.blockHistory);
  return (
    <>
      {currentBlockSlug === "grad" ? (
        <h2>Status: GRADUATED</h2>
      ) : (
        <>
          <h2>Status: STUDYING</h2>
          <h3>Current Block: {currentBlock}</h3>
        </>
      )}
      <p>Student ID: {student["_id"]}</p>

      <p>Starting Cohort: {student.startingCohort} </p>
      <p>Total time at Northcoders: {summary.totalTimeAtNorthcoders}</p>

      <h3>Block history</h3>

      <p>Fundamentals: {summary.Fundamentals}</p>
      <p>Back-end: {summary["Back End"]}</p>
      <p>Front-end: {summary["Front End"]}</p>
      <p>Project Phase: {summary["Project Phase"]}</p>
    </>
  );
}

export default StudentTile;
