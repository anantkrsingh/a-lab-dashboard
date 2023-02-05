//here we have to add all the experiment componets, so that it can be mapped to the app.js for the routing

import { DigitalElectronicsLabs } from "./experiments/DigitalElectronicsLabs";
import { ElectricalLabs } from "./experiments/Electrical";
import { BasicEE } from "./experiments/BasicEE";




const ExperimentRoutes = [
  {
    component: <ElectricalLabs />,
    link: "/experiments/sem-three/electrical",
  },
  {
    component: <DigitalElectronicsLabs />,
    link: "/experiments/sem-three/digital-electronics",
  },
  {
    component: <BasicEE />,
    link: "/experiments/sem-two/basic-electrical-engineering",
  },
];

export default ExperimentRoutes;
