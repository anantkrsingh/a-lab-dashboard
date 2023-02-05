import { useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { db,app } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
export default function DashBoardCalendar() {
  const history = useNavigate();
  const [preselectedDays, setPreSelectedDays] = useState([]);
  const [calendarList, setCalendarList] = useState([]);

  const setCalendarData = (data) => {
    let array = [];
    data &&
      data.map((item) => {
        array.push({
          year: parseInt(item.year),
          month: parseInt(item.month),
          day: parseInt(item.date),
        });
      });
    setPreSelectedDays(array);
  };
  async function getData(){
    const query  = query(collection(db,"calendar-data"),orderBy("timeOfUpdate", "desc"));
    const snapshot = await getDocs(query);
    setCalendarList(snapshot.docs.map((doc) => doc.data()));
    setCalendarData(calendarList);
  }
  useEffect(() => {
    getData();    
  }, [calendarList])
  
  return (
    <div className="max-h-[50vh] mb-[10px]">
      <Calendar
        value={preselectedDays}
        colorPrimary="#57BF8D"
        onChange={() => history.push("/calendar")}
        shouldHighlightWeekends
        style={{
          boxShadow: "none",
          border: "1px solid red"
        }}
      />
    </div>
  );
}