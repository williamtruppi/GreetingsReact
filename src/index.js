import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();

let greeting;
let greetigStyle = {
  color: ""
};

if (time < 12) {
  greeting = "Good Morning";
  greetigStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  greetigStyle.color = "green";
} else {
  greeting = "Good Night";
  greetigStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={greetigStyle}>{greeting}</h1>,
  document.getElementById("root")
);
