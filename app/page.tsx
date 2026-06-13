import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Pricing from "@/components/Pricing";
import TrustSignals from "@/components/TrustSignals";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <Pricing />
        <TrustSignals />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
