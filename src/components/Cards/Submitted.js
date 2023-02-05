import { Progress } from "antd";
import React from "react";
import {
  IoPersonCircleOutline,
  IoFolderOpen,
  IoHourglassOutline,
  IoPeopleCircleOutline,
  IoPieChart,
} from "react-icons/io5";
import { Link } from "react-router-dom";

export default function SubmittedCard({
  name,
  img,
  Class,
  enroll,
  subject,
  link,
}) {
  return (
    <div className="bg-white rounded-xl m-[10px] overflow-hidden hover:shadow-sm max-w-[350px] border border-gray-200">
      <div className="flex p-4 ">
        <div className="mr-2 w-[60px] h-[60px]">
          <img
            src={img}
            alt="subject banner"
            className="w-[60px] h-[60px] rounded-[10px]"
          />
        </div>
        <div className="w-[240px] truncate">
          <h3 className="h3 truncate">{name}</h3>
          <span className="flex align-middle mt-1">
            <IoPersonCircleOutline className="icon-medium mr-2" />
            <p className="p truncate">{subject}</p>
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-wrap">
        <div className="flex w-1/2 my-2">
          <IoFolderOpen className="icon-small" /> <p className="p">{Class}</p>
        </div>
        <div className="flex w-1/2 my-2">
          <IoHourglassOutline className="icon-small" />{" "}
          <p className="p">{enroll}</p>
        </div>
        <div className="flex w-1/2 my-2">
          <IoPieChart className="icon-small" /> <p className="p">30 students</p>
        </div>
        <div className="flex w-1/2 my-2">
          <IoPeopleCircleOutline className="icon-small" />{" "}
          <p className="p">3 H/week</p>
        </div>
      </div>

      <Link to={`/${link}`}>
        <div className="w-full cursor-pointer p-3 flex align-middle justify-center bg-white hover:bg-gray-100 border-t border-custom-gray">
          <h4 className="h4 text-green-500">Submitted File</h4>
        </div>
      </Link>
    </div>
  );
}
