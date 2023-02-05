import React from 'react'

function Aim() {
    return (
        <div>
            <h1>To verify the truth table of Logic gates</h1>
        </div>
    )
}




function Theorylogic() {
    return (
        <div>
            <p>Logic gates are the basic building blocks of any digital system. Logic gates are electronic circuits having one or more than one input and only one output. The relationship between the input and the output is based on a certain logic</p>

<h3>1.	AND gate</h3>
<p>
The AND gate is an electronic circuit that gives a high output (1) only if all its inputs are high.<br/>
 A dot (.) is used to show the AND operation i.e. A.B or can be written as AB.<br/>
Y= A.B
</p>

 


<h3>2.	OR gate</h3>
<p>
The OR gate is an electronic circuit that gives a high output (1) if one or more of its inputs are high.<br/> A plus (+) is used to show the OR operation.
<br/>
Y= A+B
</p>

<h3>3.	NOT gate</h3>

<p>The NOT gate is an electronic circuit that produces an inverted version of the input at its output. <br/>It is also known as an inverter. If the input variable is A, the inverted output is known as NOT A.
<br/> This is also shown as A' or A with a bar over the top, as shown at the outputs.
<br/>
Y= A'

    </p>
 


<h3>4.	NAND gate</h3>
<p>This is a NOT-AND gate which is equal to an AND gate followed by a NOT gate.<br/>The outputs of all NAND gates are high if any of the inputs are low. The symbol is an AND gate with a small circle on the output. The small circle represents inversion.
                                <br/> Y= AB</p>


 

<h3>5.	NOR gate</h3>
<p>
This is a NOT-OR gate which is equal to an OR gate followed by a NOT gate.<br/> The outputs of all NOR gates are low if any of the inputs are high. The symbol is an OR gate with a small circle on the output. The small circle represents inversion.
<br/>
Y= A+B
</p>

 

<h3>6.	Ex-OR gate</h3>
<p>
The 'Exclusive-OR' gate is a circuit which will give a high output if either, but not both of its two inputs are high. <br/>An encircled plus sign (⊕) is used to show the Ex-OR operation.

<br/>Y= A⊕B

</p>


 


<h3>7.	Ex-NOR gate</h3>
<p>
The 'Exclusive-NOR' gate circuit does the opposite to the EX-OR gate.<br/> It will give a low output if either, but not both of its two inputs are high. The symbol is an EX-OR gate with a small circle on the output. The small circle represents inversion.
<br/>
Y= A⊕B
</p>

        </div>
    )
}



function Procedure() {
    return (
        <div>
            <br/>
           <p>1. Apply varous input combinations and observe output for each one.<br/>
           <br/>2. Verify the truth table for each input/ output combination. <br/>
<br/>3. Repeat the process for all other logic gates.<br/>

               </p> 
<br></br>

           
        </div>
    )
}


export {Aim,Theorylogic,Procedure};
