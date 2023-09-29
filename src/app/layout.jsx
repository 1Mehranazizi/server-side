import Header from "@/layouts/header/Header";
import Footer from "@/layouts/footer/Footer";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Toaster } from "react-hot-toast";
import GlobalProvider from "@/context/GlobalProvider";
export const metadata = {
  title: "پدید پردازش پایدار",
  description:
    "شرکت پدید پردازش پایدار، شرکتی پیشرو و فعال در صنعت چاپ و بسته بندی کشور می باشد که به ارائه راهکارهای جامع مبتنی بر چاپ دیجیتال، جهت توسعه روزافزون و تکنولوژیک صنعت چاپ و بسته بندی می پردازد.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <GlobalProvider>
        <body className="bg-pageColor">
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} rtl />
        </body>
      </GlobalProvider>
    </html>
  );
}
