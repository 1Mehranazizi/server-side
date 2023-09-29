"use client";

import StarIcon from "@/icons/StarIcon";
import { styles } from "./productComments.style";

const Rating = ({ rate, setRate }) => {
  return (
    <div className={styles.ratingContainer}>
      <p>امتیاز</p>
      <div className={styles.ratingStars}>
        {Array.from({ length: 5 }, (_, k) => k + 1).map((item) => (
          <button
            key={`buttonItem${item}`}
            type="button"
            onClick={() => {
              setRate(item);
            }}
            className={`
           ${
             rate === 0
               ? "fill-iconColor"
               : rate > item
               ? "fill-iconColor"
               : "fill-secondaryColor"
           }`}
          >
            <StarIcon className={styles.ratingStar} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;
