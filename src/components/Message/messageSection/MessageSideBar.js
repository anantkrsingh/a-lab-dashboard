import React from "react";

import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, NavLink, Route } from "react-router-dom";

import { subjectcardData } from "../../../pages/subjectcardData";
import StudentMessaging from "../StudentMessaging/StudentMessaging";

function MessageSideBar() {
  const data = "two";

  const filterdata = subjectcardData.filter(
    (e) => e.semester === "three" || e.semester === data
  );

  const activeStyle = {
    color: "#233484",
    borderRadius: 15,
    background: "#F5F9FF",
    border: "1px solid #ededed",
  };

  return (
    <div className="sm:max-w-[30vw] flex border-r-[2px] border-black">
      <div>

      {filterdata.map((data) => {
        return (
          <NavLink
          to="/message/studentMessaging"
            activeStyle={activeStyle}
            >
            <div className="bg-white rounded-[20px] m-[10px] overflow-hidden hover:shadow-md min-w-[16rem]">
              <div className="flex p-4 ">
                <div className="mr-2">
                  <img
                    src={data.img}
                    alt="subject banner"
                    className="w-[60px] h-[60px] rounded-[12px]"
                    />
                </div>
                <div className="">
                  <h3 className="h3">{data.nameOfExperiment}</h3>
                  <span className="flex align-middle">
                    <IoPersonCircleOutline className="icon-medium mr-2" />
                    <p className="p">{data.teacherName}</p>
                  </span>
                </div>
              </div>
            </div>
          </NavLink>
        );
      })}
      </div>

    </div>
  );
}

export default MessageSideBar;
