"use client";

import React, { useState } from "react";
import ProductDetailsSlider from "./slider/ProductDetailsSlider";
import ProductInfo from "./info/ProductInfo";
import ProductFactor from "./factor/ProductFactor";
import { styles } from "./details.styles";
import MultiProductFactor from "./factor/multiItem/MultiProductFactor";

const ProductDetailsSection = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const galleryImages = product?.galleryMedia?.map((image) => {
    return {
      type: image.type,
      src: image.location,
    };
  });

  galleryImages.unshift({ type: "image", src: product?.primaryImage });

  return (
    <div className={styles.detailsContainer}>
      <ProductDetailsSlider gallery={galleryImages} />
      <ProductInfo
        name={product?.name}
        brand={product?.brand}
        category={product?.subCategory}
        multi={product?.aggregation}
        color={product?.color}
        colors={product?.colors}
        sellingPrices={product?.sellingPrices}
        sellingPricesWithDiscount={product?.sellingPricesWithDiscount}
        partNumber={product?.partNumber}
        applicableDevices={product?.applicableDevices}
      />
      {product?.aggregation ? (
        <MultiProductFactor
          numberOfItemsAvailable={product?.numberOfItemsAvailable}
          sellingPricesWithDiscount={product?.sellingPricesWithDiscount}
          maximumNumbersToOrder={product?.maximumNumbersToOrder}
        />
      ) : (
        <ProductFactor
          sellingPrice={product?.sellingPrice}
          numberOfItemsAvailable={product?.numberOfItemsAvailable}
          sellingPriceWithDiscount={product?.sellingPriceWithDiscount}
          maximumNumberToOrder={product?.maximumNumberToOrder}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
    </div>
  );
};

export default ProductDetailsSection;
