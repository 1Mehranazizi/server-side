"use client";
import React, { useState } from "react";
import CommentIcon from "@/icons/CommentIcon";
import StarIcon from "@/icons/StarIcon";
import Rating from "./Ratting";
import { styles } from "./productComments.style";

const ProductComments = () => {
  const [rate, setRate] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <CommentIcon className={styles.headerIcon} />
        <h2 className={styles.headerText}>نظرات خریداران</h2>
      </div>
      <div className={styles.commentBox}>
        <div className={styles.commentHeader}>
          <span className={styles.userRole}>خریدار</span>
          <div className={styles.userRate}>
            <span>4</span>
            <StarIcon className={styles.userRateIcon} />
          </div>
        </div>
        <p className={styles.userFullName}>مهران عزیزی</p>
        <p className={styles.userComment}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است،
        </p>
        <span className={styles.commentDate}>1402/05/16</span>
      </div>
      <div className={styles.commentBox}>
        <div className={styles.commentHeader}>
          <span className={styles.userRole}>خریدار</span>
          <div className={styles.userRate}>
            <span>4</span>
            <StarIcon className={styles.userRateIcon} />
          </div>
        </div>
        <p className={styles.userFullName}>مهران عزیزی</p>
        <p className={styles.userComment}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است،
        </p>
        <span className={styles.commentDate}>1402/05/16</span>
      </div>
      <div className={styles.commentBox}>
        <div className={styles.commentHeader}>
          <span className={styles.userRole}>خریدار</span>
          <div className={styles.userRate}>
            <span>4</span>
            <StarIcon className={styles.userRateIcon} />
          </div>
        </div>
        <p className={styles.userFullName}>مهران عزیزی</p>
        <p className={styles.userComment}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است،
        </p>
        <span className={styles.commentDate}>1402/05/16</span>
      </div>
      <button className={styles.showAll}>مشاهده همه</button>
      <div className={styles.submitCommentContainer}>
        <div className={styles.sCHeader}>
          <h2 className={styles.sCTitle}>ثبت نظر</h2>
          <Rating rate={rate} setRate={setRate} />
        </div>
        <textarea
          cols="30"
          rows="5"
          className={styles.sCTextArea}
          placeholder="نظر شما"
        ></textarea>
        <button className={styles.sCButton}>ثبت</button>
      </div>
    </div>
  );
};

export default ProductComments;
