import React from "react";


import { Tabs } from "antd";
import ExperimentUploadCard from "../components/card/experimentUpload/ExperimentUploadCard";
import CompletedExperiment from "../components/card/experimentUpload/CompletedExperiment";
const { TabPane } = Tabs;

export default function SendExperiment() {

  return (
    <div className="h-[100vh]">
      <div>
        <Tabs tab="card">
          <TabPane tab="Assigned" key="1">
          
            <ExperimentUploadCard />
          </TabPane>
          <TabPane tab="Completed" key="2">
            <CompletedExperiment />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
