/* eslint-disable no-mixed-operators */
import React, { useState } from "react";
import './reverse.css'

const reverseBiaseImg = "https://res.cloudinary.com/a-lab/image/upload/v1628739385/old-experiments-images/reverse_wieodb.png"

var ammeterReading, voltmeterReading;
function ReverseBiasSimulation() {
  const [aReading, setAreading] = useState(0);
  const [vReading, setVreading] = useState(0);
  const [volt, setVolt] = useState(0.1);
  var r, rs, ir, ir1, vrd, vr, rd;
  var vt = 0.026,
    n = 1,
    isc = Math.pow(10, -12);
  var diodereversevalue = 30;
  function handleChange(events) {
    vr = events.target.value;

    r = 100;
    rs = r;
    rd = 0.3;
    ir = (parseFloat(vr) / (parseInt(rs) + parseFloat(rd))) * Math.pow(10, 2);
    ir1 = parseFloat(vr) / parseInt(rs);
    var ir1_is = Math.log(ir1 / isc);
    vrd = vr * n * vt * ir1_is;
    if (vr > 15.0) {
      alert("Please keep the value between range of 1.0 to 15.0");
      ammeterReading = 0;
      voltmeterReading = 0;
    } else if (vr < 5) {
      ammeterReading = 0;
      voltmeterReading = vrd.toPrecision(3);
    } else if (5 <= vr < parseFloat(diodereversevalue)) {
      ammeterReading = ir.toPrecision(3);
      voltmeterReading = vrd.toPrecision(3);
    } else {
      ammeterReading = ir.toPrecision(3);
      voltmeterReading = vrd.toPrecision(3);
    }
    setVolt(vr);
    setAreading(ammeterReading);
    setVreading(voltmeterReading);
  }
  return (
    <div>
  
      <img src={reverseBiaseImg} width={1080} height={700}alt="bg-animation" className="lab-bg ex-bg" />

      <div className="reverse">
        <div className="exp reverse-div">
          <input
            onChange={handleChange}
            value={volt}
            name="voltageSupplied"
            placeholder="Voltage"
            className="r-input"
            autoFocus
          />
          <div className="r-a-reading">{aReading}</div>
          <div className="r-v-reading">{vReading}</div>
        </div>
      </div>
    </div>
  );
}
export default ReverseBiasSimulation
