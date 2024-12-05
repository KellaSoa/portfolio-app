import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default function ButtonWork() {
  const { t } = useTranslation();
  const handleScrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="z-10">
      <button
        onClick={handleScrollToWork}
        className="text-white rounded-md group border-2 px-6 py-3 my-2 flex font-bold items-center hover:bg-pink hover:border-pink"
      >
        {t("home.button")}
        <span className="group-hover:rotate-90 duration-300">
          <HiArrowNarrowRight className="ml-3 font-bold" />
        </span>
      </button>
    </div>
  );
}
