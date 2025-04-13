import { useEffect, useState } from "react";

export const useContainerDimensions = (myRef: any) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      const paddingTop = parseInt(
        window
          .getComputedStyle(myRef.current)
          .getPropertyValue("padding-top")
          .replace("px", ""),
      );
      const paddingBottom = parseInt(
        window
          .getComputedStyle(myRef.current)
          .getPropertyValue("padding-bottom")
          .replace("px", ""),
      );
      const paddingLeft = parseInt(
        window
          .getComputedStyle(myRef.current)
          .getPropertyValue("padding-left")
          .replace("px", ""),
      );
      const paddingRight = parseInt(
        window
          .getComputedStyle(myRef.current)
          .getPropertyValue("padding-right")
          .replace("px", ""),
      );
  
      console.log(paddingTop, paddingBottom, paddingLeft, paddingRight);
  
      const getDimensions = () => ({
        width: (myRef.current.offsetWidth as number) - paddingLeft - paddingRight,
        height:
          (myRef.current.offsetHeight as number) - paddingTop - paddingBottom,
      });
  
      const handleResize = () => {
        setDimensions(getDimensions());
      };
  
      if (myRef.current) {
        setDimensions(getDimensions());
      }
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [myRef]);
  
    return dimensions;
  };