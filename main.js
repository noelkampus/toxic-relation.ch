import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

console.log("Chart is ready");

// Chart dimensions
const width = window.innerWidth;
const height = window.innerHeight;

// Load external JSON file
d3.json("data.json").then((data) => {
  console.log(data);
});

