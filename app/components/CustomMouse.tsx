"use client";
import React, { useState, useEffect } from "react";

const MouseGlowEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientStyle: any = {
    background: `radial-gradient(circle, rgba(29, 78, 216, 0.1), transparent 80%)`,
    filter: "blur(10px)",
    position: "fixed",
    top: mousePosition.y,
    left: mousePosition.x,
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 99,
  };

  return <div style={gradientStyle}></div>;
};

export default MouseGlowEffect;
