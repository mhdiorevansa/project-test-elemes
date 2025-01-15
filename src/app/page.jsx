import CategoryReceiptSection from "@/components/category-receipt";
import Footer from "@/components/footer";
import FooterMobile from "@/components/footer-mobile";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import TrendingReceiptSection from "@/components/trending-receipt";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="lg:space-y-28 space-y-16">
        <HeroSection />
        <CategoryReceiptSection />
        <TrendingReceiptSection />
      </main>
      <Footer />
      <FooterMobile />
    </>
  );
}

export default Home;
