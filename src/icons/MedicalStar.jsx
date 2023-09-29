import React from "react";

const MedicalStar = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="m22.192,18.267c-.283.462-.776.717-1.28.717-.268,0-.538-.071-.782-.221l-6.671-4.085v7.822c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-7.823l-6.672,4.086c-.244.149-.515.221-.782.221-.505,0-.997-.255-1.28-.717-.433-.706-.211-1.63.496-2.062l6.865-4.204L2.221,7.796c-.707-.433-.929-1.356-.496-2.062.433-.707,1.358-.928,2.062-.496l6.672,4.086V1.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5v7.822l6.671-4.085c.705-.432,1.63-.21,2.062.496s.211,1.63-.496,2.062l-6.865,4.204,6.865,4.204c.707.433.929,1.356.496,2.062Z" />
    </svg>
  );
};

export default MedicalStar;