import { barChartDispatcher } from "./barChart.js";

const sankeyDispatcher = d3.dispatch("highlightInvestor", "resetHighlight");


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

const width = document.getElementById("container").getBoundingClientRect().width;
const height = document.getElementById("container").getBoundingClientRect().height;

const colorChartMain = '#000000';
const colorOpacity = 0.50;
const colorChartHighlight = '#FFE100';

const sankey = d3.sankey()
    .nodeId(d => d.id)
    .nodeWidth(0)
    .nodePadding(2)
    .extent([[1, 1], [width, height]]);

const { nodes, links } = sankey({
    nodes: data.nodes.map(d => Object.assign({}, d)),
    links: data.links.map(d => Object.assign({}, d))
});

// // Find the Oil node and calculate its height
const oilNode = nodes.find(node => node.id === "Oil");
const gasNode = nodes.find(node => node.id === "Gas");
const coalNode = nodes.find(node => node.id === "Coal");
const ubsNode = nodes.find(node => node.id === "UBS");
const snbNode = nodes.find(node => node.id === "SNB");
const pictetNode = nodes.find(node => node.id === "Pictet");
const zkbNode = nodes.find(node => node.id === "ZKB");
const vontobelNode = nodes.find(node => node.id === "Vontobel");

if (oilNode) {
    const oilNodeHeight = oilNode.y1 - oilNode.y0;
    const gasNodeHeight = gasNode.y1 - gasNode.y0;
    const coalNodeHeight = coalNode.y1 - coalNode.y0;

    const ubsNodeHeight = ubsNode.y1 - ubsNode.y0;
    const snbNodeHeight = snbNode.y1 - snbNode.y0;
    const pictetNodeHeight = pictetNode.y1 - pictetNode.y0;
    const zkbNodeHeight = zkbNode.y1 - zkbNode.y0;
    const vontobelNodeHeight = vontobelNode.y1 - vontobelNode.y0;

    const percentage = (oilNodeHeight / window.innerWidth) * 100;

    // Set CSS variable for percentage
    document.documentElement.style.setProperty("--oil-node-percentage", `${percentage}%`);
    document.documentElement.style.setProperty("--oil-node-height", `${oilNodeHeight}px`);
    document.documentElement.style.setProperty("--gas-node-height", `${gasNodeHeight}px`);
    document.documentElement.style.setProperty("--coal-node-height", `${coalNodeHeight}px`);

    document.documentElement.style.setProperty("--ubs-node-height", `${ubsNodeHeight}px`);
    document.documentElement.style.setProperty("--snb-node-height", `${snbNodeHeight}px`);
    document.documentElement.style.setProperty("--pictec-node-height", `${pictetNodeHeight}px`);
    document.documentElement.style.setProperty("--zkb-node-height", `${zkbNodeHeight}px`);
    document.documentElement.style.setProperty("--vontobel-node-height", `${vontobelNodeHeight}px`);

    console.log(`CSS variable set: --oil-node-percentage = ${percentage.toFixed(2)}%`);
    console.log(`CSS variable set: --oil-node-height = ${oilNodeHeight}`);
    console.log(`CSS variable set: --gas-node-height = ${gasNodeHeight}`);
    console.log(`CSS variable set: --coal-node-height = ${coalNodeHeight}`);

    console.log(`CSS variable set: --ubs-node-height = ${ubsNodeHeight}`);
    console.log(`CSS variable set: --snb-node-height = ${snbNodeHeight}`);
    console.log(`CSS variable set: --pictec-node-height = ${pictetNodeHeight}`);
    console.log(`CSS variable set: --zkb-node-height = ${zkbNodeHeight}`);
    console.log(`CSS variable set: --vontobel-node-height = ${vontobelNodeHeight}`);
}

// const oilNode = nodes.find(node => node.id === "Oil");
// if (oilNode) {
//     const oilNodeHeight = oilNode.y1 - oilNode.y0;
//     console.log(`Height of the Oil node: ${oilNodeHeight}`);
// } else {
//     console.error("Oil node not found in the dataset");
// }

