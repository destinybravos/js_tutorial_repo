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
const btnConvert = document.getElementById('btnConvert');

btnConvert.addEventListener('click', function(){
    convert();
});


function convert() {
    let dol;
    let nar;
    var task = document.getElementById('convertTask').value;
    if(task === 'n2d'){
        // Naira to Dollar Conversion
        nar = document.getElementById('nInput').value;
        if(nar == ''){
            alert('The Naira Value is empty! Please enter naira value.');
        }else{
            dol = convert2dollar(nar);
            document.getElementById('dInput').value = dol;
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
