import landingbike from "../assets/landingbike.png";
import { content } from "../content";
import "animate.css";


const Landing = () => {
  return (
    
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4" id="home">
      <div className="flex items-center justify-center h-100 w-auto">
        <div className="text-5xl md:text-7xl pt-16 md:pt-0">
          <span className="font-semibold gradient-text dark:text-white">Myanmar </span> <br /> 
          <div className="font-semibold gradient-text dark:text-white mt-5">
            Fixie Nation
          </div>
            <p className="text-base  dark:text-slate-400  mt-10">{content.briefMFN}</p>
        </div>
      </div>

      <div className="p-4">
        <img src={landingbike} alt="" className="transform -scale-x-100" />
      </div>
    </div>
  );
};

export default Landing;
