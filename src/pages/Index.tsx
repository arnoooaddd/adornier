import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Adornier | Strategic Advisory, Fundraising & Business Development</title>
        <meta name="description" content="Adornier is a strategic advisory firm founded by Arno Adornier (Arnaud Utille) and Kerim Jakupovic. Fundraising consulting from seed to Series A, business development, and strategic introductions across the US, Europe, the Balkans, and the Middle East." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          <Hero />
          <Services />
          <Founders />
          <Network />
          <Ventures />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;