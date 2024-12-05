import { menuSocial } from "./nav/menuSocial";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary">
      <div className="container text-white flex flex-col justify-between py-6 sm:flex-row">
        <div>
          &copy; Copyright 2024. {t("footer.copy")}
          <span className="pl-2">
            {t("footer.made")}
            <span className="heart">❤️</span> {t("footer.by")} Kella
          </span>
        </div>

        <div className="pr-3 flex justify-between space-x-2">
          {menuSocial.map((item) => (
            <div key={item.id} className="relative group">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
              >
                {item.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
