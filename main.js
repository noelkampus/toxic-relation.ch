// Load external JSON file
// d3.json("data.json").then((data) => {
//     console.log(data);
//   });

const data = {
    nodes: [
        // Investor Nodes
        { id: "UBS" },
        { id: "SNB" },
        { id: "Pictet" },
        { id: "ZKB" },
        { id: "Vontobel" },

        // Company Nodes
        { id: "Exxon Mobil Corporation" },
        { id: "Chevron Corporation" },
        { id: "Partners Group Holding AG" },
        { id: "Shell plc" },
        { id: "TotalEnergies SE" },
        { id: "NextEra Energy Inc" },
        { id: "General Electric Company" },
        { id: "ConocoPhillips" },
        { id: "Blackstone Inc" },
        { id: "Schlumberger Ltd (SLB)" },
        { id: "BP plc" },
        { id: "Canadian Natural Resources Ltd (CNRL)" },
        { id: "The Southern Company" },
        { id: "Enbridge Inc" },
        { id: "Siemens AG" },
        { id: "RWE AG" },
        { id: "Sempra Energy" },
        { id: "DTE Energy Co" },
        { id: "National Grid plc" },
        { id: "SSE plc" },
        { id: "WEC Energy Group Inc" },
        { id: "E.ON SE" },
        { id: "Enel SpA" },
        { id: "Transnet SOC Ltd" },
        { id: "Petroleos Mexicanos (PEMEX)" },
        { id: "JSC NC KazMunayGas (KMG)" },
        { id: "Petro Rio SA (PRIO)" },
        { id: "Oil" },
        { id: "Gas" },
        { id: "Coal" }
    ],
    links: [
        // UBS Links
        { source: "UBS", target: "Exxon Mobil Corporation", value: 3222 },
        { source: "UBS", target: "Chevron Corporation", value: 3011 },
        { source: "UBS", target: "Partners Group Holding AG", value: 2115 },
        { source: "UBS", target: "Shell plc", value: 1764 },
        { source: "UBS", target: "TotalEnergies SE", value: 1662 },
        { source: "UBS", target: "NextEra Energy Inc", value: 1601 },
        { source: "UBS", target: "General Electric Company", value: 1154 },
        { source: "UBS", target: "ConocoPhillips", value: 1107 },
        { source: "UBS", target: "Blackstone Inc", value: 1127 },
        { source: "UBS", target: "Schlumberger Ltd (SLB)", value: 1048 },

        // SNB Links
        { source: "SNB", target: "Exxon Mobil Corporation", value: 1614 },
        { source: "SNB", target: "Chevron Corporation", value: 971 },
        { source: "SNB", target: "General Electric Company", value: 572 },
        { source: "SNB", target: "ConocoPhillips", value: 453 },
        { source: "SNB", target: "NextEra Energy Inc", value: 398 },
        { source: "SNB", target: "BP plc", value: 383 },
        { source: "SNB", target: "Canadian Natural Resources Ltd (CNRL)", value: 247 },
        { source: "SNB", target: "Schlumberger Ltd (SLB)", value: 234 },
        { source: "SNB", target: "The Southern Company", value: 234 },
        { source: "SNB", target: "Enbridge Inc", value: 232 },

        // Pictet Links
        { source: "Pictet", target: "NextEra Energy Inc", value: 867 },
        { source: "Pictet", target: "Siemens AG", value: 618 },
        { source: "Pictet", target: "RWE AG", value: 451 },
        { source: "Pictet", target: "Sempra Energy", value: 396 },
        { source: "Pictet", target: "The Southern Company", value: 376 },
        { source: "Pictet", target: "Enel SpA", value: 280 },
        { source: "Pictet", target: "DTE Energy Co", value: 328 },
        { source: "Pictet", target: "National Grid plc", value: 323 },
        { source: "Pictet", target: "SSE plc", value: 287 },
        { source: "Pictet", target: "WEC Energy Group Inc", value: 294 },

        // ZKB Links
        { source: "ZKB", target: "Shell plc", value: 439 },
        { source: "ZKB", target: "Exxon Mobil Corporation", value: 234 },
        { source: "ZKB", target: "Siemens AG", value: 209 },
        { source: "ZKB", target: "TotalEnergies SE", value: 167 },
        { source: "ZKB", target: "Chevron Corporation", value: 123 },
        { source: "ZKB", target: "BP plc", value: 86 },
        { source: "ZKB", target: "E.ON SE", value: 75 },
        { source: "ZKB", target: "General Electric Company", value: 68 },
        { source: "ZKB", target: "Enel SpA", value: 68 },
        { source: "ZKB", target: "Transnet SOC Ltd", value: 76 },

        // Vontobel Links
        { source: "Vontobel", target: "Shell plc", value: 371 },
        { source: "Vontobel", target: "Petroleos Mexicanos (PEMEX)", value: 168 },
        { source: "Vontobel", target: "Partners Group Holding AG", value: 157 },
        { source: "Vontobel", target: "BP plc", value: 123 },
        { source: "Vontobel", target: "JSC NC KazMunayGas (KMG)", value: 111 },
        { source: "Vontobel", target: "Petro Rio SA (PRIO)", value: 94 },
        { source: "Vontobel", target: "Enel SpA", value: 79 },
        { source: "Vontobel", target: "Siemens AG", value: 77 },
        { source: "Vontobel", target: "Transnet SOC Ltd", value: 76 },
        { source: "Vontobel", target: "NextEra Energy Inc", value: 62 },

        // Commodities Links
        { source: "Exxon Mobil Corporation", target: "Oil", value: 2611 },
        { source: "Exxon Mobil Corporation", target: "Gas", value: 1567 },
        { source: "Exxon Mobil Corporation", target: "Coal", value: 1044 },
        { source: "Chevron Corporation", target: "Oil", value: 2072 },
        { source: "Chevron Corporation", target: "Gas", value: 1242 },
        { source: "Chevron Corporation", target: "Coal", value: 828 },
        { source: "Shell plc", target: "Oil", value: 1404 },
        { source: "Shell plc", target: "Gas", value: 843 },
        { source: "Shell plc", target: "Coal", value: 561 },
        { source: "TotalEnergies SE", target: "Oil", value: 1058 },
        { source: "TotalEnergies SE", target: "Gas", value: 635 },
        { source: "TotalEnergies SE", target: "Coal", value: 423 },
        { source: "NextEra Energy Inc", target: "Oil", value: 1544 },
        { source: "NextEra Energy Inc", target: "Gas", value: 925 },
        { source: "NextEra Energy Inc", target: "Coal", value: 618 },
        { source: "General Electric Company", target: "Oil", value: 901 },
        { source: "General Electric Company", target: "Gas", value: 540 },
        { source: "General Electric Company", target: "Coal", value: 360 },
        { source: "ConocoPhillips", target: "Oil", value: 796 },
        { source: "ConocoPhillips", target: "Gas", value: 477 },
        { source: "ConocoPhillips", target: "Coal", value: 319 },
        { source: "Blackstone Inc", target: "Oil", value: 566 },
        { source: "Blackstone Inc", target: "Gas", value: 340 },
        { source: "Blackstone Inc", target: "Coal", value: 227 },
        { source: "Siemens AG", target: "Oil", value: 453 },
        { source: "Siemens AG", target: "Gas", value: 271 },
        { source: "Siemens AG", target: "Coal", value: 180 },
        { source: "BP plc", target: "Oil", value: 313 },
        { source: "BP plc", target: "Gas", value: 187 },
        { source: "BP plc", target: "Coal", value: 124 },
        { source: "Canadian Natural Resources Ltd (CNRL)", target: "Oil", value: 124 },
        { source: "Canadian Natural Resources Ltd (CNRL)", target: "Gas", value: 74 },
        { source: "Canadian Natural Resources Ltd (CNRL)", target: "Coal", value: 49 },
        { source: "Schlumberger Ltd (SLB)", target: "Oil", value: 644 },
        { source: "Schlumberger Ltd (SLB)", target: "Gas", value: 386 },
        { source: "Schlumberger Ltd (SLB)", target: "Coal", value: 258 },
        { source: "The Southern Company", target: "Oil", value: 310 },
        { source: "The Southern Company", target: "Gas", value: 186 },
        { source: "The Southern Company", target: "Coal", value: 124 },
        { source: "Enbridge Inc", target: "Oil", value: 116 },
        { source: "Enbridge Inc", target: "Gas", value: 70 },
        { source: "Enbridge Inc", target: "Coal", value: 46 },
        { source: "Enel SpA", target: "Oil", value: 244 },
        { source: "Enel SpA", target: "Gas", value: 146 },
        { source: "Enel SpA", target: "Coal", value: 98 },
        { source: "DTE Energy Co", target: "Oil", value: 164 },
        { source: "DTE Energy Co", target: "Gas", value: 98 },
        { source: "DTE Energy Co", target: "Coal", value: 66 },
        { source: "National Grid plc", target: "Oil", value: 161 },
        { source: "National Grid plc", target: "Gas", value: 97 },
        { source: "National Grid plc", target: "Coal", value: 65 },
        { source: "SSE plc", target: "Oil", value: 149 },
        { source: "SSE plc", target: "Gas", value: 89 },
        { source: "SSE plc", target: "Coal", value: 59 },
        { source: "Partners Group Holding AG", target: "Oil", value: 1175 },
        { source: "Partners Group Holding AG", target: "Gas", value: 704 },
        { source: "Partners Group Holding AG", target: "Coal", value: 471 },
        { source: "Petro Rio SA (PRIO)", target: "Oil", value: 47 },
        { source: "Petro Rio SA (PRIO)", target: "Gas", value: 28 },
        { source: "Petro Rio SA (PRIO)", target: "Coal", value: 19 },
        { source: "Petroleos Mexicanos (PEMEX)", target: "Oil", value: 84 },
        { source: "Petroleos Mexicanos (PEMEX)", target: "Gas", value: 50 },
        { source: "Petroleos Mexicanos (PEMEX)", target: "Coal", value: 34 },
        { source: "RWE AG", target: "Oil", value: 226 },
        { source: "RWE AG", target: "Gas", value: 135 },
        { source: "RWE AG", target: "Coal", value: 90 },
        { source: "JSC NC KazMunayGas (KMG)", target: "Oil", value: 56 },
        { source: "JSC NC KazMunayGas (KMG)", target: "Gas", value: 33 },
        { source: "JSC NC KazMunayGas (KMG)", target: "Coal", value: 22 },
        { source: "Sempra Energy", target: "Oil", value: 202 },
        { source: "Sempra Energy", target: "Gas", value: 121 },
        { source: "Sempra Energy", target: "Coal", value: 81 },
        { source: "E.ON SE", target: "Oil", value: 45 },
        { source: "E.ON SE", target: "Gas", value: 27 },
        { source: "E.ON SE", target: "Coal", value: 18 },
        { source: "Transnet SOC Ltd", target: "Oil", value: 76 },
        { source: "Transnet SOC Ltd", target: "Gas", value: 46 },
        { source: "Transnet SOC Ltd", target: "Coal", value: 30 },
        { source: "WEC Energy Group Inc", target: "Oil", value: 147 },
        { source: "WEC Energy Group Inc", target: "Gas", value: 88 },
        { source: "WEC Energy Group Inc", target: "Coal", value: 59 }
    ]
};

