import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slides } from "../components/Slides";
import { TravelTypes } from "../components/TravelTypes";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes/>
      <Slides/>
    </>
  );
}
