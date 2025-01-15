import CategoryReceiptSection from "@/components/category-receipt";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import TrendingReceiptSection from "@/components/trending-receipt";

const Home = () => {
  return (
    <section className="px-24 py-7">
      <Navbar />
      <main className="space-y-28">
        <HeroSection />
        <CategoryReceiptSection />
        <TrendingReceiptSection />
      </main>
    </section>
  );
}

export default Home;
