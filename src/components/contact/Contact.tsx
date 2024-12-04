import myPhoto from "../../assets/kella-.png";

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <div className="pb-8">
        <p className="text-4xl text-yellow font-bold inline border-b-4 border-yellow">
          Contact
        </p>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Left Section */}
          <div className="sm:text-left font-bold text-pink flex items-center relative">
            {/* Larger Image Positioned Above the Paragraph */}
            <img
              src={myPhoto}
              alt="author"
              className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-90 border-4 border-pink sm:h-48 rounded-full"
            />
            <p className="text-blue relative bg-white p-6 rounded-md shadow-lg z-10 mt-20">
              If you'd like to make an enquiry, please feel free to get in
              touch, and I will respond as soon as possible. If you prefer to
              contact me directly, send your Email to: fk.rianja@gmail.com or
              Submit the form.
            </p>
          </div>
          {/* Right Section */}
          <form
            method="POST"
            action="https://getform.io/f/anlljzxa"
            className="flex flex-col max-w-[600px] w-full"
          >
            <input
              className="bg-white p-2 text-blue rounded-md border-2 border-blue focus:outline-none focus:ring-2 focus:ring-yellow focus:border-yellow"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 bg-white text-blue rounded-md border-2 border-blue focus:outline-none focus:ring-2 focus:ring-yellow focus:border-yellow"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-white p-2 text-blue rounded-md border-2 border-blue focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              name="message"
              placeholder="Message"
              rows="10"
            ></textarea>
            <button className="text-white border-2 hover:bg-pink bg-primary hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
