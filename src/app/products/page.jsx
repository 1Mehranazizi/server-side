import Filter from "@/components/products/filter/Filter";
import MobileFilter from "@/components/products/filter/MobileFilter";
import Breadcrumb from "@/components/shared/breadcrumb/Breadcrumb";
import InfinitiProducts from "@/components/products/infinitiProducts/InfinitiProduct";
import { styles } from "./products.page.style";
import { fetchData } from "@/utils/fetchData";
import NoProductFound from "@/components/products/noProductFound/NoProductFound";

const cateories = {
  toner: "تونر",
  developer: "دولوپر",
  unit: "درام یونیت",
  sparePart: "قطعات",
};

export const metadata = {
  title: "پدید پردازش پایدار | محصولات",
};

const ProductsPage = async ({ searchParams }) => {
  const products = await fetchData(
    `${
      process.env.NEXT_PUBLIC_BACKEND_API
    }/shop/items?limit=6&${new URLSearchParams(searchParams).toString()}`,
    {
      cache: "no-store",
    }
  );

  return (
    <>
      <Breadcrumb
        links={[
          { path: "/products", name: "فروشگاه" },
          {
            path: `/products?subCategory=${searchParams?.subCategory}`,
            name: cateories[searchParams?.subCategory],
          },
        ]}
        button={<MobileFilter searchParams={searchParams} />}
      />
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <Filter searchParams={searchParams} />
        </aside>
        <main className={styles.main}>
          {products?.length > 0 ? (
            <InfinitiProducts data={products} searchParams={searchParams} />
          ) : (
            <NoProductFound />
          )}
        </main>
      </div>
    </>
  );
};

export default ProductsPage;
