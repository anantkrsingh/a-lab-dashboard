import { useContext } from "react";
import { ExperimentsCard } from "../../components/card/ExperimentsCard/ExperimentsCard";

import { ExperimentsContext } from "../../context/experimentContext";

export const BasicEE = () => {
  const { dropdown, labs } = useContext(ExperimentsContext);
  const basicElectricalEngineering = labs.filter(
    (e) => e.subject === "basicElectricalEngineering"
  );

  return (
    <div className="flex flex-wrap sm:w-[80vw] mb-[10vh] sm:mb-0">
      {basicElectricalEngineering.map((page) => {
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
