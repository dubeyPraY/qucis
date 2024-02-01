import React from "react";
import "./animatedBg.module.scss";

const AnimatedBg = () => {
  return (
    <div className="body">
      {Array(2)
        .fill()
        .map((i) => {
          return (
            <div key={i} className="organism">
              {Array(100)
                .fill()
                .map((index) => {
                  return <div key={`${index}`} className="atom"></div>;
                })}
            </div>
          );
        })}
    </div>
  );
};

export default AnimatedBg;
