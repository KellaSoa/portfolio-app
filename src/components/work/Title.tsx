import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();
  return (
    <div className="pb-8">
      <p className="text-4xl text-yellow font-bold inline border-b-4 border-yellow ">
        {t("work.title")}
      </p>
      <p className="py-6">{t("work.description")}</p>
    </div>
  );
}
