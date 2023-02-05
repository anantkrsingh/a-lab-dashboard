import { NavLink } from "react-router-dom";
import {
  IoBrowsersOutline,
  IoCalendar,
  IoChatboxEllipses,
  IoLibrary,
  IoLogOut,
  IoTerminal,
} from "react-icons/io5";
import { AiFillExperiment, AiFillBook } from "react-icons/ai";

export const BottomNav = () => {
  const linkStyle =
    "text-custom-text-gray flex items-center p-4  justify-start  dark:from-gray-700 dark:to-gray-800  ";

  const activeStyle = {
    color: "#233484",
    borderRadius: 15,
    // background: "#F5F9FF",
  };
  return (
    <div className="fixed z-10 left-[2%] top-[88vh] justify-center items-center flex rounded-[10px] h-[10vh]  w-[96vw] bg-white  shadow    sm:hidden  ">
      <div className="flex justify-between w-[90%]">
        <div className="flex ">
          <NavLink
            className={`${linkStyle}`}
            activeStyle={activeStyle}
            to="/dashboard"
          >
            <span className="text-2xl">
              <IoBrowsersOutline />
            </span>
          </NavLink>
          <NavLink
            className={`${linkStyle}`}
            activeStyle={activeStyle}
            to="/courses"
          >
            <span className="text-2xl">
              <IoLibrary />
            </span>
          </NavLink>
          <NavLink
            className={`${linkStyle}`}
            activeStyle={activeStyle}
            to="/experiment"
          >
            <span className="text-2xl">
              <AiFillExperiment />
            </span>
          </NavLink>
          <NavLink
            className={`${linkStyle}`}
            activeStyle={activeStyle}
            to="/code"
          >
            <span className="text-2xl">
              <IoTerminal />
            </span>
          </NavLink>
          <NavLink
            className={`${linkStyle}`}
            activeStyle={activeStyle}
            to="/submitions"
          >
            <span className="text-2xl">
              <AiFillBook />
            </span>
          </NavLink>
          <NavLink
            className={`${linkStyle}`}
            activeStyle={activeStyle}
            to="/message"
          >
            <span className="text-2xl">
              <IoChatboxEllipses />
            </span>
          </NavLink>
          <NavLink
            className={`${linkStyle}`}
            activeStyle={activeStyle}
            to="/calendar"
          >
            <span className="text-2xl">
              <IoCalendar />
            </span>
          </NavLink>
        </div>
        <div
          className="flex ml-[20px] items-center cursor-pointer"
          onClick={() => {
            localStorage.removeItem("userAuthenticated");
            localStorage.removeItem("isAdmin");
            window.location.reload();
          }}
        >
          <span className="text-2xl">
            <IoLogOut />
          </span>
        </div>
      </div>
    </div>
  );
};
