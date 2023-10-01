import React from "react";
import YouTube from 'react-youtube';

const Media = () => {

  const options = {
    height: '350',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }
    return (
      <div
        className="rounded-lg w-auto mt-24 grid md:grid-cols-2 grid-cols-1 gap-4 mx-0"
        id="joinus"
      >
        <div className="flex flex-col justify-center p-10">
          <p className="md:text-5xl text-4xl font-semibold dark:text-white">
            In Community
          </p>
          <p className="pt-6 text-gray-600 dark:text-slate-400">
          This is the first interview we have ever conducted with Newswatch Myanmar. In order to contribute to the growth of our fixie culture, we voiced our wishes and what we could do, want, and provide. You may observe our trick riding abilities, and we even have female riders. However, the most intriguing aspect is that the average age of fixie enthusiasts is twenty.
          </p>
  
         
        </div>
          <YouTube videoId="GokgAB8GrOw" opts={options} />
      </div>
    );
  };
  
  export default Media;
  