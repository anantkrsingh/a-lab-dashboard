import React from "react";
import DropDown from "../components/dropdown/DropDown";
import { SubjectPage } from "../pages/SubjectPage";

export default function Experiment() {
  return (
    <div className="mb-[10vh] sm:mb-0">
      {/* class */}
      <DropDown />
      <SubjectPage />
    </div>
  );
}
