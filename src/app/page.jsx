import Blogs from "@/components/home/blogs/Blogs";
import NewestProducts from "@/components/home/newestProducts/NewestProducts";
import Slider from "@/components/home/slider/Slider";
import SpecialOfferce from "@/components/home/specialOffers/SpecialOfferce";
import TopCategories from "@/components/home/topCat/TopCategories";
import { fetchData } from "@/utils/fetchData";

export default async function Home() {
  const specialOffersData = await fetchData(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/shop/items?limit=8&offset=0&hasDiscount=true`,
    {
      cache: "no-store",
    }
  );
  const newestProducts = await fetchData(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/shop/items?limit=8&offset=0`,
    {
      cache: "no-store",
    }
  );
  const blogs = await fetchData(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/articles?limit=4&offset=0`,
    {
      cache: "no-store",
    }
  );
  const sliders = await fetchData(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/banners?destinationToUse=store&offset=0`,
    {
      cache: "no-store",
    }
  );
  return (
    <main>
      <Slider data={sliders} />
      <TopCategories />
      <SpecialOfferce data={specialOffersData} />
      <NewestProducts data={newestProducts} />
      <Blogs blogs={blogs} />
    </main>
  );
}
