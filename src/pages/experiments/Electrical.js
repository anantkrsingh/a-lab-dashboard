import { useContext } from "react";
// import { Link } from "react-router-dom";
import { ExperimentsCard } from "../../components/card/ExperimentsCard/ExperimentsCard";
import { ExperimentsContext } from "../../context/experimentContext";

export const ElectricalLabs = () => {
  const { dropdown, labs } = useContext(ExperimentsContext);
  const electronicsExperiment = labs.filter(
    (e) => e.subject === "electronicsExperiment"
  );

  return (
    <div className="flex flex-wrap sm:w-[80vw] mb-[10vh] sm:mb-0">
      {electronicsExperiment.map((page) => {
        return (
          <div key={page.nameOfExperiment}>
            <ExperimentsCard
              title={page.nameOfExperiment}
              link={`sem-${dropdown}/tab/${page.nameOfExperiment}`}
            />
            {/* <h1></h1> */}
            {/* <Link to=>Link to the Experiments</Link> */}
          </div>
        );
      })}
    </div>
  );
};
