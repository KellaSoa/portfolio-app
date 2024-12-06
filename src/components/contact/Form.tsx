import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
}
