import React from "react";
import * as d3 from "d3";

export class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef();
    this.dataset = [100, 200, 300, 400, 500];
  }

  componentDidMount() {
    let size = 500;
    let svg = d3
      .select(this.myref.current)
      .append("svg")
      .attr("width", size)
      .attr("height", size);
    let rect_witdh = 95;
    svg
      .selectAll("rect")
      .data(this.dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => 5 + i * (rect_witdh + 5))
      .attr("y", (d) => size - d)
      .attr("width", rect_witdh)
      .attr("height", (d) => d)
      .attr("fill", "teal");
  }

  render() {
    return <div ref={this.myref}></div>;
  }
}
