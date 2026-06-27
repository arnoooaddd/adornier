import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Founders from "@/components/Founders";
import Ventures from "@/components/Ventures";
import Network from "@/components/Network";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Founders />
        <Ventures />
        <Network />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
