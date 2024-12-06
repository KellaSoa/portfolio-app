import { useLanguage } from "../../context/LanguageContext.tsx";

export default function Language() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 order-1 lg:order-2 ">
      <button
        onClick={() => switchLanguage("fr")}
        className={`${
          language === "fr"
            ? "bg-yellow font-bold rounded-sm text-center p-1"
            : "text-white"
        } hover:text-pink`}
      >
        FR
      </button>
      <span className="text-white">|</span>
      <button
        onClick={() => switchLanguage("en")}
        className={`${
          language === "en"
            ? "bg-yellow font-bold rounded-sm text-center p-1"
            : "text-white"
        } hover:text-pink`}
      >
        EN
      </button>
    </div>
  );
}
