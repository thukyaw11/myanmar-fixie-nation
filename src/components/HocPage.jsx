import mockup from '../assets/mockup.png'

const HocPage = () => {
  return (
    <div className="rounded-lg w-auto mt-24 grid md:grid-cols-2 grid-cols-1 gap-4 mx-0">
      <img
        src={mockup}
        alt=""
        className="h-auto w-full rounded-l-[400px] object-cover object-center"
      />
      <div className="flex flex-col justify-center p-10">
        <p className="text-5xl font-semibold">History of Cycling</p>
        <p className="pt-6 text-gray-600">
        With our sport of cycling, we will make our nation proud.
        </p>

        <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-[#333634] w-36 mt-10 transition duration-300">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default HocPage;
