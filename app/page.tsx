import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Practices from "@/components/Practices";
import Consultations from "@/components/Consultations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutMe />
      <Consultations />
      <Practices />
      <Footer />
    </>
  );
}
