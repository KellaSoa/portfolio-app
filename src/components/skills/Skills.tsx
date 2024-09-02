import List from "./List";
import { skillConfig } from "./skillConfig";
import Title from "./Title";

export default function Skills() {
  return (
    <div id="Skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <Title />
        <List skills={skillConfig} />
      </div>
    </div>
  );
}
