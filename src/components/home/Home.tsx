import Presentation from "./Presentation";
import ButtonWork from "./ButtonWork";
import bgmac from "../../assets/img/bg-hero.jpg";

export default function Home() {
  return (
    <div
      id="home"
      className="w-full  bg-primary relative bg-cover bg-center bg-no-repeat py-8"
      style={{
        backgroundImage: `url(${bgmac})`,
      }}
    >
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <Presentation />
        <ButtonWork />
      </div>
    </div>
  );
}
