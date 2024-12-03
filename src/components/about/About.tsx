import Description from "./Description";
import Title from "./Title";

export default function About() {
  return (
    <div id="about" className="w-full text-gray-300">
      <div className="flex flex-col justify-center items-center ">
        <Title />
        <Description />
      </div>
    </div>
  );
}
