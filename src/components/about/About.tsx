import Description from "./Description";
import Title from "./Title";

export default function About() {
  return (
    <div id="About" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <Title />
        <Description />
      </div>
    </div>
  );
}
