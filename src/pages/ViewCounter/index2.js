import { useEffect, useState } from "react";
import "./viewcounter.css";

export default function ViewCounter() {
  const [localVisitCount, setLocalVisitCount] = useState(0);

  useEffect(() => {
    let count = localStorage.getItem("local_page_view");

    if (count) {
      count = Number(count);
    } else {
      count = 1;
    }
    setLocalVisitCount(count);
  }, []);

  const handleLocalReset = () => {
    localStorage.setItem("local_page_view", "1");
    setLocalVisitCount(1);
  };

  return (
    <div id="view-counter" className="view-counter">
    
      <div>Website local visit count:</div>
      <div className="local-website-counter">{localVisitCount}</div>
      <button id="local-reset" onClick={handleLocalReset}>Reset Local Counter</button>

    </div>
  );
}