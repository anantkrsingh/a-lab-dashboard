import { useEffect, useState } from "react";
import { db } from "../firebase";


import StudentMessaging from "../components/Message/StudentMessaging/StudentMessaging";
import { subjectcardData } from "../pages/subjectcardData";
import { IoPersonCircleOutline } from "react-icons/io5";
export default function StudentMessage() {
  // const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timeOfMessage", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  console.log(messages);
  const data = "two";

  const filterdata = subjectcardData.filter(
    (e) => e.semester === "three" || e.semester === data
  );

  return (
    <div className="w-[82vw] flex p-0">
      <div className="h-[97vh] overflow-scroll">
        {filterdata.map((data) => {
          return (
            <div onClick={() => setFlag(!flag)}>
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
            </div>
          );
        })}
      </div>
      {flag ? <StudentMessaging /> : " "}
    </div>
  );
}
