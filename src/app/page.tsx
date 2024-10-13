import AboutUs from "@/components/AboutUs";
import FadeDiv from "@/components/FadeDiv";
import FAQ from "@/components/faq";
import Gallery from "@/components/Gallery";
import Loading from "@/components/loading";
import SponsorsSection from "@/components/Sponsors/SponsorsSection";
import Footer from "@/components/Footer/Footer";
import React from "react";

const sponsors = [
  ["LIC.", "Red Bull.", "Tata."],
  ["LIC.", "Red Bull.", "Tata."],
  ["LIC.", "Red Bull.", "Tata."],
];

export default function page() {
  return (
    <>
    <main className="min-h-[200vh] w-full min-w-screen overflow-hidden">
      <Loading />
      <FadeDiv/>
      <AboutUs /> 
      <SponsorsSection sponsors={sponsors} />
      <Gallery/>
      <FAQ />
    </main>
    <Footer />
    </>
  );
}
