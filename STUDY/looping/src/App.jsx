import React from "react";
import Greeting from "./greeting";
import GreetingDestructured from "./gretDectru";

function UserList() {
  const students = ["cyizere", "Hirwa", "Cedric", "Irasubiza", "Hirwa", "Paccy"];

  return (
    <>
      <ul>
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
      </ul>

      <Greeting name="John" age={25} />
      <GreetingDestructured name="John" age={25} />
    </>
  );
}

export default UserList;
