import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { subjectcardData } from "../../../pages/subjectcardData";

function ExperimentUploadCard() {
  const data = "two";

  const filterdata = subjectcardData.filter(
    (e) => e.semester === "three" || e.semester === data
  );
  console.log(filterdata);
  return (
    <div>
      {filterdata.map((data) => {
        return (
          <Link to="/submitted-experiment/submitExpriment">
            <div className="bg-white rounded-xl m-[10px] overflow-hidden border min-w-[16rem]">
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
          </Link>
        );
      })}

    </div>
  );
}

export default ExperimentUploadCard;
