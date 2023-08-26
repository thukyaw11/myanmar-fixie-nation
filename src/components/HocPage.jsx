import mockup from "../assets/mockup.png";
import { content } from "../content";

const HocPage = () => {
  return (
    <div
      className="rounded-lg w-auto mt-24 grid md:grid-cols-2 grid-cols-1 gap-4 mx-0"
      id="hoc"
    >
      <img
        src={mockup}
        alt=""
        className="h-auto w-full rounded-l-[400px] object-cover object-center"
      />
      <div className="flex flex-col justify-center p-10">
        <p className="md:text-5xl text-3xl font-semibold dark:text-white ">
          History of Cycling
        </p>
        <p className="pt-6 text-gray-600 dark:text-slate-400">
          {content.hocContent}
        </p>

        <a href="https://www.facebook.com/HistoryofCycling" target="_blank" rel="noreferrer">
          <button className="bg-black dark:bg-[#cccccc] dark:text-black dark:hover:bg-gray-400 text-white px-5 py-2 rounded-full hover:bg-[#333634] w-36 mt-10 transition duration-300">
            Explore Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default HocPage;
