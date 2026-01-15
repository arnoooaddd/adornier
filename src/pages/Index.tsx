import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Founders from "@/components/Founders";
import Network from "@/components/Network";
import Ventures from "@/components/Ventures";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Founders />
        <Network />
        <Ventures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
