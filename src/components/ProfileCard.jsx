const ProfileCard = ({member}) => {
  return (
    <div class=" overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
      <div className="flex justify-center">
        <img
          class="shadow-lg w-96 h-72 rounded-lg object-cover "
          src={member.imageURL}
          alt="Bonnie image"
        />
      </div>
      <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
         {member.position}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
