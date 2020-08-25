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
// greet();
// greet_person("LisaIxora");
// console.log(greetAgain() + 'LisaIxora');
// console.log(greetPersonAgain('LisaIxora'));

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
var aFi = document.getElementById('fInputA');
var aSi = document.getElementById('sInputA');
var aFS = document.getElementById('fselect');
var aSS = document.getElementById('sselect');

document.getElementById('fInputA').addEventListener('keyup', function () {
    let aFSvalue = aFS.value;
    let aSSvalue = aSS.value;
    let theAmount = this.value;

    if(aFSvalue === aSSvalue){
        aSi.value = theAmount;
    }else if(aFSvalue === 'nValue' && aSSvalue === 'dValue'){
        aSi.value = convert2dollar(theAmount);
    }
});
