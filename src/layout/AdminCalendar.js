import { useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
export default function AdminCalendar() {
  const [date, setDate] = useState("");
  const [experimentName, setExperimentName] = useState("");

  let arrayDate = date.split("-");
  console.log(date.split("-"));
  const handleSubmit = () => {
    db.collection("calendar-data")
      .add({
        experimentName: experimentName,
        year: arrayDate[0],
        month: arrayDate[1],
        date: arrayDate[2],
        timeOfUpdate: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        alert("Calendar updated");
      })
      .catch((err) => {
        alert("Error updating");
      });
  };
  return (
    <div>
      <h1>Admin calendar</h1>
      <input
        type="text"
        value={experimentName}
        onChange={(e) => setExperimentName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
