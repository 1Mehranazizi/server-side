import React, { useState } from "react";
import ArrowDown from "@/icons/ArrowDown";
import { styles } from "./accordion.style";

const Accordion = ({ title, children }) => {
  const [isOpened, setOpened] = useState(false);

  const HandleOpening = () => {
    setOpened(!isOpened);
  };

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionHeader} onClick={HandleOpening}>
        <h4>{title}</h4>
        {!isOpened ? (
          <ArrowDown className="w-[20px] h-[20px]" />
        ) : (
          <ArrowDown className="w-[20px] h-[20px] rotate-180 transition" />
        )}
      </div>
      <div
        style={{
          height: isOpened ? "fit-content" : "0px",
        }}
        className={styles.accordionBody}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
