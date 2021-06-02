import Head from "next/head";
import Hero from "./../components/Hero/Hero";
import { heroSliderData } from "../data/heroSliderData";
import IconCarousel from "../components/Carousel/IconCarousel";
import MainTitle from "../components/MainTitle";
import OurProduct from "../components/OurProduct/OurProduct";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bhole Shankar Furniture</title>
      </Head>

      {/* Hero component */}
      <Hero slides={heroSliderData} />

      {/* Icon Carousel */}
      <IconCarousel />

      {/* Our products */}
      <MainTitle
        title="Our Products"
        description="Torem ispsum dolor sit amet, conseture adipsiing elisted do dsaf afasdfasdf adfasfa adsfadsfsiusmo tempor"
      />

      <OurProduct />
    </div>
  );
}
