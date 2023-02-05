import { useEffect, useState } from "react";

import RevoCalendar from "revo-calendar";
import { db } from "../firebase";

export default function CalendarMenu() {
  const [eventList, setEventList] = useState([]);

  const fetchIdea = async () => {
    db.collection("calendar-data")
      .get()
      .then((ideas) => {
        const data = ideas.docs.map((doc) => {
          let data = {
            date: new Date(
              parseInt(doc.data().year),
              parseInt(doc.data().month) - 1,
              parseInt(doc.data().date)
            ),
            name: doc.data().experimentName,
            allDay: true,
          };
          return data;
        });
        setEventList(data);
      });
  };

  useEffect(() => {
    fetchIdea();
  }, []);

  return (
    <div>
      <RevoCalendar
        events={eventList}
        style={{
          borderRadius: "10px",
          border: "1px solid #ededed",
          width: "100%",
          height: "95vh",
        }}
        highlightToday={true}
        lang="en"
        primaryColor="#AEE1E7"
        secondaryColor="#fff"
        todayColor="green"
        textColor="#233484"
        indicatorColor="green"
        animationSpeed={300}
        sidebarWidth={180}
        detailWidth={280}
        showDetailToggler={true}
        showSidebarToggler={true}
        onePanelAtATime={false}
        openDetailsOnDateSelection={true}
        timeFormat24={true}
        showAllDayLabel={false}
        detailDateFormat="DD/MM/YYYY"
      />
    </div>
  );
}
