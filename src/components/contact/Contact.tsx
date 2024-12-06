import { useTranslation } from "react-i18next";
import Description from "./Description";
import Form from "./Form";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div id="contact" className="w-full flex justify-center items-center p-4">
      <div className="pb-8">
        <p className="text-4xl text-yellow font-bold inline border-b-4 border-yellow">
          {t("contact.title")}
        </p>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-5">
          <Description />
          <Form />
        </div>
      </div>
    </div>
  );
}
