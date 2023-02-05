import { NavLink } from "react-router-dom";
import {
  IoBrowsersOutline,
  IoCalendar,
  IoChatboxEllipses,
  IoLogOut,
  IoTerminal,
  IoEasel,
} from "react-icons/io5";
import { AiFillBook } from "react-icons/ai";

function SidebarAdmin() {
  const linkStyle =
    "text-custom-text-gray flex items-center p-4 duration-200 justify-start  dark:from-gray-700 dark:to-gray-800  hover:bg-custom-light hover:text-custom-text-blue hover:rounded-lg font-medium w-[220px] mx-2";

  const activeStyle = {
    color: "#233484",
    borderRadius: 15,
    background: "#F5F9FF",
    border: "1px solid #ededed"
  };

  return (
    <div className="h-[100vh] hidden sm:flex bg-white  flex-col justify-between">
      <div className="bg-white  dark:bg-gray-700 ">
        <div className="">
          <img
            src="https://a-lab.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fa-lab%2Fimage%2Fupload%2Fv1628666821%2Flanding-page%2Flogo-light_oxz1tr.svg&w=384&q=75"
            alt="logo"
            className="w-[90px] mx-4 mt-5"
          />
        </div>
        <nav className="mt-6">
          <div className="flex flex-col items-center justify-center ">
            <NavLink
              className={`${linkStyle}`}
              activeStyle={activeStyle}
              to="/admin-dashboard">
              <span className="text-2xl">
                <IoBrowsersOutline />
              </span>
              <span className="mx-4 text-sm ">Dashboard</span>
            </NavLink>
            <NavLink
              className={`${linkStyle}`}
              activeStyle={activeStyle}
              to="/experiments-completed">
              <span className="text-2xl">
                <IoEasel />
              </span>
              <span className="mx-4 text-sm">Experiments</span>
            </NavLink>
            <NavLink
              className={`${linkStyle}`}
              activeStyle={activeStyle}
              to="/admin-code">
              <span className="text-2xl">
                <IoTerminal />
              </span>
              <span className="mx-4 text-sm">Code</span>
            </NavLink>
            <NavLink
              className={`${linkStyle}`}
              activeStyle={activeStyle}
              to="/admin-submitted-experiment">
              <span className="text-2xl">
                <AiFillBook />
              </span>
              <span className="mx-4 text-sm">Submitions</span>
            </NavLink>
            <NavLink
              className={`${linkStyle}`}
              activeStyle={activeStyle}
              to="/admin-message">
              <span className="text-2xl">
                <IoChatboxEllipses />
              </span>
              <span className="mx-4 text-sm">Messages</span>
            </NavLink>
            <NavLink
              className={`${linkStyle}`}
              activeStyle={activeStyle}
              to="/admin-calendar">
              <span className="text-2xl">
                <IoCalendar />
              </span>
              <span className="mx-4 text-sm">Calendar</span>
            </NavLink>
          </div>
        </nav>
      </div>

      <div
        className={`text-custom-text-gray flex items-center p-4 duration-200 justify-start  dark:from-gray-700 dark:to-gray-800 hover:text-custom-text-blue font-medium w-[220px] mx-2 cursor-pointer`}
        onClick={() => {
          localStorage.removeItem("userAuthenticated");
          localStorage.removeItem("isAdmin");
          window.location.reload();
        }}>
        <span className="text-2xl">
          <IoLogOut />
        </span>
        <span className="mx-4 text-sm">Log Out</span>
      </div>
    </div>
  );
}

export default SidebarAdmin;
