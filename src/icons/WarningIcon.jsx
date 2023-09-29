import React from "react";

const WarningIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      className={className}
    >
      <g>
        <g data-name="Layer 2">
          <circle
            cx="256"
            cy="256"
            r="256"
            fill="#FF2147"
            data-original="#ff2147"
          ></circle>
          <g fill="#FFFFFF">
            <path
              d="M256 307.2a35.89 35.89 0 0 1-35.86-34.46l-4.73-119.44a35.89 35.89 0 0 1 35.86-37.3h9.46a35.89 35.89 0 0 1 35.86 37.3l-4.73 119.44A35.89 35.89 0 0 1 256 307.2z"
              fill="#FFFFFF"
              data-original="#ffffff"
            ></path>
            <rect
              width="71.66"
              height="71.66"
              x="220.17"
              y="324.34"
              rx="35.83"
              fill="#FFFFFF"
              data-original="#ffffff"
            ></rect>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default WarningIcon;
