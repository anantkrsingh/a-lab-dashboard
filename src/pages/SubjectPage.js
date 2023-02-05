

import { useContext } from "react";

import { subjectcardData } from "./subjectcardData";
import { ExperimentsContext } from "../context/experimentContext";
import SubjectCard from "../components/Cards/Subject";

export const SubjectPage = () => {
  const { dropdown } = useContext(ExperimentsContext);

  const filterdata = subjectcardData.filter((e) => e.semester === dropdown);
  console.log(filterdata);
  return (
    <div className="flex  flex-wrap">

      {filterdata.map((data) => {
        return <SubjectCard nameOfExperiment={data.nameOfExperiment} link={data.link} img={data.img} teacherName={data.teacherName} />
      })}
    </div>
  );
};
