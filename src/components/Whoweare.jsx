import teamImg from "../assets/team.jpg";
import { content } from "../content";
import MFNTC from "../assets/MFNTC.pdf"

const Whoweare = () => {
  return (
    <div
      className="rounded-lg w-auto mt-24 grid md:grid-cols-2 grid-cols-1 gap-4"
      id="aboutus"
    >
      <img
        src={teamImg}
        alt=""
        className="h-96 w-full rounded-r-[400px] object-cover object-center ml-[-1]"
      />
      <div className="flex flex-col justify-center p-10">
        <p className="md:text-5xl text-4xl font-semibold dark:text-white">
          Who we are?
        </p>
        <p className="pt-6 text-gray-600  dark:text-slate-400 ">
          {content.whoweare}
        </p>

        <a href={MFNTC} download="myanmar-fixie-nation-rules&regulation-pdf" target="_blank" rel="noreferrer">

        <button className="bg-black dark:bg-[#cccccc] dark:text-black text-white px-5 py-3 rounded-full hover:bg-[#333634] dark:hover:bg-gray-400 w-72 mt-10 transition duration-300">
          Download Rules & Regulation
        
        </button>
        </a>

      </div>
    </div>
  );
};

export default Whoweare;