const svg = d3.select("#container").append("svg")
    .attr("width", width)
    .attr("height", height);

    svg.append("g")
    .selectAll("path")
    .data(links)
    .join("path")
    .attr("d", d3.sankeyLinkHorizontal())
    // .attr("stroke", d => d.source.id === "UBS" ? "#FF5733" : "#0C667E") // UBS links in orange
    .attr("stroke", colorChartMain)
    .attr("stroke-width", d => Math.max(1, d.width))
    .attr("stroke-opacity", colorOpacity)
    .attr("fill", "none")
    // .on("mouseover", function (event, d) {
    //     d3.select(this)
    //         .attr("stroke-opacity", colorOpacity) // Emphasize link on hover
    //         .attr("stroke", colorChartHighlight); // Change link color to gold
    // })
    // .on("mouseout", function (event, d) {
    //     d3.select(this)
    //         .attr("stroke-opacity", colorOpacity) // Reset opacity
    //         .attr("stroke", colorChartMain); // Reset color
    // })
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
    .attr("fill", colorChartMain)
    .append("title")
    .text(d => `${d.id}`);

    document.querySelectorAll(".bar-chart__child").forEach(div => {
        div.addEventListener("mouseover", function () {
            const investorId = this.dataset.investor; // Get investor ID
            highlightInvestorLinks(investorId);
            calculateAndSetInvestment(investorId); // Calculate and set CSS variables
            updateSectorInvestmentFuture(investorId);
        });
    
        div.addEventListener("mouseout", function () {
            resetHighlights();
            resetSectorInvestmentFuture();
        });
    });

    document.querySelectorAll(".bubble-chart__child").forEach(div => {
        div.addEventListener("mouseover", function () {
            const sectorId = this.dataset.sector; // Get sector ID
            highlightSectorBubbles(sectorId);
        });
    
        div.addEventListener("mouseout", function () {
            resetHighlights(); // Reset highlights
        });
    });

function highlightInvestorLinks(investorId) {

    // Get links for the selected investor
    const investorLinks = links.filter(link => link.source.id === investorId);

    // Highlight the investor node
    // `d` is not defined in this scope, replacing it with `investorId`
    d3.selectAll("rect")
        .filter(node => node.id === investorId)
        .attr("fill", colorChartHighlight);

    // Highlight all links from the investor to companies
    svg.selectAll("path")
        .filter(link => link.source.id === investorId)
        .attr("stroke", colorChartHighlight)
        .attr("stroke-opacity", 1);

    // Highlight all company-to-sector links based on investor's contribution
    investorLinks.forEach(investorLink => {
        const companyId = investorLink.target.id;
        const investmentValue = investorLink.value;

        // Highlight all sector-to-company links based on company value
        const companySectorLinks = links.filter(link => link.source.id === companyId);
        companySectorLinks.forEach(sectorLink => {
            const totalCompanyValue = links
                .filter(link => link.source.id === companyId)
                .reduce((sum, link) => sum + link.value, 0);

            // Calculate the investor's contribution for each sector link
            const investorContribution = (sectorLink.value / totalCompanyValue) * investmentValue;

            if (investorContribution > 0) {
                // Overlay the adjusted link for the investor's contribution
                svg.append("path")
                    .attr("class", "highlight") // Class for dynamic removal
                    .attr("d", d3.sankeyLinkHorizontal()(sectorLink))
                    .attr("stroke", colorChartHighlight) // Highlight adjusted links
                    .attr("stroke-width", Math.max(1, investorContribution / 100)) // Scale dynamically
                    .attr("stroke-opacity", 0.9)
                    .attr("fill", "none")
                    .append("title")
                    .text(
                        `${sectorLink.source.id} → ${sectorLink.target.id}\n` +
                        `Investor Contribution: ${investorContribution.toFixed(2)} billion`
                    );
            }
        });
    });
}

