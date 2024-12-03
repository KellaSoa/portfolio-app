import Project from "./Project";
import Title from "./Title";
import { dataConfig } from "./dataConfig";

export default function Work() {
  return (
    <div id="work" className="w-full text-blue">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <Title />
        <Project projects={dataConfig} />
      </div>
    </div>
  );
}
