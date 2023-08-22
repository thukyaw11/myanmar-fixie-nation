import ProfileCard from "../components/ProfileCard";
const Team = () => {
  return (
    <div className="mt-16">
      <p className="text-center text-3xl text-black font-semibold mb-10">Our Team</p>

      <div class="flex flex-col bg-white m-auto p-auto h-full">
        <div class="flex overflow-x-scroll hide-scroll-bar">
          <div class="flex flex-nowrap">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
           
          </div>
        </div>
      </div>

      <p className="text-center text-3xl text-black font-semibold">Our Team</p>

    </div>
  );
};

export default Team;
