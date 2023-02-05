import React, { useEffect, useState } from "react";

import { db, storage } from "../../../firebase";
import firebase from "firebase/compat/app";
import { Button, Progress } from "antd";

import { AiFillFilePdf } from "react-icons/ai";

function ShowExpeiment() {
  const [experimentData, setexperimentData] = useState(null);
  const [experimentDataUrl, setexperimentDataUrl] = useState("");
  const [experimentDataUploadProgress, setexperimentDataUploadProgress] =
    useState(0);
  const [experimentDataString, setexperimentDataString] = useState("");
  const [completedExperimentList, setCompletedExperimentList] = useState([]);

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  useEffect(() => {
    db.collection("experiments-completed")
      .orderBy("timeOfSubmission", "asc")
      .onSnapshot((experiment) => {
        setCompletedExperimentList(experiment.docs.map((doc) => doc.data()));
      });
  }, []);
  useEffect(() => {
    setexperimentDataString(generateString(5));
  }, []);
  const handleProfileUpload = (e) => {
    if (e.target.files[0]) {
      setexperimentData(e.target.files[0]);
    }
  };
  const experimentDataUpload = (e) => {
    e.preventDefault();

    const uploadexperimentDataTask = storage
      .ref(`completed-experiment/${experimentDataString}`)
      .put(experimentData);

    uploadexperimentDataTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setexperimentDataUploadProgress(progress);
      },
      (error) => {
        // Error function ...
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function ...
        storage
          .ref("completed-experiment")
          .child(experimentDataString)
          .getDownloadURL()
          .then((url) => {
            setexperimentDataUrl(url);
          });
      }
    );
  };

  const experimentUpload = () => {
    db.collection("experiments-completed")
      .add({
        experimentlink: experimentDataUrl,
        experimentIsCorrect: false,
        grade: "",
        timeOfSubmission: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        // setLoader(false);
        alert(`Your experiment has been submitted.`);
      })
      .catch((error) => {
        alert(error.message);
        // setLoader(false);
      });
  };
  return (
    <div className="sm:w-[82vw]">
      <div className="flex justify-between flex-wrap">
        <div className="w-[40vw]">
          <div className="flex justify-around">
            <div className="flex flex-col items-center ">
              <h1 className="">Lab Work </h1>
              <span>
                <p> Due 17 February 2021 23:59 </p>{" "}
              </span>
            </div>
            <div className="flex flex-col">
              <p> Points</p>
              <span>30 </span>
            </div>
          </div>
          <div className="flex flex-col w-[50%]">
            <h1 className="flex">
              <p>Upload your Work</p>
            </h1>

            <div className="flex flex-col relative">
              {completedExperimentList.map((experiment) => {
                let corrected = experiment.experimentIsCorrect
                  ? `bg-green-400`
                  : `bg-custom-gray`;
                return (
                  <div
                    className={`${corrected} border-[1px] border-black w-[15rem]  m-[10px] rounded-[5px] p-[10px] h-[3rem]`}>
                    <a
                      href={experiment.experimentlink}
                      className="flex justify-around">
                      <AiFillFilePdf className="h-[30px]" />
                      <h1>Link to the experiment Pdf </h1>
                    </a>
                  </div>
                );
              })}
              <input
                className="border-none outline-none	flex flex-col "
                onChange={handleProfileUpload}
                type="file"
                name=""
                id=""
              />
   <div>
          <Button
            onClick={experimentDataUpload}
            type="primary"
            className="mt-2 mb-2">
            {experimentDataUrl === "" ? `Upload` : `Uploaded`}
          </Button>
          {experimentDataUrl && (
            <Button onClick={experimentUpload} className="mx-2">
              Submit Experiment
            </Button>
          )}
        </div>
              <Progress percent={experimentDataUploadProgress} max="100" />
            </div>
          </div>{" "}
        </div>
     
      </div>
    </div>
  );
}

export default ShowExpeiment;
