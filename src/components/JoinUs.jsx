const JoinUs = () => {
  return (
    <div className="rounded-lg w-auto mt-24 grid md:grid-cols-2 grid-cols-1 gap-4 mx-0">
      <div className="flex flex-col justify-center p-10">
        <p className="text-5xl font-semibold dark:text-white">Be a part of our community</p>
        <p className="pt-6 text-gray-600 dark:text-slate-400">
          We love what we do and we do it with passion
        </p>

        <div className="flex">
          <button className="bg-black dark:bg-[#cccccc] dark:text-black text-white px-5 py-2 rounded-full hover:bg-[#333634] dark:hover:bg-gray-400 w-36 mt-10 transition duration-300">
            Join Us
          </button>
          <button
            type="button"
            class="text-black dark:text-white font-medium rounded-lg text-sm text-center inline-flex items-center w-36 mt-10 ml-10 transition ease-in-out delay-150 hover:-translate-x-1 duration-500"
          >
            Support Us
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/myanmar-fixie-nation/image/upload/v1692777832/MFN/stunt/stunt_11_t1k70f.jpg"
        alt=""
        className="h-72 w-full rounded-l-[400px] object-cover object-center"
      />
    </div>
  );
};

export default JoinUs;
