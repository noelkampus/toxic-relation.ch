// D3js Bar Chart generates bar width

// Export an event dispatcher to communicate with the Sankey chart
const barChartDispatcher = d3.dispatch("highlightInvestor", "resetHighlight");

// Load data and render bar chart
d3.json("data.json").then(data => {
    const investors = data.map(d => ({
        name: d.name,
        total: +d.total.replace(",", ""), // Parse totals as integers
        id: d.name // Unique identifier for each investor
    }));

    // Chart dimensions
    const margin = { top: 0, right: 0, bottom: 0, left: 0 };
    const width = document.getElementById("bar-chart").getBoundingClientRect().width;
    const height = document.getElementById("bar-chart").getBoundingClientRect().height;

    // Create SVG container
    const svg = d3.select("#bar-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scales
    const x = d3.scaleLinear()
        .domain([0, d3.max(investors, d => d.total)])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(investors.map(d => d.name))
        .range([0, height])
        .padding(0.05);

    // Render bars
    svg.selectAll(".bar")
        .data(investors)
        .join("rect")
        .attr("class", "bar")
        .attr("x", d => width - x(d.total))
        .attr("y", d => y(d.name))
        .attr("width", d => x(d.total))
        .attr("height", y.bandwidth())
        .on("mouseover", (event, d) => {
            barChartDispatcher.call("highlightInvestor", null, d.id); // Trigger highlight event
        })
        .on("mouseout", () => {
            barChartDispatcher.call("resetHighlight"); // Trigger reset event
        });

    // Add labels
    svg.selectAll(".label")
        .data(investors)
        .join("text")
        .attr("class", "label")
        .attr("x", width - 5)
        .attr("y", d => y(d.name) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .text(d => d.name);
    }).catch(error => {
        console.error("Error loading bar chart data:", error);
    });

export { barChartDispatcher };