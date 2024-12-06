import myPhoto from "../../assets/kella-.png";
import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();
  return (
    <div className="order-2 lg:order-1 sm:text-left text-center text-pink items-center grid grid-rows-1 md:grid-rows-3 ">
      <img
        src={myPhoto}
        alt="author"
        className="sm:w-90 h-42 sm:h-40 border-4 border-pink rounded-full mx-auto"
      />
      <p className="text-blue bg-white rounded-md shadow-lg z-10 p-6 mt-4 sm:mt-0">
        {t("contact.description")}{" "}
        <span className="font-bold text-pink">fk.rianja@gmail.com </span>{" "}
        {t("contact.moreDescription")}
      </p>
    </div>
  );
}
