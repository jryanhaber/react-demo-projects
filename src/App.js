import React from "react";
import Accordion from "./components/accordion";

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
      <Accordion items={items} />
    </div>
  );
};
