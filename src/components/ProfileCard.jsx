const ProfileCard = () => {
  return (
    <div class="w-96 h-96 max-w-xs overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
      <div className="flex justify-center">
        <img
          class="h-auto w-72 rounded-md shadow-lg mt-4"
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
          alt="Bonnie image"
        />
      </div>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Min Thu Kyaw
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
