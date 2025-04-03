import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Graph = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    d3.select(containerRef.current).selectAll("svg").remove();

    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;

    let nodeCount = width < 500 ? 70 : 150;

    const svg = d3
      .select(containerRef.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("background", "#000");

    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      radius: Math.random() * 6 + 3,
      color: "#7F1D1D",
      connections: 0,
      vx: (Math.random() - 0.5) * 1.2, 
      vy: (Math.random() - 0.5) * 1.2,
    }));

    const links = [];
    for (let i = 1; i < nodes.length; i++) {
      const target = Math.floor(Math.random() * i);
      links.push({ source: i, target: target });
      nodes[i].connections++;
      nodes[target].connections++;
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (
          nodes[i].connections < 3 &&
          nodes[j].connections < 3 &&
          Math.random() < 0.1 &&
          !links.some(
            (link) =>
              (link.source === i && link.target === j) ||
              (link.source === j && link.target === i)
          )
        ) {
          links.push({ source: i, target: j });
          nodes[i].connections++;
          nodes[j].connections++;
        }
      }
    }

    const simulation = d3
      .forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d) => d.id).distance(50))
      .force("charge", d3.forceManyBody().strength(-40))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide(8))
      .alphaDecay(0);

    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#991B1B")
      .attr("stroke-width", 0.6)
      .attr("stroke-opacity", 0.7);

    const node = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", (d) => d.color)
      .style("cursor", "grab")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    node
      .on("mouseenter", function () {
        d3.select(this).attr("fill", "#DC2626").attr("r", (d) => d.radius * 1.5);
      })
      .on("mouseleave", function (event, d) {
        d3.select(this).attr("fill", d.color).attr("r", d.radius);
      });

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    simulation.on("tick", () => {
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        node.vx *= 0.99;
        node.vy *= 0.99;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    });

    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      nodeCount = width < 500 ? 70 : 150;
      simulation.force("center", d3.forceCenter(width / 2, height / 2)).restart();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      simulation.stop();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden", 
      }}
    ></div>
  );
};

export default Graph;
