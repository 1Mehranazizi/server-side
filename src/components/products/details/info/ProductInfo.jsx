import React from "react";
import RadioButtonIcon from "@/icons/RadioButtonIcon";
import { styles } from "./productInfo.style";
import { checkHasDiscount } from "@/utils/hasDiscount";
import { totalArrayNumber } from "@/utils/totalArrayNumber";

const ProductInfo = ({
  name,
  multi,
  color,
  sellingPrices,
  partNumber,
  applicableDevices,
  sellingPricesWithDiscount,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        {name}
        {partNumber && `-${partNumber}`}
      </h1>
      <div className={styles.subHeaders}>
        <p className={styles.subHeader}>
          <span className={styles.subHeaderTitle}>گارانتی:</span>
          <span className={styles.subHeaderValue}>
            محصول اورجینال کونیکا مینولتا و سلامت فیزیکی
          </span>
        </p>
      </div>
      <div className={styles.infoBox}>
        <p className={styles.infoTitle}>عرضه کننده:</p>
        <span className={styles.subHeaderValue}>
          پدیدپردازش پایدار نماینده رسمی کونیکا مینولتا ژاپن
        </span>
      </div>
      {multi ? (
        <div className={styles.infoBox}>
          <p className={styles.infoTitle}>رنگ:</p>
          <div className={styles.colorsRow}>
            <span className={`${styles.colorsItem} bg-C `}></span>
            <span className={`${styles.colorsItem} bg-M`}></span>
            <span className={`${styles.colorsItem} bg-Y`}></span>
            <span className={`${styles.colorsItem} bg-K`}></span>
          </div>
        </div>
      ) : (
        color !== "NotApplicable" && (
          <div className={styles.infoBox}>
            <p className={styles.infoTitle}>رنگ:</p>
            <span className={`${styles.colorBox} bg-${color}`}></span>
          </div>
        )
      )}
      {multi && (
        <>
          <div className={styles.infoBox}>
            <p className={styles.infoTitle}>قیمت ست:</p>
            <span className={styles.colorPricesItem}>
              <div className={styles.colorPricesItem}>
                {checkHasDiscount(
                  totalArrayNumber(sellingPrices),
                  totalArrayNumber(sellingPricesWithDiscount)
                ) && (
                  <span className={styles.discount}>
                    {totalArrayNumber(sellingPrices)?.toLocaleString()} تومان
                  </span>
                )}
                <span>
                  {totalArrayNumber(
                    sellingPricesWithDiscount
                  )?.toLocaleString()}
                  تومان
                </span>
              </div>
            </span>
          </div>
          <div className={styles.infoBox}>
            <p className={styles.infoTitle}>قیمت هررنگ:</p>
            <div className={styles.colorPricesContainer}>
              <div className={styles.colorPriceItem}>
                <span className={`${styles.colorPriceBox} bg-C`}></span>
                <div className={styles.colorPricesItem}>
                  {checkHasDiscount(
                    totalArrayNumber(sellingPrices, sellingPricesWithDiscount)
                  ) && (
                    <span className={styles.discount}>
                      {sellingPrices?.[0]?.toLocaleString()} تومان
                    </span>
                  )}
                  <span>
                    {sellingPricesWithDiscount?.[0]?.toLocaleString()} تومان
                  </span>
                </div>
              </div>
              <div className={styles.colorPriceItem}>
                <span className={`${styles.colorPriceBox} bg-M`}></span>
                <div className={styles.colorPricesItem}>
                  {checkHasDiscount(
                    totalArrayNumber(sellingPrices, sellingPricesWithDiscount)
                  ) && (
                    <span className={styles.discount}>
                      {sellingPrices?.[1]?.toLocaleString()} تومان
                    </span>
                  )}
                  <span>
                    {sellingPricesWithDiscount?.[1]?.toLocaleString()} تومان
                  </span>
                </div>
              </div>
              <div className={styles.colorPriceItem}>
                <span className={`${styles.colorPriceBox} bg-Y`}></span>
                <div className={styles.colorPricesItem}>
                  {checkHasDiscount(
                    totalArrayNumber(sellingPrices, sellingPricesWithDiscount)
                  ) && (
                    <span className={styles.discount}>
                      {sellingPrices?.[2]?.toLocaleString()} تومان
                    </span>
                  )}
                  <span>
                    {sellingPricesWithDiscount?.[2]?.toLocaleString()} تومان
                  </span>
                </div>
              </div>
              <div className={styles.colorPriceItem}>
                <span className={`${styles.colorPriceBox} bg-K`}></span>
                <div className={styles.colorPricesItem}>
                  {checkHasDiscount(
                    totalArrayNumber(sellingPrices, sellingPricesWithDiscount)
                  ) && (
                    <span className={styles.discount}>
                      {sellingPrices?.[3]?.toLocaleString()} تومان
                    </span>
                  )}
                  <span>
                    {sellingPricesWithDiscount?.[3]?.toLocaleString()} تومان
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className={styles.infoBox}>
        <p className={styles.infoTitle}>مشخصات:</p>
        {!multi && (
          <div className={styles.partCon}>
            <RadioButtonIcon className={styles.infoIcon} />
            <span> شماره قطعه:{partNumber}</span>
          </div>
        )}
        {applicableDevices?.length > 0 && (
          <div className={styles.acceptDevicesCon}>
            <div className={styles.acceptDeviceTitle}>
              <RadioButtonIcon className={styles.infoIcon} />
              <span>قابل اجرا روی دستگاه های :</span>
            </div>
            <div className={styles.acceptDevices}>
              {applicableDevices?.map((item, index) => (
                <span className={styles.acceptDeviceItem} key={index}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