function highlightSectorBubbles(sectorId) {
    // Ensure only valid sector IDs are processed
    if (["Oil", "Gas", "Coal"].includes(sectorId)) {
        // Highlight all links into this sector
        const sectorLinks = links.filter(link => link.target.id === sectorId);

        sectorLinks.forEach(sectorLink => {
            // Highlight the company-to-sector links
            svg.selectAll("path")
                .filter(link => link === sectorLink)
                .attr("stroke", colorChartHighlight)
                .attr("stroke-opacity", 1)
                .attr("stroke-width", d => Math.max(1, d.width));

            const companyId = sectorLink.source.id;

            // Highlight the company nodes
            d3.selectAll("rect")
                .filter(node => node.id === companyId)
                .attr("fill", colorChartHighlight);

            // Find all investor links to this company
            const companyInvestorLinks = links.filter(link => link.target.id === companyId);

            companyInvestorLinks.forEach(companyInvestorLink => {
                // Calculate the investor's contribution to the sector through this company
                const totalCompanyValue = links
                    .filter(link => link.source.id === companyId)
                    .reduce((sum, link) => sum + link.value, 0);

                const contributionPercentage = (sectorLink.value / totalCompanyValue) * 100;

                // Highlight the investor-to-company links
                svg.selectAll("path")
                    .filter(link => link === companyInvestorLink)
                    .attr("stroke", colorChartHighlight)
                    .attr("stroke-opacity", 1)
                    .attr("stroke-width", Math.max(1, companyInvestorLink.value / 100))
                    .append("title")
                    .text(
                        `${companyInvestorLink.source.id} → ${companyInvestorLink.target.id} → ${sectorLink.target.id}\n` +
                        `Contribution to sector: ${contributionPercentage.toFixed(2)}%`
                    );

                // Highlight the investor nodes
                d3.selectAll("rect")
                    .filter(node => node.id === companyInvestorLink.source.id)
                    .attr("fill", colorChartHighlight);
            });
        });

        // Highlight the sector bubble itself
        d3.selectAll(".bubble-chart__child")
            .filter(bubble => bubble.dataset.sector === sectorId) // Assuming bubbles have `data-sector` attribute
            .style("background-color", colorChartHighlight);
    }
}

function resetHighlights() {
    // Reset the investor node color
    d3.select(this).attr("fill", colorChartMain);

    // Reset all original link styles
    svg.selectAll("path")
        .filter(function () {
            return !d3.select(this).classed("highlight");
        }) // Ignore dynamically added highlights
        .attr("stroke", colorChartMain)
        .attr("stroke-opacity", 0.50)
        .attr("stroke-width", d => Math.max(1, d.width));

    // Remove dynamically created highlights
    svg.selectAll("path.highlight").remove();

    // Reset bubble styles
    d3.selectAll(".bubble-chart__child")
    .style("background-color", ""); // Reset to default stylex
}

// function calculateSectorTotals() {
//     // Initialize total investments for each sector
//     const sectorTotals = { Oil: 0, Gas: 0, Coal: 0 };

//     // Sum up investments for each sector across all links
//     links.forEach(link => {
//         if (sectorTotals[link.target.id] !== undefined) {
//             sectorTotals[link.target.id] += link.value;
//         }
//     });

//     return sectorTotals;
// }

// function calculateInvestorContribution(investorId, sectorTotals) {
//     // Initialize investments for the selected investor in each sector
//     const investorSectorTotals = { Oil: 0, Gas: 0, Coal: 0 };

//     // Get all links for the given investor
//     const investorLinks = links.filter(link => link.source.id === investorId);

//     // Calculate the investor's contribution to each sector
//     investorLinks.forEach(link => {
//         const companyId = link.target.id;

//         // Find sector links related to this company
//         links.filter(l => l.source.id === companyId).forEach(sectorLink => {
//             if (investorSectorTotals[sectorLink.target.id] !== undefined) {
//                 investorSectorTotals[sectorLink.target.id] += sectorLink.value;
//             }
//         });
//     });

//     // Calculate percentage contribution for each sector and log to console
//     Object.keys(sectorTotals).forEach(sector => {
//         const sectorTotal = sectorTotals[sector];
//         const investorContribution = investorSectorTotals[sector];
//         const percentage = sectorTotal > 0 ? (investorContribution / sectorTotal) * 100 : 0;

//         console.log(
//             `Investor ${investorId}'s contribution to ${sector}: ${investorContribution} (${percentage.toFixed(2)}% of ${sector} total: ${sectorTotal})`
//         );
//     });
// }

// // Add event listeners for bar chart elements
// document.querySelectorAll(".bar-chart__child").forEach(div => {
//     div.addEventListener("mouseover", function () {
//         const investorId = this.dataset.investor; // Get investor ID from data attribute
//         const sectorTotals = calculateSectorTotals(); // Calculate total investments per sector
//         calculateInvestorContribution(investorId, sectorTotals); // Calculate and log investor contributions
//     });

