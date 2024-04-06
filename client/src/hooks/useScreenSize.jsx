import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [screenWidth, setScrenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScrenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
}
