import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();
  return (
    <div>
      <p className="text-4xl text-yellow font-bold inline border-b-4 border-yellow ">
        {t("skills.title")}
      </p>
      <p className="py-4 text-blue">{t("skills.description")}</p>
    </div>
  );
}