console.log('data: ', data)
console.log('nodes: ', data.nodes)
console.log('links: ', data.links)

const width = 800;
const height = 500;

const sankey = d3.sankey()
    .nodeId(d => d.id)
    .nodeWidth(10)
    .nodePadding(2)
    .extent([[1, 1], [width, height]]);

const { nodes, links } = sankey({
    nodes: data.nodes.map(d => Object.assign({}, d)),
    links: data.links.map(d => Object.assign({}, d))
});

const svg = d3.select("#container").append("svg")
    .attr("width", width)
    .attr("height", height);

    svg.append("g")
    .selectAll("path")
    .data(links)
    .join("path")
    .attr("d", d3.sankeyLinkHorizontal())
    .attr("stroke", d => d.source.id === "UBS" ? "#FF5733" : "#0C667E") // UBS links in orange
    .attr("stroke-width", d => Math.max(1, d.width))
    .attr("stroke-opacity", 0.75)
    .attr("fill", "none")
    .on("mouseover", function (event, d) {
        d3.select(this)
            .attr("stroke-opacity", 1) // Emphasize link on hover
            .attr("stroke", "#FFD700"); // Change link color to gold
    })
    .on("mouseout", function (event, d) {
        d3.select(this)
            .attr("stroke-opacity", 0.75) // Reset opacity
            .attr("stroke", d.source.id === "UBS" ? "#FF5733" : "#0C667E"); // Reset color
    })
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
    .attr("fill", d => d.id === "UBS" ? "#FF5733" : "#2D2D2D") // UBS node in orange
    .on("mouseover", function (event, d) {
        d3.select(this)
            .attr("fill", "#FFD700"); // Highlight node on hover
        svg.selectAll("path")
            .filter(link => link.source.id === d.id || link.target.id === d.id)
            .attr("stroke", "#FFD700") // Highlight related links
            .attr("stroke-opacity", 1);
    })
    .on("mouseout", function (event, d) {
        d3.select(this)
            .attr("fill", d.id === "UBS" ? "#FF5733" : "#2D2D2D"); // Reset node color
        svg.selectAll("path")
            .filter(link => link.source.id === d.id || link.target.id === d.id)
            .attr("stroke", link => link.source.id === "UBS" ? "#FF5733" : "#0C667E") // Reset related links
            .attr("stroke-opacity", 0.75);
    })
    .append("title")
    .text(d => `${d.id}`);

