import React from "react";
import { Header } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  const heading = <h3>My Details</h3>;
  const footer = "This are the langauges I learnt..";
  const person = {
    id: 4253,
    name: "Rohith",
    city: "Ongole",
  };
  const courses = ["html", "Css", "JavaScript"];
  return (
    <>
      <Header heading={heading} />
      <Body person={person} courses={courses} />
      
      <Footer footer={footer} />
    </>
  );
};
export default App;
