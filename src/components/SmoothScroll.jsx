import React, { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const currentScroll = useRef(0);
  const targetScroll = useRef(0);
  const speed = 0.04;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Set body height for scrollbar, based on container's scrollHeight
    document.body.style.height = `${container.scrollHeight}px`;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const height = aspectRatio < 1 ? "500vh" : "600vh";
    // Fix the container so it covers viewport and can be translated
    Object.assign(container.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: height,
      willChange: "transform",
    });

    const smoothScroll = () => {
      targetScroll.current = window.scrollY;
      currentScroll.current += (targetScroll.current - currentScroll.current) * speed;

      container.style.transform = `translateY(${-currentScroll.current}px)`;

      requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    return () => {
      // Reset styles on cleanup
      document.body.style.height = "";
      Object.assign(container.style, {
        position: "",
        top: "",
        left: "",
        width: "",
        height: "",
        overflow: "",
        transform: "",
        willChange: "",
      });
    };
  }, [speed]);

  return <div ref={scrollRef}>{children}</div>;
};

export default SmoothScroll;
