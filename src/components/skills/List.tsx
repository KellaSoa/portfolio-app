type SkillType = {
  id: number;
  value: string;
  image?: string;
};
type ListSkills = {
  skills: SkillType[];
};
export default function List({ skills }: ListSkills) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="shadow-md shadow-primary bg-primary  rounded-md hover:scale-110 duration-500 flex flex-col items-center justify-center p-4"
        >
          <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full">
            <img
              className="w-16 h-16 object-contain"
              src={skill.image}
              alt={skill.value}
            />
          </div>
          <p className="mt-4 text-yellow font-bold uppercase">{skill.value}</p>
        </div>
      ))}
    </div>
  );
}
