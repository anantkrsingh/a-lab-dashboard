import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

export default function ReceivedExperiment() {
  const { experimentId } = useParams();
  const [completedExperimentList, setCompletedExperimentList] = useState([]);
  const [correct, setCorrect] = useState(false);
  const [gradeValue, setGradeValue] = useState("");
  const [review, setReview] = useState("");
  useEffect(() => {
    db.collection("experiments-completed")
      .orderBy("timeOfSubmission", "desc")
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

  const openExperiment = completedExperimentList.filter(
    (experiment) => experiment[0].id === experimentId
  );
  const handleSubmit = (id) => {
    db.collection("experiments-completed")
      .doc(id)
      .update({
        experimentIsCorrect: correct,
        grade: gradeValue,
        review: review,
      });
  };
  console.log(openExperiment);
  return (
    <div>
      {openExperiment && (
        <div>
          {openExperiment.map((experiment) => {
            console.log(experiment[0].experimentLink);
            return (
              <div>
                <iframe
                  title="experiment"
                  src={experiment[0].experimentLink}
                  width="450px"
                  height="450px"
                  id="myId"
                  className="myClassname"
                  position="relative"
                />
                <div className="flex flex-col justify-between">
                  <div className="flex mt-[20px] mb-[20px]">
                    <button
                      className="border-[1px] border-black mr-[10px]  h-[30px] w-[4rem] rounded-[5px] hover:bg-green-500 hover:text-white hover:border-white focus:outline-none "
                      onClick={() => setCorrect(true)}>
                      Yes
                    </button>
                    <button
                      className="border-[1px] border-black  h-[30px] w-[4rem]  rounded-[5px] hover:bg-red-500 hover:text-white hover:border-white focus:outline-none "
                      onClick={() => setCorrect(false)}>
                      No
                    </button>
                  </div>
                  <div className="max-w-[14rem] flex items-center ">
                    <input
                      className="border-[1px] border-black w-full h-[42px]  rounded-[10px]  focus:outline-none "
                      type="text"
                      placeholder="Grade "
                      value={gradeValue}
                      onChange={(e) => setGradeValue(e.target.value)}
                    />
                    <input
                      type="text"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                    />
                    <button onClick={() => handleSubmit(experiment[0].id)}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
