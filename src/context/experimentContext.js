/* eslint-disable no-unused-vars */
import { useState, createContext, useEffect } from "react";

import {
  Decoder,
  DeMultiplexers,
  Encoder,
  FullAdder,
  FullSubtractor,
  HalfAdder,
  HalfSubtractor,
  Multiplexers,
  Amplitude,
  BjtCbInput,
  BjtCbOutput,
  BjtCeInput,
  BjtCeOutput,
  ForwardBias,
  LogicGates,
  ReverseBias,
  Zener,
  SuperPosition,
} from "../ExperimentSimulation";
import {
  Aim,
  Theorylogic,
  Procedure,
} from "../ExperimentSimulation/semester3/electronics/logicGate/theorylogic";
import {
  Aims,
  Procedures,
  Theory,
} from "../ExperimentSimulation/semester2/basicElectricalEngineering/superPosition/theory";
import {
  AimEncoder,
  ProcedureEncoder,
  TheoryEncoder,
} from "../ExperimentSimulation/semester3/computer_architecture/encoder/theory";

export const ExperimentsContext = createContext({});

export default function ExperimentsContextProvider(props) {
  const [dropdown, setDropdown] = useState("one");

  //allExperimentDataLiesHere

  const [labs, seLabs] = useState([
    {
      nameOfExperiment: "Half Adder",
      component: <HalfAdder />,
      subject: "digitalElectronics",
    },
    {
      nameOfExperiment: "Full Adder",
      component: <FullAdder />,
      subject: "digitalElectronics",
    },
    // {
    //   nameOfExperiment: "Four Bit Adder",
    //   component: <FourBitAdder />,
    //   subject: "digitalElectronics",
    // },
    {
      nameOfExperiment: "Half Subtractor",
      component: <HalfSubtractor />,
      subject: "digitalElectronics",
    },
    {
      nameOfExperiment: "Full Subtractor",
      component: <FullSubtractor />,
      subject: "digitalElectronics",
    },
    // {
    //   nameOfExperiment: "Four Bit Adder",
    //   component: <FourBitSubtractor />,
    //   subject: "digitalElectronics",
    // },
    {
      nameOfExperiment: "Encoder",
      aim: <AimEncoder />,
      theory: <TheoryEncoder />,
      procedure: <ProcedureEncoder />,
      component: <Encoder />,
      subject: "digitalElectronics",
    },
    {
      nameOfExperiment: "Decoder",
      component: <Decoder />,
      subject: "digitalElectronics",
    },
    {
      nameOfExperiment: "Multiplexer",
      component: <Multiplexers />,
      subject: "digitalElectronics",
    },
    {
      nameOfExperiment: "De-Multiplexer",
      component: <DeMultiplexers />,
      subject: "digitalElectronics",
    },

    {
      nameOfExperiment: "Zener",
      component: <Zener />,
      subject: "electronicsExperiment",
    },
    {
      nameOfExperiment: "Logic gate",
      component: <LogicGates />,
      aim: <Aim />,
      theory: <Theorylogic />,
      procedure: <Procedure />,
      subject: "electronicsExperiment",
    },
    {
      nameOfExperiment: "Amplitude, frequency and wavelength of sine waves",
      component: <Amplitude />,
      subject: "electronicsExperiment",
    },
    {
      nameOfExperiment: "Forward-Bias",
      component: <ForwardBias />,
      subject: "electronicsExperiment",
    },
    {
      nameOfExperiment: "Reverse-Bias",
      component: <ReverseBias />,
      subject: "electronicsExperiment",
    },
    {
      nameOfExperiment: "BJT-CB-Input",
      component: <BjtCbInput />,
      subject: "electronicsExperiment",
    },
    {
      nameOfExperiment: "BJT-CB-Output",
      component: <BjtCbOutput />,
      subject: "electronicsExperiment",
    },
    {
      nameOfExperiment: "BJT-CE-Input",
      component: <BjtCeInput />,
      subject: "electronicsExperiment",
    },
    {
      nameOfExperiment: "BJT-CE-Output",
      component: <BjtCeOutput />,
      subject: "electronicsExperiment",
    },
    {
      nameOfExperiment: "Super-Position Theorem",
      aim: <Aims />,
      theory: <Theory />,
      procedure: <Procedures />,
      component: <SuperPosition />,
      subject: "basicElectricalEngineering",
    },
  ]);

  function onChange(values) {
    setDropdown(values);
  }

  useEffect(() => {
    const data = localStorage.getItem("dropdown");
    if (data) {
      setDropdown(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dropdown", JSON.stringify(dropdown));
  });

  return (
    <ExperimentsContext.Provider
      value={{
        onChange,
        dropdown,
        setDropdown,
        labs,
      }}>
      {props.children}
    </ExperimentsContext.Provider>
  );
}
