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
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
        >
          <img className="w-20 mx-auto" src={skill.image} alt={skill.value} />
          <p className="my-4">{skill.value}</p>
        </div>
      ))}
    </div>
  );
}
