import { useContext } from "react";
import { ExperimentsCard } from "../../components/card/ExperimentsCard/ExperimentsCard";

import { ExperimentsContext } from "../../context/experimentContext";
// import { DigitalElectronics } from "../semesters/sem3/index";

export const DigitalElectronicsLabs = () => {
  const { dropdown, labs } = useContext(ExperimentsContext);
  const digitalExperiments = labs.filter(
    (e) => e.subject === "digitalElectronics"
  );
  return (
    <div className="flex flex-wrap sm:w-[80vw] mb-[10vh] sm:mb-0">
      {digitalExperiments.map((page) => {
        return (
          <div key={page.nameOfExperiment}>
            <ExperimentsCard
              title={page.nameOfExperiment}
              link={`sem-${dropdown}/tab/${page.nameOfExperiment}`}
            />
          </div>
        );
      })}
    </div>
  );
};
