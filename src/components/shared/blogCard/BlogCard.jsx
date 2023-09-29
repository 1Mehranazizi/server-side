import React from "react";
import Image from "next/image";
import UserIcon from "@/icons/UserIcon";
import CalenderIcon from "@/icons/CalenderIcon";
import { styles } from "./blogCard.style";

const BlogCard = ({ data }) => {
  return (
    <a
      href={`${process.env.LANDING_URL}/articles/${data._id}`}
      className={styles.card}
    >
      <div className={styles.imageBox}>
        {data?.tags?.length > 0 && (
          <div className={styles.tagsContainer}>
            {data.tags.map((tag, index) => (
              <span className={styles.tag} key={index}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <Image
          src={data.bannerImage}
          width={366}
          height={244}
          quality={100}
          alt={data.title}
          className={styles.image}
        />
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <UserIcon className={styles.icon} />
            <span>نویسنده : {data.writerToShow?.substring(0, 10)}...</span>
          </div>
          <div className={styles.info}>
            <CalenderIcon className={styles.icon} />
            <span>تاریخ : {data.dateOfCreationToShow}</span>
          </div>
        </div>
        <h1 className={styles.title}>{data.title}</h1>
      </div>
    </a>
  );
};

export default BlogCard;
