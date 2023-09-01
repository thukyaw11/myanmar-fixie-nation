const Statistics = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-16">
      <StatisticsCard count={"1.9k"} text={"MEMBERS"} percent={false} />
      <StatisticsCard count={"100"} text={"RIDES"} percent={false} />
      <StatisticsCard count={"100"} text={"YOUTH"} percent={true} />
    </div>
  );
};

const StatisticsCard = ({ count, text, percent }) => {
  return (
    <div className="flex rounded-lg w-[100%] md:w-[70%] lg:w-[90%] h-28 mx-0 md:mx-auto items-center justify-around text-black dark:text-white bg-gray-200 dark:bg-slate-800">
      <div className="text-5xl font-semibold">
        {count} {percent ? "%" : "+"}{" "}
      </div>
      <div className="text-xl">{text} </div>
    </div>
  );
};

export default Statistics;
