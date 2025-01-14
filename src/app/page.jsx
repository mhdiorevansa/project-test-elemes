import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

const Home = () => {
  return (
    <section className="px-24 py-7">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </section>
  );
}

export default Home;
