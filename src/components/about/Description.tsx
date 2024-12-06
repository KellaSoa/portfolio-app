import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
      <div className="sm:text-right text-4xl font-bold text-pink">
        <p>{t("about.subtitle")}</p>
      </div>
      <div>
        <p className="text-blue">{t("about.description")}</p>
      </div>
    </div>
  );
}
