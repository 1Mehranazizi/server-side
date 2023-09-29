import React from "react";

const ListIcon = ({ className }) => {
  return (
    <svg id="Outline" viewBox="0 0 24 24" className={className}>
      <path d="M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z"></path>
      <path d="M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"></path>
      <path d="M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"></path>
      <circle cx="2" cy="5" r="2"></circle>
      <circle cx="2" cy="12" r="2"></circle>
      <circle cx="2" cy="19" r="2"></circle>
    </svg>
  );
};

export default ListIcon;
