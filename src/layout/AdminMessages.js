import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import AdminMessagesSection from "../components/Message/AdminMessanging/AdminMessagingSection";
import {MessageCard} from "../components/card/SubmittedCard";

export default function AdminMessages() {
  const [flag, setFlag] = useState(false);
  const studentName = [
    {
      name: "Vikrant Singh",
      class: "B-Tech 5th",
      question:"What is the of use of Multiplexer?",
      img: "https://res.cloudinary.com/a-lab/image/upload/v1630163262/66239767_1_cyrexq.jpg",
      enrollment:"A45605219007"
    },
  ];
  return (
    // <div className=" sm:w-[82vw]">
    // <h1 className="h1 text-green-500">Submitted Codes</h1>
    <div className="w-[82vw] flex p-0">
      <div className="h-[97vh] overflow-scroll">
        {studentName.map((data) => {
          return (
            <div
              className="hover:cursor-pointer"
              onClick={() => setFlag(!flag)}>
              <MessageCard img={data.img} name={data.name} Class={data.class} enroll={data.enrollment} question={data.question}/>

            </div>
          );
        })}
      </div>
      {flag ? <AdminMessagesSection /> : " "}
    </div>
  );
}