//     div.addEventListener("mouseout", function () {
//         console.log("Mouse out: Reset");
//     });
// });

function calculateSectorTotals() {
    // Initialize total investments for each sector
    const sectorTotals = { Oil: 0, Gas: 0, Coal: 0 };

    // Sum up investments for each sector across all links
    links.forEach(link => {
        if (sectorTotals[link.target.id] !== undefined) {
            sectorTotals[link.target.id] += link.value;
        }
    });

    return sectorTotals;
}

function calculateInvestorContribution(investorId, sectorTotals) {
    // Initialize investments for the selected investor in each sector
    const investorSectorTotals = { Oil: 0, Gas: 0, Coal: 0 };

    // Get all links for the given investor
    const investorLinks = links.filter(link => link.source.id === investorId);

    // Calculate the investor's contribution to each sector
    investorLinks.forEach(link => {
        const companyId = link.target.id;

        // Find sector links related to this company
        links.filter(l => l.source.id === companyId).forEach(sectorLink => {
            if (investorSectorTotals[sectorLink.target.id] !== undefined) {
                investorSectorTotals[sectorLink.target.id] += sectorLink.value;
            }
        });
    });

    return investorSectorTotals;
}

function updateBubbleSizes(investorId) {
    // Get total sector investments and investor contributions
    const sectorTotals = calculateSectorTotals();
    const investorSectorTotals = calculateInvestorContribution(investorId, sectorTotals);

    // Update CSS variables for each sector's bubble height
    Object.keys(sectorTotals).forEach(sector => {
        const sectorTotal = sectorTotals[sector];
        const investorContribution = investorSectorTotals[sector];
        const percentage = sectorTotal > 0 ? (investorContribution / sectorTotal) * 100 : 0;

        // Calculate and log the new bubble height based on the sector node height
        const sectorNodeHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--${sector.toLowerCase()}-node-height`));
        const newBubbleHeight = (sectorNodeHeight * (percentage / 100)).toFixed(2);

        console.log(`Investor ${investorId}'s contribution to ${sector}: ${percentage.toFixed(2)}% -> Bubble height: ${newBubbleHeight}px`);

        // Update CSS variable for the bubble height
        document.documentElement.style.setProperty(`--${sector.toLowerCase()}-bubble-height`, `${newBubbleHeight}px`);

        // Update the bubble highlight color
        document.documentElement.style.setProperty("--chart-color", "#FFE100");
    });
}

// Reset function to revert bubble sizes
function resetBubbleSizes() {
    ["oil", "gas", "coal"].forEach(sector => {
        const defaultHeight = getComputedStyle(document.documentElement).getPropertyValue(`--${sector}-node-height`);
        document.documentElement.style.setProperty(`--${sector}-bubble-height`, defaultHeight); // Reset to default height
        document.documentElement.style.setProperty("--chart-color", "rgba(0, 0, 0, 0.50)"); // Reset bubble highlight color
    });
    console.log("Bubble heights reset to default.");
}

// Add event listeners for bar chart elements
document.querySelectorAll(".bar-chart__child").forEach(div => {
    div.addEventListener("mouseover", function () {
        const investorId = this.dataset.investor; // Get investor ID from data attribute
        updateBubbleSizes(investorId); // Update bubble sizes
    });

    div.addEventListener("mouseout", function () {
        resetBubbleSizes(); // Reset bubble sizes on mouse out
    });
});

function updateCSSVariablesOnHover(investorId) {
    const sectorTotals = calculateSectorTotals(); // Calculate total sector investments
    const investorContribution = calculateInvestorContribution(investorId, sectorTotals); // Investor contributions

    const totalInvestment = Object.values(sectorTotals).reduce((sum, value) => sum + value, 0);

    // Calculate percentages
    const windTurbinesPercent = ((investorContribution.Oil || 0) / totalInvestment) * 100;
    const solarParkPercent = ((investorContribution.Gas || 0) / totalInvestment) * 100;
    const hydropowerPlantPercent = ((investorContribution.Coal || 0) / totalInvestment) * 100;

    // Update CSS variables
    document.documentElement.style.setProperty("--wind-turbines-height", `${windTurbinesPercent}%`);
    document.documentElement.style.setProperty("--solar-park-height", `${solarParkPercent}%`);
    document.documentElement.style.setProperty("--hydropower-plant-height", `${hydropowerPlantPercent}%`);
}

