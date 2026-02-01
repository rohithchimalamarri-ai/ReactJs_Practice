import React from "react";
import { Courses } from "./Courses";
const Body = ({ person, courses }) => {
  const { id, name, city } = person;
  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <div>{city}</div>
      <Courses courses={courses} />
    </>
  );
};
export default Body;
