import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../App.css"; // Ensure this file is correctly linked

const CustomCursor = () => {
  const cursorLargeRef = useRef(null);
  const cursorSmallRef = useRef(null);

  // State to store mouse position relative to the document
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX, // Relative to the viewport
        y: e.clientY, // Relative to the viewport
      });
    };

    // Listen for mousemove events
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Animate cursor movement using GSAP
    const cursorLarge = cursorLargeRef.current;
    const cursorSmall = cursorSmallRef.current;

    if (cursorLarge && cursorSmall) {
      gsap.to(cursorLarge, {
        x: cursorPosition.x - 15, // Adjust cursor position
        y: cursorPosition.y - 15,
        duration: 0.2,
        ease: "power3.out",
      });

      gsap.to(cursorSmall, {
        x: cursorPosition.x - 7.5, // Small cursor adjustment
        y: cursorPosition.y - 7.5,
        duration: 0.2,
        ease: "power3.out",
      });
    }
  }, [cursorPosition]); // Trigger on position change

  return (
    <div className="cursor">
      <div className="cursor__item" ref={cursorLargeRef}></div>
      <div className="cursor__item-small" ref={cursorSmallRef}></div>
    </div>
  );
};

export default CustomCursor;
