import { React, useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { findNetCurrThruRM, findCurrThruR } from "./logic";
import { Button } from "antd";
import DataTable from "./Table";


export default function SuperPosition() {
  const history = useNavigate();
  const [z1, setZ1] = useState(0);
  const [z2, setZ2] = useState(0);
  const [z3, setZ3] = useState(0);
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [final, setFinal] = useState(0);

  const [data, setData] = useState([]);
  const i1 = parseFloat(findCurrThruR(v1, z1, z3, z2).toFixed(4));
  const i2 = parseFloat(findCurrThruR(v2, z2, z3, z1).toFixed(4));
  const i3 = findNetCurrThruRM(v1, v2, z1, z3, z2).toFixed(3);
  const [showSendData, setShowSendData] = useState(false);
  useEffect(() => {
    if (data.length > 4) {
      setShowSendData(true);
    }
  }, [data]);
  function calculate() {
    setFinal(i1 + i2);
    setData([...data, { v1, v2, z1, z2, z3, i1, i2, i3, final }]);
  }
  
  return (
    <>
      <div className="">
        
        <form name="f1" className="" >
          <div className="flex bg-white border rounded-xl justify-around p-5">
            <div className="w-[500px] h-auto relative">
              <img
                src={
                  "https://res.cloudinary.com/a-lab/image/upload/v1629620658/alab-dashboard-experiments/bee/superposition_rowfdj.png"
                }
                className="w-full"
                alt="pic"
              />
              <input
                value={z1}
                type="number"
                onChange={(event) => {
                  setZ1(parseFloat(event.target.value));
                }}
                name="r1"
                className="z1 inp"
              />
              <input
                value={z2}
                type="number"
                onChange={(event) => {
                  setZ2(parseFloat(event.target.value));
                }}
                name="r2"
                className="z2 inp"
              />
              <input
                value={z3}
                onChange={(event) => {
                  setZ3(parseFloat(event.target.value));
                }}
                type="number"
                name="r3"
                className="z3 inp"
              />
              <input
                value={v2}
                onChange={(event) => {
                  setV2(parseFloat(event.target.value));
                }}
                type="number"
                name="v2"
                className="v2 inp"
              />
              <input
                value={v1}
                onChange={(event) => {
                  setV1(parseFloat(event.target.value));
                }}
                type="number"
                name="v1"
                className="v1 inp"
              />
            </div>
            <div className="border-l px-5">
              <h3 className="h3">Control Panel</h3>
              <div id="tab-content1" className="animated fadeIn">
                <p className="p">Input the values of Voltage sources &amp; Resistances</p>
                <p className="p">Then click on Run.</p>
               <br/>
                <>
                  {!showSendData && (
                    <Button size="large" onClick={calculate} type="primary">
                      Run
                    </Button>
                    
                  )}
                </>
              </div>
            </div>
          </div>
          <DataTable data={data}  setData={setData} />
        </form>
        <br />
        {showSendData && (
          <button
            className="mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              window.print();
              history.push("/message");
            }}
          >
            Generate PDF.
          </button>
        )}
      </div>
    </>
  );
}