function resetCSSVariables() {
    document.documentElement.style.setProperty("--wind-turbines-height", "100%");
    document.documentElement.style.setProperty("--solar-park-height", "100%");
    document.documentElement.style.setProperty("--hydropower-plant-height", "100%");
}

// Add hover event listeners to investor elements
document.querySelectorAll(".bar-chart__child").forEach(div => {
    div.addEventListener("mouseover", function () {
        const investorId = this.dataset.investor; // Get investor ID
        updateCSSVariablesOnHover(investorId);
    });

    div.addEventListener("mouseout", resetCSSVariables);
});

function updateBubbleChart(sectorContributions) {
    // Update bubble chart values for each sector
    ["Oil", "Gas", "Coal"].forEach(sector => {
        const bubbleElement = document.querySelector(`.bubble-chart__child[data-sector="${sector}"]`);
        if (bubbleElement) {
            const sectorValue = Math.floor(sectorContributions[sector] || 0); // Ensure value is an integer
            const valueElement = bubbleElement.querySelector("p:last-child");
            if (valueElement) {
                valueElement.textContent = `${sectorValue}`; // Update bubble value
            }
        }
    });
}

function calculateInvestorContributionsToSectors(investorId) {
    // Calculate the contribution of a specific investor to each sector
    const investorLinks = links.filter(link => link.source.id === investorId);

    const sectorContributions = { Oil: 0, Gas: 0, Coal: 0 };

    investorLinks.forEach(investorLink => {
        const companyId = investorLink.target.id;
        const investmentValue = investorLink.value;

        // Find links from the company to the sectors
        const companyToSectorLinks = links.filter(link => link.source.id === companyId);

        companyToSectorLinks.forEach(sectorLink => {
            const totalCompanyInvestment = companyToSectorLinks.reduce((sum, link) => sum + link.value, 0);
            const sectorId = sectorLink.target.id;

            if (sectorContributions[sectorId] !== undefined) {
                sectorContributions[sectorId] +=
                    (sectorLink.value / totalCompanyInvestment) * investmentValue;
            }
        });
    });

    return sectorContributions;
}

function updateChartsFromSankey(data) {
    // Get all investors from the Sankey chart data
    const investors = data.nodes.filter(node =>
        data.links.some(link => link.source === node.id)
    );

    // Calculate total investment per investor (already in millions)
    const investorTotals = investors.map(investor => {
        const totalInvestment = data.links
            .filter(link => link.source === investor.id)
            .reduce((sum, link) => sum + link.value, 0);

        return { id: investor.id, total: Math.floor(totalInvestment) };
    });

    // Update bar chart dynamically
    investorTotals.forEach(({ id, total }) => {
        const barElement = document.querySelector(`.bar-chart__child[data-investor="${id}"]`);
        if (barElement) {
            const totalInvestmentElement = barElement.querySelector("p:last-child");
            if (totalInvestmentElement) {
                totalInvestmentElement.textContent = `${total}`; // Set total investment (in millions)
            }
        }
    });

    // Add hover effect for updating the bubble chart
    document.querySelectorAll(".bar-chart__child").forEach(bar => {
        bar.addEventListener("mouseover", function () {
            const investorId = this.dataset.investor;
            const sectorContributions = calculateInvestorContributionsToSectors(investorId);
            updateBubbleChart(sectorContributions); // Update bubble chart dynamically
        });

        bar.addEventListener("mouseout", function () {
            resetBubbleChart(data); // Reset bubble chart to default values
        });
    });
}

function resetBubbleChart(data) {
    // Reset bubble chart values to total sector investments
    const sectorTotals = {
        Oil: data.links
            .filter(link => link.target === "Oil")
            .reduce((sum, link) => sum + link.value, 0),
        Gas: data.links
            .filter(link => link.target === "Gas")
            .reduce((sum, link) => sum + link.value, 0),
        Coal: data.links
            .filter(link => link.target === "Coal")
            .reduce((sum, link) => sum + link.value, 0)
    };

    ["Oil", "Gas", "Coal"].forEach(sector => {
        const bubbleElement = document.querySelector(`.bubble-chart__child[data-sector="${sector}"]`);
        if (bubbleElement) {
            const sectorValue = Math.floor(sectorTotals[sector]);
            const valueElement = bubbleElement.querySelector("p:last-child");
            if (valueElement) {
                valueElement.textContent = `${sectorValue}`; // Reset bubble value
            }
        }
    });
}

