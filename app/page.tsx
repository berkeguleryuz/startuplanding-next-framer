import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import PartnersLogo from "@/components/PartnersLogo";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PartnersLogo />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
