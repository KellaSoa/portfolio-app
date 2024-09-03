import { useState } from "react";

type ProjectType = {
  id: number;
  name: string;
  image: string;
  link?: string;
  overview: string;
};

type ProjectProps = {
  projects: ProjectType[];
};

export default function Project({ projects }: ProjectProps) {
  const [visibleOverview, setVisibleOverview] = useState<number | null>(null);

  const handleToggleOverview = (id: number) => {
    setVisibleOverview(visibleOverview === id ? null : id);
  };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          style={{ backgroundImage: `url(${project.image})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between text-center items-center mx-auto content-div relative"
        >
          {/* Title and buttons - hidden by default, visible on hover */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
              visibleOverview === project.id ? "opacity-0" : ""
            }`}
          >
            <span className="text-2xl font-bold tracking-wider">
              {project.name}
            </span>
            <div className="pt-8 text-center">
              <button
                onClick={() => handleToggleOverview(project.id)}
                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
              >
                Overview
              </button>
              <a href={project.link} target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Link
                </button>
              </a>
            </div>
          </div>

          {/* Overview content */}
          {visibleOverview === project.id && (
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-white text-gray-800 rounded-md">
              <button
                onClick={() => setVisibleOverview(null)}
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 w-8 h-8 flex items-center justify-center"
                aria-label="Close Overview"
              >
                &times;
              </button>
              <div className="mt-4 p-4 max-h-[150px] overflow-y-auto scrollbar scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                <p>{project.overview}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
