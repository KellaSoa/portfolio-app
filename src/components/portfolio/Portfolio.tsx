import apple from "../../assets/img/portfolio-apple.jpeg";
export default function Portfolio() {
  return (
    <div id="work" className="w-full text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div>
          <p className="text-4xl text-yellow font-bold inline border-b-4 border-yellow ">
            Check out my Portfolio
          </p>
          <p className="py-4 text-blue">
            // Here's what I have done with the past
          </p>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <a
            href="/"
            className="relative block mx-auto transform transition-all hover:scale-105 md:mx-0 group  shadow-md shadow-pink "
          >
            <img src={apple} className="w-full shadow" alt="portfolio image" />

            <span className="absolute inset-0 bg-pink opacity-0 transition-opacity duration-300 group-hover:opacity-90 z-0"></span>

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
              <h3 className="text-lg font-bold uppercase text-primary mx-4">
                Title project
              </h3>

              <p className="text-sm text-white text-center px-4 md:px-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <div className="absolute right-0 bottom-0 mr-4 mb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
              <button
                className="block rounded-full border-3 bg-blue hover:bg-pink px-6 py-2 text-center font-body text-lg font-bold uppercase text-white md:text-base hover:bg-primary hover:text-white"
                onClick={() => (window.location.href = "/your-link")}
              >
                Visit Site
              </button>
            </div>
          </a>
          <a
            href="/"
            className="relative block mx-auto transform transition-all hover:scale-105 md:mx-0 group  shadow-md shadow-yellow "
          >
            <img src={apple} className="w-full shadow" alt="portfolio image" />

            <span className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-90 z-0"></span>

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
              <h3 className="text-lg font-bold uppercase text-yellow mb-4">
                Title project
              </h3>

              <p className="text-sm text-white text-center px-4 md:px-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <div className="absolute right-0 bottom-0 mr-4 mb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
              <button
                className="block rounded-full border-3 bg-blue px-6 py-2 text-center font-body text-lg font-bold uppercase text-white md:text-base hover:bg-primary hover:text-white"
                onClick={() => (window.location.href = "/your-link")}
              >
                Visit Site
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
