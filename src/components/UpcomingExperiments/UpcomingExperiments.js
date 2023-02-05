import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
let UpcomingExperimentsList = [];
let date = new Date();
let TodayDay = date.getDate();
let TodayMonth = date.getMonth() + 1;
let TodayYear = date.getFullYear();

let fullDate = `${TodayDay}-0${TodayMonth}-${TodayYear}`;
console.log(fullDate);
let list = [];
export default function UpcomingExperiments() {
  const [calendarList, setCalendarList] = useState([]);
  async function getData(){
    const query = query(collection(db,"calendar-data"),orderBy("timeOfUpdate", "asc"));
    const snapshot  = await getDocs(query);
    setCalendarList(snapshot.doc.map((doc)=>doc.data))
  }
  useEffect(() => {
    getData();
  }, [calendarList]);

  calendarList &&
    calendarList.forEach((calendar) => {
      UpcomingExperimentsList.push({
        dateValue: new Date(
          `${calendar.year}-${calendar.month}-${calendar.date}`
        ),
        date: `${calendar.date}-${calendar.month}-${calendar.year}`,
        nameOfExperiment: calendar.experimentName,
      });
    });

  if (UpcomingExperimentsList) {
    list = UpcomingExperimentsList.filter(
      (item) => item.dateValue >= date || item.date === fullDate
    );
  }

  // console.log(list);
  // const updatedList = [...new Set(list)];
  // console.log(updatedList);
  const middleIndex = Math.ceil(list.length / 2);

  const firstHalf = list.splice(0, middleIndex);
  return (
    <div className="flex justify-center items-center flex-col  mt-[10px] ">
      {firstHalf &&
        firstHalf.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center bg-white w-[10rem] h-[5rem] m-[10px] rounded-xl">
              <h2>{item.date}</h2>
              <h2>{item.nameOfExperiment}</h2>
            </div>
          );
        })}
    </div>
  );
  
}
