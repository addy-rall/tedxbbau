import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Graph = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    d3.select(containerRef.current).selectAll("svg").remove();

    const svg = d3
      .select(containerRef.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("background", "none") 
      .style("position", "absolute")
      .style("pointer-events", "all");

    const nodes = Array.from({ length: 250 }, (_, i) => ({ 
      id: i,
      baseColor: "#7F1D1D",
      hoverColor: "#FF4500",
      angle: Math.random() * 2 * Math.PI,
      radius: Math.random() * 50 + 10
    }));

    const links = [];
    
    for (let i = 1; i < nodes.length; i++) {
      if (Math.random() < 0.7) {
        const target = Math.floor(Math.random() * i);
        links.push({
          source: i,
          target: target
        });
      }
    }

    const additionalLinksCount = nodes.length;
    for (let i = 0; i < additionalLinksCount; i++) {
      const source = Math.floor(Math.random() * nodes.length);
      const target = Math.floor(Math.random() * nodes.length);
      
      if (source !== target && !links.some(l => 
        (l.source === source && l.target === target) || 
        (l.source === target && l.target === source)
      )) {
        links.push({ source, target });
      }
    }

    const simulation = d3
      .forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d) => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-80)) 
      .force("center", d3.forceCenter(width / 2, height / 2))
      .alphaDecay(0.005)
      .velocityDecay(0.2);

    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("stroke", "#7F1D1D")
      .attr("stroke-width", 0.5)
      .attr("stroke-opacity", 0.7);

    const nodeGroup = svg
      .selectAll(".node-group")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node-group");

    nodeGroup
      .append("circle")
      .attr("class", "node-shadow")
      .attr("r", 3)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 0.7)
      .style("filter", "drop-shadow(0px 0px 3px rgba(173, 170, 170, 0.7))");

    const node = nodeGroup
      .append("circle")
      .attr("class", "node")
      .attr("r", 3)  
      .attr("fill", d => d.baseColor)
      .style("transition", "fill 0.2s ease")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
      );

    node
      .on("mouseenter", function() {
        d3.select(this).attr("fill", "#FF4500");
        d3.select(this.parentNode).select(".node-shadow")
          .attr("stroke", "#FF4500")
          .style("filter", "drop-shadow(0px 0px 5px rgba(255,69,0,0.7))");
      })
      .on("mouseleave", function(event, d) {
        d3.select(this).attr("fill", d.baseColor);
        d3.select(this.parentNode).select(".node-shadow")
          .attr("stroke", "white")
          .style("filter", "drop-shadow(0px 0px 3px rgba(255,255,255,0.7))");
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

    const circularMotion = () => {
      const centerX = width / 2;
      const centerY = height / 2;
      
      nodes.forEach(node => {
        node.angle += 0.001;
        
        const motionRadius = node.radius * 1.5;
        const offsetX = Math.cos(node.angle) * motionRadius;
        const offsetY = Math.sin(node.angle) * motionRadius;
        
        node.vx += offsetX * 0.005;
        node.vy += offsetY * 0.005;
      });
    };

    simulation.on("tick", () => {
      circularMotion();

      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      nodeGroup
        .attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    simulation.alpha(1).restart();

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full absolute top-0 left-0"
      style={{ overflow: 'hidden' }}
    ></div>
  );
};

export default Graph;