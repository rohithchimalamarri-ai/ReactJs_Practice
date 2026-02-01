import React from "react";

export const Courses = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      {courses.map((element) => {
        return (
          <>
            <h1>Courses</h1>
            <h3>{element}</h3>
          </>
        );
      })}
    </div>
  );
};
