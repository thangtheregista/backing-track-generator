import React from "react";

const Vinyl = () => {
  return (
    <div className="svg-container">
      {" "}
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="500" height="500" fill="#E5E5E5" />
        <rect id="Rectangle 1" width="500" height="500" fill="#C4C4C4" />
        <g id="vinyl">
          <path
            id="Ellipse 1"
            d="M417 250.5C417 342.455 342.455 417 250.5 417C158.545 417 84 342.455 84 250.5C84 158.545 158.545 84 250.5 84C342.455 84 417 158.545 417 250.5Z"
            fill="#232222"
          />
          <circle id="Ellipse 3" cx="250" cy="250" r="50" fill="#C4C4C4" />
          <path
            id="Ellipse 5"
            d="M106.478 206.394C114.499 179.995 129.646 156.319 150.252 137.972L160.379 149.345C141.864 165.83 128.255 187.102 121.049 210.821L106.478 206.394Z"
            fill="#C4C4C4"
          />
        </g>
        <g id="arm">
          <circle id="Ellipse 4" cx="442" cy="59" r="25" fill="#B82525" />
          <path id="Rectangle 2" d="M432 75H449V300H432V75Z" fill="#F79031" />
          <path id="Rectangle 3" d="M426 300H456V330H426V300Z" fill="black" />
        </g>
      </svg>
    </div>
  );
};

export default Vinyl;
