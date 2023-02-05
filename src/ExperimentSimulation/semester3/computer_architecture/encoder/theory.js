import React from 'react'

 function AimEncoder() {
    return (
        <div>
            <h1>To study Encoders</h1>
        </div>
    )
}

function TheoryEncoder() {
    return (
        <div>
            <p>An encoder is a device, circuit, transducer, software program, algorithm or person that converts information from one format or code to another. <br/>The purpose of encoder is standardization, speed, secrecy, security, or saving space by shrinking size. Encoders are combinational logic circuits and they are exactly opposite of decoders. <br/>They accept one or more inputs and generate a multibit output code.<br/><br/>

Encoders perform exactly reverse operation than decoder. An encoder has M input and N output lines. Out of M input lines only one is activated at a time and produces equivalent code on output N lines.<br/> If a device output code has fewer bits than the input code has, the device is usually called an encoder.
</p>
        </div>
    )
}


export default function ProcedureEncoder() {
    return (
        <div>
           <p>
               <br/>1.Enter the required values in respective places.<br/>
               <br/>2.Note down the readings and observe the outputs</p> 
        </div>
    )
}


export {AimEncoder,TheoryEncoder,ProcedureEncoder}
