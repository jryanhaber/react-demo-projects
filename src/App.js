import React from "react";
import Accordion from "./components/accordion";
import Search from "./components/search.js";

const items = [
  {
    title: "what is react?",
    content: "React is a Javascript..."
  },
  {
    title: "what is react?.",
    content: "React is a Javascript..."
  },
  {
    title: "what is react?..",
    content: "React is a Javascript..."
  }
];
console.log(items);

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
