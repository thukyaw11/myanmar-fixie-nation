import { IonIcon } from "@ionic/react";
import { close, menu  } from "ionicons/icons";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  const headersLink = [
    {
      headerTab: "Home",
    },
    {
      headerTab: "About Us",
    },
    {
      headerTab: "Activities",
    },
    {
      headerTab: "Team",
    },
    {
      headerTab: "Blog",
    },
  ];

  const navListItems = headersLink.map((navList) => (
    <li key={navList.headerTab}>
      <a href="" className="hover:text-gray-500">
        {navList.headerTab}
      </a>
    </li>
  ));

  return (
    <header>
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            className="w-16"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt=""
          />
        </div>
        <div
          className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 duration-500 ${
            toggle ? "top-[-100%]" : "top-[9%]"
          }`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {navListItems}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-[#333634]">
            Join Us
          </button>

          {toggle ? (
            <IonIcon
              icon={menu}
              className="text-3xl cursor-pointer md:hidden"
              onClick={changeToggle}
            ></IonIcon>
          ) : (
            <IonIcon
              icon={close}
              className="text-3xl cursor-pointer md:hidden"
              onClick={changeToggle}
            ></IonIcon>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;