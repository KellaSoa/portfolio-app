import List from "./List";
import { skillConfig } from "./skillConfig";
import Title from "./Title";

export default function Skills() {
  return (
    <div id="skills" className="w-full">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <Title />
        <List skills={skillConfig} />
      </div>
    </div>
  );
}
