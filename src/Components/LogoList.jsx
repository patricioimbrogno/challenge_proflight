import React, { useState } from "react";
import IsologoProFlight from "../Commons/IsologoProFlight";
import "./LogoList.css";

const LogoList = () => {
  const [selected, setSelected] = useState(1);

  const handleSelector = (selected, position) => {
    if (position === "right") {
      selected === 1 && setSelected(2);
      selected === 2 && setSelected(3);
      selected === 3 && setSelected(4);
      selected === 4 && setSelected(1);
    } else if (position === "left") {
      selected === 1 && setSelected(4);
      selected === 2 && setSelected(1);
      selected === 3 && setSelected(2);
      selected === 4 && setSelected(3);
    }
  };

  return (
    <div className="box">
      <button
        onClick={() => handleSelector(selected, "left")}
        className="button"
      >
        {"<=="}
      </button>
      <div
        className="box"
        style={{
          width: "80%",
        }}
      >
        {/* Inserto el Logo de ProFlight como componente y le paso por props sus propiedades */}
        <div>
          <IsologoProFlight
            borderRadius="30px"
            width="216.49px"
            height="206px"
            background={
              selected === 1
                ? "linear-gradient(233.16deg, #00B0CE -10.31%, rgba(0, 176, 206, 0.3) 110.31%)"
                : "linear-gradient(233.16deg, #00B0CE -10.31%, rgba(0, 176, 206, 0.3) 0%)"
            }
          />
        </div>
        <div>
          <IsologoProFlight
            borderRadius="30px"
            width="216.49px"
            height="206px"
            background={
              selected === 2
                ? "linear-gradient(233.16deg, #00B0CE -10.31%, rgba(0, 176, 206, 0.3) 110.31%)"
                : "linear-gradient(233.16deg, #00B0CE -10.31%, rgba(0, 176, 206, 0.3) 0%)"
            }
          />
        </div>
        <div>
          <IsologoProFlight
            borderRadius="30px"
            width="216.49px"
            height="206px"
            background={
              selected === 3
                ? "linear-gradient(233.16deg, #00B0CE -10.31%, rgba(0, 176, 206, 0.3) 110.31%)"
                : "linear-gradient(233.16deg, #00B0CE -10.31%, rgba(0, 176, 206, 0.3) 0%)"
            }
          />
        </div>
        <div>
          <IsologoProFlight
            borderRadius="30px"
            width="216.49px"
            height="206px"
            background={
              selected === 4
                ? "linear-gradient(233.16deg, #00B0CE -10.31%, rgba(0, 176, 206, 0.3) 110.31%)"
                : "linear-gradient(233.16deg, #00B0CE -10.31%, rgba(0, 176, 206, 0.3) 0%)"
            }
          />
        </div>
      </div>
      <button
        onClick={() => handleSelector(selected, "right")}
        className="button"
      >
        {"==>"}
      </button>
    </div>
  );
};

export default LogoList;
