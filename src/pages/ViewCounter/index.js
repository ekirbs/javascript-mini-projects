import { useEffect, useState } from "react";
import "./style.css";

export default function ViewCounter() {
  const [globalVisitCount, setGlobalVisitCount] = useState(0);
  const [localVisitCount, setLocalVisitCount] = useState(0);

  useEffect(() => {
    fetch("/counter")
      .then((response) => response.json())
      .then((data) => {
        setGlobalVisitCount(data.count);
      })
      .catch((error) => {
        console.error("Error fetching global visit count:", error);
      });
  }, []);

  // const handleGlobalReset = () => {
  //   fetch("/counter", { method: "POST" })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setGlobalVisitCount(data.count);
  //     })
  //     .catch((error) => {
  //       console.error("Error resetting global visit count:", error);
  //     });
  // };

  useEffect(() => {
    let count = localStorage.getItem("local_page_view");

    if (count) {
      count = Number(count) + 1;
      // localStorage.setItem("local_page_view", localVisitCount);
    } else {
      count = 1;
    }
    localStorage.setItem("local_page_view", count);
    setLocalVisitCount(count);
  }, []);

  const handleLocalReset = () => {
    localStorage.setItem("local_page_view", "1");
  };

  return (
    <div id="view-counter" className="view-counter">

      <div>Website global visit count:</div>
      <div className="global-website-counter">{globalVisitCount}</div>
      {/* <button id="global-reset" onClick={handleGlobalReset}>Reset Global Counter</button> */}

      <div>Website local visit count:</div>
      <div className="local_website-counter">{localVisitCount}</div>
      <button id="local_reset" onClick={handleLocalReset}>Reset Local Counter</button>

    </div>
  );
}
