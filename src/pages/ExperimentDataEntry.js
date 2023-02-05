import { Button, Input } from "antd";
import { useState } from "react";
import db from "../firebase";
// const { TextArea } = Input;

export default function ExperimentDataEntry() {
  const [aim, setAim] = useState("");
  const [apparatus, setApparatus] = useState("");
  const [theory, setTheory] = useState("");
  const [nameOfExperiment, setNameOfExperiment] = useState("");

  const submitData = () => {
    db.collection("experiment-data")
      .add({
        nameOfExperiment,
        aim,
        apparatus,
        theory,
      })
      .then(() => {
        alert("Experiment data added succesfully.");
      });
  };

  return (
    <div className="w-[80vw] p-[10px] h-screen bg-white">
      <div className=" m-auto">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl">Name of experiment</h2>
          <Input
            placeholder="Basic usage"
            value={nameOfExperiment}
            onChange={(e) => setNameOfExperiment(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <h2 className="text-xl">Aim</h2>
          <Input
            placeholder="Basic usage"
            value={aim}
            onChange={(e) => setAim(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <h2 className="text-xl">Apparatus required</h2>
          <Input
            placeholder="Basic usage"
            value={apparatus}
            onChange={(e) => setApparatus(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <h2 className="text-xl">Theory</h2>
          <textarea
            rows={4}
            value={theory}
            onChange={(e) => setTheory(e.target.value)}
          />
        </div>
        <Button type="primary" size={10} onClick={submitData}>
          Upload
        </Button>
      </div>
    </div>
  );
}
