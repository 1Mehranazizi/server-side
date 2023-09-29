import React from "react";
import Breadcrumb from "@/components/shared/breadcrumb/Breadcrumb";
import ProductDescription from "@/components/products/description/ProductDescription";
import ProductSpecifications from "@/components/products/specs/ProductSpecifications";
import { styles } from "./product.page.style";
import { notFound } from "next/navigation";
import ProductDetailsSection from "@/components/products/details/ProductDetailsSection";

const fetchData = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/shop/items/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

const ProductPage = async ({ params }) => {
  const product = await fetchData(params.id);

  return (
    <>
      <Breadcrumb
        links={[
          { path: "/products", name: "فروشگاه" },
          { path: `/products/${params.id}`, name: product?.name },
        ]}
      />
      <main className={styles.container}>
        <ProductDetailsSection product={product} />
        <ProductDescription description={product?.description} />
        <ProductSpecifications specs={product?.specs} />
      </main>
    </>
  );
};

export default ProductPage;
