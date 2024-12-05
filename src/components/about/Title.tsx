import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
      <div className="sm:text-right pb-8 pl-4">
        <p className="text-4xl text-yellow font-bold inline border-b-4 border-yellow">
          {t("about.title")}
        </p>
      </div>
      <div></div>
    </div>
  );
}
