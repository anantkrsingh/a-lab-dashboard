import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { CodeLab } from "../components/card/SubmittedCard";
import SubmittedCard from "../components/Cards/Submitted";

export default function AdminCode() {
  const [completedExperimentList, setCompletedExperimentList] = useState([]);
  const [flag, setFlag] = useState(false);

  const studentName = [
    {
      name: "Kumar Deepanshu",
      class: "B-Tech 5th",
      subject: "DSA Using C++",
      img: "https://res.cloudinary.com/a-lab/image/upload/v1630166004/Screenshot_2021-08-28_at_9.22.59_PM_t1ixgj.png",
      enrollment: "A45605219003",
    },
    {
      name: "Subham Kumar",
      class: "B-Tech 5th",
      subject: "Object Oriented Programming C++",
      img: "https://res.cloudinary.com/a-lab/image/upload/v1630165905/Screenshot_2021-08-28_at_9.21.08_PM_vmfkcn.png",
      enrollment: "A45605219002",
    },
  ];
  useEffect(() => {
    db.collection("coding-completed")
      .orderBy("timeOfSubmission", "desc")
      .onSnapshot((experiment) => {
        setCompletedExperimentList(
          experiment.docs.map((doc) => [
            {
              experimentLink: doc.data().codingData,
              id: doc.id,
              experimentIsCorrect: doc.data().codingIsCorrect,
              grade: doc.data().grade,
            },
          ])
        );
      });
  }, []);

  return (
    <div className=" sm:w-[82vw]">
      <h1 className="h1 text-green-500">Submitted Codes</h1>
      <div className="w-[70%] flex p-0">
        <div className="min-h-[80vh] overflow-scroll ">
          {studentName.map((data) => {
            return (
              <div onClick={() => setFlag(!flag)}>
                <SubmittedCard
                  img={data.img}
                  name={data.name}
                  Class={data.class}
                  enroll={data.enrollment}
                  subject={data.subject}
                />
              </div>
            );
          })}
        </div>
        {flag ? (
          <div className="w-[50%]">
            {completedExperimentList.map((experiment) => {
              return (
                <div className="bg-white w-[320px] p-[10px] rounded-[10px] ml-16 my-5 flex flex-col items-center">
                  <CodeLab question="Stack" language="C++" />
                  <Link to={"/coding-received/" + experiment[0].id}>
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
