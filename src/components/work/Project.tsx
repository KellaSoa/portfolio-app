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
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-md shadow-primary bg-primary mt-5 rounded-md hover:scale-105 duration-300 transform"
        >
          <div className="relative p-4">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="p-4 flex flex-col">
            <h3 className="text-xl font-semibold text-yellow uppercase mb-2">
              {project.name}
            </h3>
            <p className="text-white">{project.overview}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
