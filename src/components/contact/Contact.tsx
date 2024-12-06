import myPhoto from "../../assets/kella-.png";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div id="contact" className="w-full flex justify-center items-center p-4">
      <div className="pb-8">
        <p className="text-4xl text-yellow font-bold inline border-b-4 border-yellow">
          {t("contact.title")}
        </p>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-5">
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
          <form
            method="POST"
            action="https://getform.io/f/anlljzxa"
            className="flex flex-col max-w-[600px] w-full order-1 lg:order-2 "
          >
            <input
              className="bg-white p-2 text-blue rounded-md border-2 border-blue focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              type="text"
              placeholder={`${t("contact.form.name")}*`}
              name="name"
              required
            />
            <input
              className="my-4 p-2 bg-white text-blue rounded-md border-2 border-blue focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              type="email"
              placeholder="Email*"
              name="email"
              required
            />
            <textarea
              className="bg-white p-2 text-blue rounded-md border-2 border-blue focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              name="message"
              placeholder="Message*"
              required
              rows={10}
            ></textarea>
            <p className="pt-2 text-blue font-bold ">
              {" "}
              (*) {`${t("contact.form.required")}*`}
            </p>
            <button className="text-white border-2 rounded-md text-bold hover:bg-pink bg-primary hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
              {t("contact.form.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
