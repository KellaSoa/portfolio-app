import Presentation from "./Presentation";
import ButtonWork from "./ButtonWork";

export default function Home() {
  return (
    <div id="Home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <Presentation />
        <ButtonWork />
      </div>
    </div>
  );
}
