import myPhoto from "../../assets/kella-.png";
export default function Presentation() {
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
        <p className="text-secondary font-bold">Hi, my name is</p>
        <h3 className="text-xl sm:text-xl font-bold text-white">
          Kella Rianjafimamonjisoa
        </h3>
        <h2 className="text-4xl sm:text-7xl font-bold text-pink">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-white py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
      </div>
    </div>
  );
}
