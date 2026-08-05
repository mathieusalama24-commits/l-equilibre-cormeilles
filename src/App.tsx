import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Reassurance } from "@/components/sections/Reassurance";
import { Reviews } from "@/components/sections/Reviews";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reassurance />
        <Reviews />
        <Gallery />
        <Location />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
