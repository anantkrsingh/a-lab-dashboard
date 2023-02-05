import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

import AdminCodeEditor from "../components/AdminCodeEditor/AdminCodeEditor";

export default function ReceivedCode() {
  const { codeId } = useParams();
  const [completedExperimentList, setCompletedExperimentList] = useState([]);
  const [correct, setCorrect] = useState(false);
  const [gradeValue, setGradeValue] = useState("");
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

  const openExperiment = completedExperimentList.filter(
    (experiment) => experiment[0].id === codeId
  );
  const handleSubmit = (id) => {
    db.collection("coding-completed")
      .doc(id)
      .update({ codingIsCorrect: correct, grade: gradeValue });
  };
  console.log(openExperiment);
  return (
    <div>
      {openExperiment && (
        <div>
          {" "}
          {openExperiment.map((experiment) => {
            return (
              <div>
                <AdminCodeEditor ReceivedCode={experiment[0].experimentLink} />
                <button onClick={() => setCorrect(true)}>Yes</button>
                <button onClick={() => setCorrect(false)}>No</button>
                <input
                  type="text"
                  value={gradeValue}
                  onChange={(e) => setGradeValue(e.target.value)}
                />
                <button onClick={() => handleSubmit(experiment[0].id)}>
                  Submit
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
