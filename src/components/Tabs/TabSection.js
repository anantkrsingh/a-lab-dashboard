import { useParams } from "react-router-dom";

import { useContext } from "react";

import { Tabs } from "antd";
import { ExperimentsContext } from "../../context/experimentContext";


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const TabSection = () => {
  const { labs } = useContext(ExperimentsContext);
  const { nameOfExperiment } = useParams();

  const experimentData = labs.filter(
    (experiments) => experiments.nameOfExperiment === nameOfExperiment
  );

  const experiment = experimentData[0];

  console.log(experiment);

  if (experiment) {
    return (
      <div className="p-[10px]">
        <Tabs onChange={callback} type="card">
          <TabPane tab="Aim" key="1">
            {experiment.aim}
          </TabPane>
          <TabPane tab="Theory" key="2">
            {experiment.theory}
          </TabPane>
          <TabPane tab="Procedure" key="3">
            {experiment.procedure}
          </TabPane>
          <TabPane tab="Simulation" key="4">
            {experiment.component}
          </TabPane>
        </Tabs>
      </div>
    );
  } else {
    return null;
  }
};
