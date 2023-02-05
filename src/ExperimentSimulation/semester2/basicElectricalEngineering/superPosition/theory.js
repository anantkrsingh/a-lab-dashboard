import React from 'react'


export default function Aims() {
    return (
        <div>
           <h1>To verify Superposition theorem.</h1> 
        </div>
    )
}


function Theory() {
    return (
        <div>
            <p>If   network   contains   two or   more   than   two   sources,   then principle   of   superposition   theorem   is   used   to   simplify   network . calculations. It may be stated as follows..<br/>
In  a  bilateral  network  if  two  or  more  than  two  energy  sources  are. present, then the current which flows at any point is the vector sum of  all   currents   which   would   flow   at   that   point   if   each   source   was considered  separately  and  all  other  sources  replaced  at  the  time  by impedance equal to their internal impedances.
</p>
        </div>
    )
}


function Procedures() {
    return (
        <div><p>
        <br/> 1.	Connect D. C. power supply across terminals L1 –L2    and apply voltage of say   V1 volts  and similarly across  terminals  L1 –L2 apply voltage of  say V2 Volts<br></br>
<br/>2.	Measure current flowing through all branches, say these currents are I1, I2, and I3. 
<br/>3.	Now connect only V1 volts across terminals L1 –L2 and short circuit terminals L1 –L2    that is V2=0 volts. <br/>

<br/>4.	Measure currents flowing through all branches for V1 volts and V2=0 volts using a ammeter, say these currents are I1‛, I2‛, I3‛. <br/>
<br/>5.   Similarly connect only V2   volts across terminals L1 –L2    and short
Circuit terminals L1 –L2    that is V1=0 volts.<br/>

<br/>6.	Measure current flowing through all branches for V1=0 volts and V2 volts using a ammeter, say these currents are I1”, I2”, I3”. <br/>
<br/>7.	For verifying superposition theorem I1= I1‛+ I1”, I2= I2‛+ I2‛, I3=I3‛+I3”. <br/>
<br/>8.	Calculate theoretical values of currents, these values should be approximately equal to measured values of currents. <br/>
</p>
        </div>
    )
}

export {Aims,Theory,Procedures};
