import React from "react";
import ExperimentGrade from "../components/Cards/ExperimentGrade";

import DashBoardCalendar from "../components/DashboardCalendar/DashBoardCalendar";
import DashBoardHeader from "../components/Header/DashBoardHeader";
import UpcomingExperiments from "../components/UpcomingExperiments/UpcomingExperiments";
import csIcon from "../assets/icons/cs.png";
import bioTechIcon from "../assets/icons/biotech.png";

import { Menu } from "antd";
import { Link } from "react-router-dom";
import CourseCard from "../components/Cards/Course";
import SubjectCard from "../components/Cards/Subject";

export default function DashBoard() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Anish Prashun
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Amity University Patna
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          BTech CSE 5th semester
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex -mt-4 -ml-4 -mr-4 -mb-4">
      <div className="p-4 w-full">
        <div className="mb-4">
          <h1 className="h3">Hey, Anish 👋</h1>
          <h4 className="p">Welcome back, nice to see you </h4>
        </div>
        <ExperimentGrade />

        <div className="flex justify-between py-4">
          <h3 className="h3">My Classes</h3>
          <Link to="/courses">
            <h4 className="h4 text-green-500">See all</h4>
          </Link>
        </div>
        <div className="flex overflow-hidden w-full">
          <SubjectCard
            nameOfExperiment={"Digital Electronic"}
            link={"/experiments/sem-three/digital-electronics"}
            img={
              "https://res.cloudinary.com/a-lab/image/upload/v1629640215/EletronicsAndCommunicationEngineering/digital_circuit_abxoxs.png"
            }
            teacherName="Ravi shekhar sir"
          />

          <SubjectCard
            nameOfExperiment={"Digital Electronic"}
            link={"/experiments/sem-three/digital-electronics"}
            img={
              "https://res.cloudinary.com/a-lab/image/upload/v1629640215/EletronicsAndCommunicationEngineering/digital_circuit_abxoxs.png"
            }
            teacherName="Ravi shekhar sir"
          />
        </div>
      </div>

      <div className="bg-gray-100 flex flex-col h-[100vh] p-4 ">
        <div className="h-[50%]" >

        <DashBoardCalendar  />
        </div>

        <div className="overflow-x-scroll h-[50%]">
          <UpcomingExperiments />
        </div>
      </div>
    </div>
  );
}
