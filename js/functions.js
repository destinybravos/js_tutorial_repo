// Declaring a sub-routine without parameters
function greet() {
    console.log("Hello! Good Evening");
}
// Declaring a sub-routine with parameters
function greet_person(person) {
    console.log("Hello! Good Evening " + person);
}
// Declaring a function without parameters
function greetAgain(){
    var greeting = "Hello and how are you ";
    return greeting;
}
// Declaring a function with parameters
function greetPersonAgain(person){
    var greeting = "Hello and how are you " + person;
    return greeting;
}
// calling functions
greet();
greet_person("LisaIxora");
console.log(greetAgain() + 'LisaIxora');
console.log(greetPersonAgain('LisaIxora'));

// ||||||||||| CURENCY CONVERTER

document.getElementById('convertTask').addEventListener('change', function () {
    // let task = document.getElementById('convertTask').value;
    let task = this.value;  //in place of the statement above
    if (task === 'n2d') {
        // Get the inner elements of the first and second div
        let lbl1 = document.getElementById('first').children[0];
        let lbl2 = document.getElementById('second').children[0];
        let inp1 = document.getElementById('first').children[1];
        let inp2 = document.getElementById('second').children[1];
        // Re-format the interface with new information
        lbl1.innerText = 'Naira Value';
        lbl2.innerText = 'Dollar Value';
        inp1.setAttribute('id', 'nInput');
        inp2.setAttribute('id', 'dInput');
    }else if(task === 'd2n'){
        // Get the inner elements of the first and second div
        let lbl1 = document.getElementById('first').children[0];
        let lbl2 = document.getElementById('second').children[0];
        let inp1 = document.getElementById('first').children[1];
        let inp2 = document.getElementById('second').children[1];
        // Re-format the interface with new information
        lbl1.innerText = 'Dollar Value';
        lbl2.innerText = 'Naira Value';
        inp1.setAttribute('id', 'dInput');
        inp2.setAttribute('id', 'nInput');
    }else if(task === 'e2n'){
        // Get the inner elements of the first and second div
        let lbl1 = document.getElementById('first').children[0];
        let lbl2 = document.getElementById('second').children[0];
        let inp1 = document.getElementById('first').children[1];
        let inp2 = document.getElementById('second').children[1];
        // Re-format the interface with new information
        lbl1.innerText = 'Euro Value';
        lbl2.innerText = 'Naira Value';
        inp1.setAttribute('id', 'eInput');
        inp2.setAttribute('id', 'nInput');
    }else if(task === 'n2e'){
        // Get the inner elements of the first and second div
        let lbl1 = document.getElementById('first').children[0];
        let lbl2 = document.getElementById('second').children[0];
        let inp1 = document.getElementById('first').children[1];
        let inp2 = document.getElementById('second').children[1];
        // Re-format the interface with new information
        lbl1.innerText = 'Naira Value';
        lbl2.innerText = 'Euro Value';
        inp1.setAttribute('id', 'nInput');
        inp2.setAttribute('id', 'eInput');
    }
});

const btnConvert = document.getElementById('btnConvert');

btnConvert.addEventListener('click', function(){
    convert();
});


function convert() {
    let dol;
    let nar;
    let task = document.getElementById('convertTask').value;
    if(task === 'n2d'){
        // Naira to Dollar Conversion
        nar = document.getElementById('nInput').value;
        if(nar == ''){
            alert('The Naira Value is empty! Please enter naira value.');
        }else{
            dol = convert2dollar(nar);
            document.getElementById('dInput').value = dol;//print the dollar to the dollar input.
        }
    }else if(task === 'd2n'){
        // Dollar to Naira Conversion
        dol = document.getElementById('dInput').value; //get the value of dollar
        if(dol == ''){  //checking if dollar is empty
            alert('The Dollar Value is empty! Please enter dollar value.');
        }else{ //if not empty
            nar = convert2Naira(dol); // call the convert to naira function and pass the value of dollar to it.
            document.getElementById('nInput').value = nar;  //print the naira to the naira input.
        }
    }
}

// Functions for coversions
function convert2dollar(naira) {
    let dollar;
    dollar = naira / 380;
    return dollar;
}
function convert2Naira(dollar) {
    let naira;
    naira = dollar * 380;
    return naira;
}
function convertNaira2Euro(naira) {
    let euro;
    euro = naira / 446;
    return euro;
}
function convertEuro2Naira(euro) {
    let naira;
    naira = euro * 446;
    return naira;
}
function convertDollar2Euro(dollar) {
    let euro;
    euro = dollar / 0.85;
    return euro;
}
function convertEuro2Dollar(euro) {
    let dollar;
    dollar = euro * 0.85;
    return dollar;
}


// ||||||||||||| ADVANCED CALCULATOR
document.getElementById('btnSimple').addEventListener('click', function(){
    document.getElementById('advConverter').style.display = 'none';
    document.getElementById('simpleConverter').style.display = 'block';
});
document.getElementById('btnAdvanced').addEventListener('click', function(){
    document.getElementById('advConverter').style.display = 'block';
    document.getElementById('simpleConverter').style.display = 'none';
});

// Decllaring Variables that will hold all input values
 var firstI = document.getElementById('aFi');
 var secondI = document.getElementById('aSi');
 var firstSelect = document.getElementById('aCurrency_pair1');
 var secondSelect = document.getElementById('aCurrency_pair2');
 document.getElementById('')


<<<<<<< HEAD

 
=======
document.getElementById('sInputA').addEventListener('keyup', function () {
    let Fvalue = aFS.value;
    let Svalue = aSS.value;
    let Amount = this.value;
    aFi.value = A_Convert(Amount, Svalue, Fvalue);
});

document.getElementById('sselect').addEventListener('change', () => {
    let Fvalue = aFS.value;
    let Svalue = aSS.value;
    let Amount = aSi.value;
    aFi.value = A_Convert(Amount, Svalue, Fvalue);
});


// Advanced Converting function
function A_Convert(theAmount, value1, value2) {
    let covertedAmount;

    if(value1 === value2){
        covertedAmount = theAmount;
    }else if(value1 === 'nValue' && value2 === 'dValue'){
        covertedAmount = convert2dollar(theAmount);
    }else if(value1 === 'dValue' && value2 === 'nValue'){
        covertedAmount = convert2Naira(theAmount);
    }else if(value1 === 'nValue' && value2 === 'eValue'){
        covertedAmount = convertNaira2Euro(theAmount);
    }else if(value1 === 'eValue' && value2 === 'nValue'){
        covertedAmount = convertEuro2Naira(theAmount);
    }else if(value1 === 'dValue' && value2 === 'eValue'){
        covertedAmount = convertDollar2Euro(theAmount);
    }else if(value1 === 'eValue' && value2 === 'dValue'){
        covertedAmount = convertEuro2Dollar(theAmount);
    }

    return covertedAmount;
}

document.readyState( ()=> {
    alert('Alert Me')
})
>>>>>>> 76e1a0c9a32a63ffb8b3cba0a203413236ddf351