// svg.append("g")
//     .selectAll("path")
//     .data(links)
//     .join("path")
//     .attr("d", d3.sankeyLinkHorizontal())
//     .attr("stroke", "#000")
//     .attr("stroke-width", d => Math.max(1, d.width))
//     .attr("stroke-opacity", 0.9)
//     .attr("fill", "none")
//     .append("title")
//     .text(d => `${d.source.id} → ${d.target.id}\n${d.value}`);

// const node = svg.append("g")
//     .selectAll("g")
//     .data(nodes)
//     .join("g");

// node.append("rect")
//     .attr("x", d => d.x0)
//     .attr("y", d => d.y0)
//     .attr("height", d => d.y1 - d.y0)
//     .attr("width", d => d.x1 - d.x0)
//     .attr("fill", "#2D2D2D")
//     .append("title")
//     .text(d => `${d.id}`);

// node.append("text")
//     .attr("x", d => d.x0 - 6)
//     .attr("y", d => (d.y1 + d.y0) / 2)
//     .attr("dy", "0.35em")
//     .attr("text-anchor", "end")
//     .text(d => d.id)
//     .filter(d => d.x0 < width / 2)
//     .attr("x", d => d.x1 + 6)
//     .attr("text-anchor", "start");

console.log('d3: ', d3)