import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// Load external JSON file
// d3.json("data.json").then((data) => {
//     console.log(data);
//   });

// Chart dimensions
const width = window.innerWidth;
const height = window.innerHeight;

// Dummy Data
const nodes = [
    { id: "UBS" },
    { id: "SNB" },
    { id: "Pictet" },
    { id: "ZKB" },
    { id: "Vontobel" },
    { id: "Exxon Mobil Corporation" },
    { id: "Chevron Corporation" },
    { id: "Shell plc" },
    { id: "TotalEnergies SE" },
    { id: "BP plc" },
    { id: "Oil" },
    { id: "Gas" },
    { id: "Coal" }
];
  
const links = [
    // Investor links
    { source: "UBS", target: "Exxon Mobil Corporation", value: 3222 },
    { source: "UBS", target: "Chevron Corporation", value: 3011 },
    { source: "UBS", target: "Shell plc", value: 1764 },
    { source: "SNB", target: "Exxon Mobil Corporation", value: 1614 },
    { source: "SNB", target: "Chevron Corporation", value: 971 },
    { source: "Pictet", target: "Shell plc", value: 439 },
    { source: "Pictet", target: "BP plc", value: 123 },
    { source: "ZKB", target: "Shell plc", value: 475 },
    { source: "ZKB", target: "TotalEnergies SE", value: 167 },
    { source: "Vontobel", target: "Shell plc", value: 371 },

    // Sector links
    { source: "Exxon Mobil Corporation", target: "Oil", value: 2500 },
    { source: "Exxon Mobil Corporation", target: "Gas", value: 1000 },
    { source: "Exxon Mobil Corporation", target: "Coal", value: 800 },
    { source: "Chevron Corporation", target: "Oil", value: 2000 },
    { source: "Chevron Corporation", target: "Gas", value: 1500 },
    { source: "Chevron Corporation", target: "Coal", value: 800 },
    { source: "Shell plc", target: "Oil", value: 1800 },
    { source: "Shell plc", target: "Gas", value: 1200 },
    { source: "Shell plc", target: "Coal", value: 600 },
    { source: "TotalEnergies SE", target: "Oil", value: 1500 },
    { source: "TotalEnergies SE", target: "Gas", value: 900 },
    { source: "TotalEnergies SE", target: "Coal", value: 500 },
    { source: "BP plc", target: "Oil", value: 700 },
    { source: "BP plc", target: "Gas", value: 400 },
    { source: "BP plc", target: "Coal", value: 300 }
];


// Create Sankey chart

const sankey = d3.sankey()
    .nodeWidth(15)
    .nodePadding(10)
    .extent([[1, 1], [width, height]]);

const svg = d3.select("#container").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("g")
    .selectAll("path")
    .data(links)
    .join("path")
    .attr("d", d3.sankeyLinkHorizontal())
    .attr("stroke", "#000")
    .attr("stroke-width", d => Math.max(1, d.width))
    .attr("stroke-opacity", 0.5)
    .attr("fill", "none")
    .append("title")
    .text(d => `${d.source.id} → ${d.target.id}\n${d.value}`);

const node = svg.append("g")
    .selectAll("g")
    .data(nodes)
    .join("g");

node.append("rect")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("height", d => d.y1 - d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("fill", "#00a")
    .append("title")
    .text(d => `${d.id}`);

node.append("text")
    .attr("x", d => d.x0 - 6)
    .attr("y", d => (d.y1 + d.y0) / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "end")
    .text(d => d.id)
    .filter(d => d.x0 < width / 2)
    .attr("x", d => d.x1 + 6)
    .attr("text-anchor", "start");