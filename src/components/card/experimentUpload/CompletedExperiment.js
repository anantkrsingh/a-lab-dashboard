/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AiFillFilePdf } from "react-icons/ai";
import { db } from "../../../firebase";

export default function CompletedExperiment() {
  const [completedExperimentList, setCompletedExperimentList] = useState([]);
  const [filteredCompletedExperimentList, setFilteredCompletedExperimentList] =
    useState([]);
  useEffect(() => {
    db.collection("experiments-completed")
      .orderBy("timeOfSubmission", "asc")
      .onSnapshot((experiment) => {
        setCompletedExperimentList(experiment.docs.map((doc) => doc.data()));
      });
    getFilteredData();
  }, [completedExperimentList]);
  const getFilteredData = () => {
    const filterCompletedExperimentList = completedExperimentList.filter(
      (experiment) => experiment.experimentIsCorrect === true
    );
    setFilteredCompletedExperimentList(filterCompletedExperimentList);
  };
  console.log(completedExperimentList);
  return (
    <div className="flex flex-wrap">
      {filteredCompletedExperimentList.map((experiment) => {
        return (
          <div
            className={`bg-white border w-[15rem]  m-[10px] rounded-xl p-[10px] h-full items-center justify-center`}>
            <a target="_blank" href={experiment.experimentlink} className="flex justify-around" rel="noreferrer">
              <AiFillFilePdf className="h-[30px]" />
              <h1>Link to the experiment Pdf </h1>
            </a>
            <h3>Grade : {experiment.grade}</h3>
          </div>
        );
      })}
    </div>
  );
}
