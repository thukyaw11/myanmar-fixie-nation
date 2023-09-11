const ProfileCard = ({member}) => {
  return (
    <div className=" overflow-hidden bg-white dark:bg-slate-800  border border-gray-200 dark:border-slate-800 rounded-lg shadow mx-2">
      <div className="flex justify-center">
        <img
          className="shadow-lg w-96 h-72 rounded-lg object-cover transition duration-300 hover:scale-90"
          src={member.imageURL}
          alt="myanmar-fixie-nation"
        />
      </div>
      <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-white">
         {member.position}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
