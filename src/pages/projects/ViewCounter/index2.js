import { useEffect, useState } from "react";
import "./viewcounter.css";

export default function ViewCounter() {
  const [localVisitCount, setLocalVisitCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag variable to prevent running the effect twice
  
    let count = localStorage.getItem("local_page_view");
    console.log(count);
  
    if (count) {
      count = Number(count) + 1;
    } else {
      count = 1;
    }
    console.log(count);
  
    if (isMounted) {
      localStorage.setItem("local_page_view", count.toString());
      setLocalVisitCount(count);
    }
  
    return () => {
      isMounted = false; // Clean up the flag variable
    };
  }, []);

  // useEffect(() => {
  //   let isMounted = true; // Flag variable to prevent running the effect twice

  //   let count = localStorage.getItem("local_page_view");
  //   console.log(count);

  //   if (count) {
  //     count = Number(count) + 1;
  //   } else {
  //     count = 1;
  //   }
  //   console.log(count);

  //   localStorage.setItem("local_page_view", count.toString());
  //   console.log(count);


  //   if (isMounted) {
  //     setLocalVisitCount(count);
  //   }
  //   console.log(count);

  //   return () => {
  //     isMounted = false; // Clean up the flag variable
  //   };
  // }, []);

  // useEffect(() => {
  //   let count = localStorage.getItem("local_page_view");

  //   if (count) {
  //     count = Number(count) + 1;
  //   } else {
  //     count = 1;
  //   }

  //   localStorage.setItem("local_page_view", count.toString());
  //   setLocalVisitCount(count);
  // }, []);

  const handleLocalReset = () => {
    localStorage.setItem("local_page_view", "1");
    setLocalVisitCount(1);
  };
  console.log("ViewCounter rendered");

  return (
    <div id="view-counter" className="view-counter">
    
      <div>Website local visit count:</div>
      <div className="local-website-counter">{localVisitCount}</div>
      <button id="local-reset" onClick={handleLocalReset}>Reset Local Counter</button>

    </div>
  );

}