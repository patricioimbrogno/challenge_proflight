import * as React from "react"

const IsologoProFlight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="-150 10 600 153"
    {...props}
    style={{background:props.background, borderRadius:props.borderRadius}}
  >
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#f9f9f9",
        fillOpacity: 1,
      }}
      d="M36.453 89.031c4.914-9.472 17.063-39.781 25.402-60.336a97.133 97.133 0 0 0 5.934-24.48L328.352.023c-4.204 18.63-19.727 29.13-44.618 29.637-47.59.961-95.187 1.367-142.785 2.043-15.113.211-30.215.543-47.082.848C82.426 87.578 52.328 129.539 0 153.176"
    />
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#f9f9f9",
        fillOpacity: 1,
      }}
      d="M243.637 45.664c-9.438 17.156-20.719 27.54-36.79 28.305-36.027 1.773-72.14 1.883-108.5 2.668 5.157-28.969 5.446-29.36 30.77-29.719 37.18-.52 74.363-.844 114.528-1.277M72.883 118.734c7.75-22.68 23.039-30.293 45.41-27.492 11.648.68 23.332.528 34.96-.46-7.347 26.073-33.464 34.929-80.37 27.952"
    />
  </svg>
)

export default IsologoProFlight
