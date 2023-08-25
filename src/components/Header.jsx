import { IonIcon } from "@ionic/react";
import { close, menu } from "ionicons/icons";
import { useState } from "react";
import Switcher from "../helper/Switcher";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  const headersLink = [
    {
      headerTab: "Home",
      linkTo: "home",
    },
    {
      headerTab: "About Us",
      linkTo: "aboutus",
    },
    {
      headerTab: "Activities",
      linkTo: "activities",
    },
    {
      headerTab: "Team",
      linkTo: "team",
    },
    {
      headerTab: "Blog",
      linkTo: "hoc",
    },
    {
      headerTab: "Contact Us",
      linkTo: "contact",
    },
  ];

  const navListItems = headersLink.map((navList, index) => (
    <li key={index}>
      <Link
        to={navList.linkTo}
        smooth={true}
        spy={true}
        className="hover:text-gray-500"
      >
        {navList.headerTab}
      </Link>
    </li>
  ));

  return (
    <header>
      <div
        className={`${
          toggle ? "navMobile open" : "navMobile"
        } flex flex-col bg-white dark:bg-[#0F172A]`}
      >
        {headersLink.map((mobileNavList, index) => (
          <Link
            to={mobileNavList.linkTo}
            smooth={true}
            spy={true}
            className="text-2xl text-black dark:text-white w-[80%] text-center mb-8 bg-gray-200 dark:bg-slate-800 py-3 rounded-full"
            key={index}
            onClick={() => setToggle(false)}
          >
            {mobileNavList.headerTab}
          </Link>
        ))}
        <div
          className="text-2xl text-black dark:text-white w-[80%] text-center bg-red-200 py-3 rounded-full flex justify-center"
          onClick={() => setToggle(false)}
        >
          <IonIcon
            icon={close}
            className="text-3xl cursor-pointer text-black close-icon"
          ></IonIcon>
        </div>
      </div>
      <nav className="flex justify-between items-center w-[92%] mx-auto  ">
        <div>
          <img className="w-20" src={logo} alt="" />
        </div>
        <div className="md:static hidden bg-red md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full md:flex items-center px-5 duration-500">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-black dark:text-white hover:cursor-pointer">
            {navListItems}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-black dark:bg-white dark:text-black text-white px-5 py-2 rounded-full hover:bg-[#333634] dark:hover:bg-gray-400 transition duration-300">
            Join Us
          </button>
          <Switcher />

          {!toggle ? (
            <IonIcon
              icon={menu}
              className="text-3xl cursor-pointer md:hidden dark:text-white"
              onClick={changeToggle}
            ></IonIcon>
          ) : (
            <IonIcon
              icon={close}
              className="text-3xl cursor-pointer md:hidden dark:text-white"
              onClick={changeToggle}
            ></IonIcon>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
