import { Link } from "react-router-dom";

import { Progress } from "antd";
import React from "react";
import {
  IoPersonCircleOutline,
  IoPeopleCircleOutline,
  IoPieChart,
} from "react-icons/io5";

export const SubjectCard = ({
  nameOfExperiment,
  link,
  img,
  teacherName,
  numberOfStudents,
  hours,
}) => {

  return (
    <div className="bg-white rounded-[20px] m-[10px] overflow-hidden hover:shadow-md min-w-[16rem]">
      <div className="flex p-4 ">
        <div className="mr-2">
          <img
            src={img}
            alt="subject banner"
            className="w-[60px] h-[60px] rounded-[12px]"
          />
        </div>
        <div className="">
          <h3 className="h3">{nameOfExperiment}</h3>
          <span className="flex align-middle">
            <IoPersonCircleOutline className="icon-medium mr-2" />
            <p className="p">{teacherName}</p>
          </span>
        </div>
      </div>

      <div className="px-4">
        <Progress percent={10} status="active" />
      </div>
      <div className="p-4 flex flex-wrap">
        <div className="flex w-1/2 my-2">
          <IoPieChart className="icon-small" />{" "}
          <p className="p">{numberOfStudents} students</p>
        </div>
        <div className="flex w-1/2 my-2">
          <IoPeopleCircleOutline className="icon-small" />{" "}
          <p className="p">{hours} H/week</p>
        </div>
      </div>
      <Link to={`${link}`}>
        <div className="w-full cursor-pointer p-3 flex align-middle justify-center bg-white hover:bg-gray-100 border-t border-custom-gray">
          <h4 className="h4 text-green-500">View class</h4>
        </div>
      </Link>
    </div>
  );
};
