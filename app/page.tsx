import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ThesisCard } from "@/components/sections/ThesisCard";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { ProofCard } from "@/components/sections/ProofCard";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ThesisCard />
        <Services />
        <Work />
        <ProofCard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
