import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Rates from "@/components/Rates";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Services />
    <Process />
    <Projects />
    <About />
    <Rates />
    <Booking />
    <Footer />
    <MobileStickyCTA />
  </div>
);

export default Index;
