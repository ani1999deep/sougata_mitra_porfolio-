import { useEffect, useRef } from "react";
import "../css/RevealOnScroll.css";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
          observer.unobserve(ref.current); // Stop observing after reveal
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal-on-scroll">
      {children}
    </div>
  );
};
