import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import {SubmittedCard,ExperimentList} from "../components/card/SubmittedCard";
export default function AdminSubmittedExperiment() {
  const [completedExperimentList, setCompletedExperimentList] = useState([]);
  const [flag, setFlag] = useState(false);

  const studentName = [
    {
      name: "Anish Prashun",
      class: "B-Tech 5th",
      subject:"Digital Electronics",
      img: "https://res.cloudinary.com/a-lab/image/upload/v1630142353/Screenshot_2021-08-28_at_2.49.02_PM_a2jeib.png",
      enrollment:"A45605219007"
    },
    {
      name: "Vikrant Singh",
      class: "B-Tech 5th",
      subject:"Digital Electronics",
      img: "https://res.cloudinary.com/a-lab/image/upload/v1630163262/66239767_1_cyrexq.jpg",
      enrollment:"A45605219007"
    },
  ];
  useEffect(() => {
    db.collection("experiments-completed")
      .orderBy("timeOfSubmission", "asc")
      .onSnapshot((experiment) => {
        setCompletedExperimentList(
          experiment.docs.map((doc) => [
            {
              experimentLink: doc.data().experimentlink,
              id: doc.id,
              experimentIsCorrect: doc.data().experimentIsCorrect,
              grade: doc.data().grade,
            },
          ])
        );
      });
  }, []);
  return (
    <div className=" sm:w-[82vw]">
      <h1 className="h1 text-green-500">Submitted Experiments</h1>
      <div className="w-[70%] flex p-0">
        <div className="min-h-[80vh] overflow-scroll ">
          {studentName.map((data) => {
            return (
            <div  onClick={() => setFlag(!flag)}>
              <SubmittedCard img={data.img} name={data.name} Class={data.class} enroll={data.enrollment} subject={data.subject}/>
           </div>
            );
          })}
        </div>
        {flag ? (
          <div className="w-[50%]">
            {completedExperimentList.map((experiment) => {
              return (
                <div className="bg-white w-[320px] p-[10px] rounded-[10px] ml-16 my-5 flex flex-col items-center">
                  <ExperimentList experimentName="8 bit adder" experimentNo="3"/>
                  <Link to={"/experiment-received/" + experiment[0].id}>
                  <div className="w-full cursor-pointer p-3 flex align-middle justify-center bg-white hover:bg-gray-100 border-t border-custom-gray">
            
            <h4 className="h4 text-green-500">Submitted Files</h4>
          </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
