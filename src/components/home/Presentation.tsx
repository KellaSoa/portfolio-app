import myPhoto from "../../assets/kella-.png";
import { useTranslation } from "react-i18next";

export default function Presentation() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 w-full z-10">
      <div className="w-full md:w-1/2 mt-5">
        <img
          src={myPhoto}
          alt="Kella"
          className="rounded-lg w-[400px] sm:w-[500px] lg:w-[600px]"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-secondary font-bold">{t("home.hi")}</p>
        <h3 className="text-xl sm:text-xl font-bold text-white">
          {t("home.full_name")}
        </h3>
        <span className="text-xl sm:text-3xl font-bold text-pink">
          {t("home.job_title")}
        </span>
        <p className="text-white py-4 max-w-[700px]">
          {t("home.description")}{" "}
          <span className="text-xl font-bold text-yellow">
            {" "}
            "{t("home.slogan")}"{" "}
          </span>
          {t("home.nextDescription")}
        </p>
      </div>
    </div>
  );
}
