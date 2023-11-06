import Benefits from "@/components/Benefits";
import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import LimitedTime from "@/components/LimitedTime";
import Product from "@/components/Product";
import RealStories from "@/components/RealStories";
import Secondlast from "@/components/Secondlast";
import SmarterAi from "@/components/SmarterAi";
import SuccessCard from "@/components/SuccessCard";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <SuccessCard />
      <LimitedTime />
      <Product />
      <RealStories />
      <Journey />
      <SmarterAi />
      <Secondlast />
      <Benefits />
    </>
  );
}

