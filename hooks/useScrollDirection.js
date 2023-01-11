import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("UP");

  useEffect(() => {
    let scrollPos = 0;
    // adding scroll event
    window.addEventListener("scroll", function () {
      // detects new state and compares it with the new one
      if (document.body.getBoundingClientRect().top > scrollPos)
        setScrollDirection("UP");
      else setScrollDirection("DOWN");
      // saves the new position for iteration.
      scrollPos = document.body.getBoundingClientRect().top;
    });

    return () => {
      window.removeEventListener("scroll", function () {
        // detects new state and compares it with the new one
        if (document.body.getBoundingClientRect().top > scrollPos)
          setScrollDirection("UP");
        else setScrollDirection("DOWN");
        // saves the new position for iteration.
        scrollPos = document.body.getBoundingClientRect().top;
      });
    };
  }, []);

  return { scrollDirection };
};

export default useScrollDirection;
