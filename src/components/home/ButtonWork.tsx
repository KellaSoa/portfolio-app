import { HiArrowNarrowRight } from "react-icons/hi";

export default function ButtonWork() {
  const handleScrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <button
        onClick={handleScrollToWork}
        className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
      >
        View Work
        <span className="group-hover:rotate-90 duration-300">
          <HiArrowNarrowRight className="ml-3 " />
        </span>
      </button>
    </div>
  );
}
