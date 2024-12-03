import myPhoto from "../../assets/kella.jpg";
export default function Presentation() {
  return (
    <div className="bg-[#0a192f] text-white h-screen flex flex-col lg:flex-row justify-center items-center lg:items-start px-8">
      {/* Left Column: Text */}
      <div className="flex-1 lg:mr-8 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
        <p className="text-pink-600 text-lg lg:text-xl">Hi, my name is</p>
        <h1 className="text-5xl sm:text-8xl font-bold text-[#ccd6f6] leading-tight">
          Kella Rianjafimamonjisoa
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0] mt-4">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-6 max-w-[600px] text-lg">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <button className="mt-6 px-8 py-4 bg-pink-600 text-white rounded-lg text-lg font-medium shadow-md hover:bg-pink-700">
          View My Work
        </button>
      </div>

      {/* Right Column: Image */}
      <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={myPhoto}
          alt="Kella's Portrait"
          className="rounded-lg w-[400px] sm:w-[500px] lg:w-[600px] shadow-xl"
        />
      </div>
    </div>
  );
}
