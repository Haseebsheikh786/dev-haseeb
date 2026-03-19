import Hero from "@/components/hero";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import { homeMetadata } from "@/lib/seo-config";
import Founder from "@/components/founder";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Process from "@/components/process";


export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="work">
          <Portfolio />
        </section>

        <Testimonials />

        <section id="services">
          <Services />
        </section>
        <Process />

        <section id="about">
          <Founder />
        </section>

        <FAQ />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