// Example usage
updateChartsFromSankey(data);

// Function to update wind turbines, solar parks, and hydropower plants
function updateFutureInvestments(investorContributions) {
    const perUnitValues = {
        Oil: { windTurbines: 2.5, households: 10000 }, // 1 unit of Oil → 2.5 wind turbines, 10k households
        Gas: { solarParks: 0.1, schools: 50 },        // 1 unit of Gas → 0.1 solar parks, 50 schools
        Coal: { hydropowerPlants: 0.3, farms: 2000 }  // 1 unit of Coal → 0.3 hydropower plants, 2k farms
    };

    // Calculate the investments based on the contributions
    const futureInvestments = {
        windTurbines: Math.floor(investorContributions.Oil * perUnitValues.Oil.windTurbines || 0),
        households: Math.floor(investorContributions.Oil * perUnitValues.Oil.households || 0),
        solarParks: Math.floor(investorContributions.Gas * perUnitValues.Gas.solarParks || 0),
        schools: Math.floor(investorContributions.Gas * perUnitValues.Gas.schools || 0),
        hydropowerPlants: Math.floor(investorContributions.Coal * perUnitValues.Coal.hydropowerPlants || 0),
        farms: Math.floor(investorContributions.Coal * perUnitValues.Coal.farms || 0)
    };

    // Update the DOM for each future investment
    document.querySelector(".oil-future-wrapper .future-chart__future-quote").innerHTML = `
        <h1>${futureInvestments.windTurbines} Wind turbines</h1>
        <h1>power ${futureInvestments.households} households</h1>
    `;

    document.querySelector(".gas-future-wrapper .future-chart__future-quote").innerHTML = `
        <h1>${futureInvestments.solarParks} Solar parks</h1>
        <h1>power ${futureInvestments.schools} schools</h1>
    `;

    document.querySelector(".coal-future-wrapper .future-chart__future-quote").innerHTML = `
        <h1>${futureInvestments.hydropowerPlants} Hydropower plants</h1>
        <h1>power ${futureInvestments.farms} farms</h1>
    `;
}

// Reset function for future investments
function resetFutureInvestments(data) {
    const sectorTotals = calculateSectorTotals();

    // Total sector investments for default values
    const defaultInvestments = {
        windTurbines: Math.floor(sectorTotals.Oil * 2.5),
        households: Math.floor(sectorTotals.Oil * 10000),
        solarParks: Math.floor(sectorTotals.Gas * 0.1),
        schools: Math.floor(sectorTotals.Gas * 50),
        hydropowerPlants: Math.floor(sectorTotals.Coal * 0.3),
        farms: Math.floor(sectorTotals.Coal * 2000)
    };

    // Update the DOM with default values
    document.querySelector(".oil-future-wrapper .future-chart__future-quote").innerHTML = `
        <h1>${defaultInvestments.windTurbines} Wind turbines</h1>
        <h1>power ${defaultInvestments.households} households</h1>
    `;

    document.querySelector(".gas-future-wrapper .future-chart__future-quote").innerHTML = `
        <h1>${defaultInvestments.solarParks} Solar parks</h1>
        <h1>power ${defaultInvestments.schools} schools</h1>
    `;

    document.querySelector(".coal-future-wrapper .future-chart__future-quote").innerHTML = `
        <h1>${defaultInvestments.hydropowerPlants} Hydropower plants</h1>
        <h1>power ${defaultInvestments.farms} farms</h1>
    `;
}

// Add hover event listeners for future investments
document.querySelectorAll(".bar-chart__child").forEach(bar => {
    bar.addEventListener("mouseover", function () {
        const investorId = this.dataset.investor;
        const sectorTotals = calculateSectorTotals();
        const investorContributions = calculateInvestorContribution(investorId, sectorTotals);

        updateFutureInvestments(investorContributions); // Update future investments
    });

    bar.addEventListener("mouseout", function () {
        resetFutureInvestments(data); // Reset future investments
    });
});

// Initialize default future investments on page load
resetFutureInvestments(data);

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