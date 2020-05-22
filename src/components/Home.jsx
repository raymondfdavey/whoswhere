import React from "react";
import { Link } from "@reach/router";

function Home(props) {
  return (
    <div className="homeContainer">
      <h2>welcome to w h o s w h e r e </h2>
      <p>
        please select where you would like to go for all your student-tracking
        needs
      </p>
      <div className="linkHolder">
        <Link to="students">
          <p>ALL STUDENTS</p>
        </Link>{" "}
        <Link to="graduates">
          <p>GRADUATES ONLY</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
