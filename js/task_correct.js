// Question 4
function checkFulname() {
    let nameInput = document.getElementById('name').value;
    // Take note of indexOf() and lastIndexOf() functions
    let charPos = nameInput.indexOf(' '); //charPos(Character Position)

    if (charPos < 2) {
        alert('Your Fulname must be entered');
    } 
}

document.getElementById('btnreg').addEventListener('click', function () {
    checkFulname();
});

// Question 1
function validateEmail() {
    let emailInput = document.getElementById('mail').value;
    // Take note of indexOf() and lastIndexOf() functions
    let atPos = emailInput.indexOf('@'); //atPos(@ Character Position)
    let dotPos = emailInput.lastIndexOf('.');
    let lent = emailInput.length;
    if((atPos > 1) && (dotPos > atPos + 1 ) && (lent > dotPos + 1)){
        console.log('Email is valid')
    }else{
        alert('Invalid Email');
    }
    console.log('lent = ' + lent,  'last dot pos = ' + dotPos); 
}

document.getElementById('btnval').addEventListener('click', function () {
    validateEmail();
});


// Unknown Question
// About getting element by class
let myinputs = document.getElementsByClassName('txtbox');
// myinputs.forEach(elem => {
//     elem.addEventListener('keyup', function(){
//         console.log(this);
//     });
// });
for (let i = 0; i < myinputs.length; i++) {
    let elem = myinputs[i];
    elem.addEventListener('keyup', function(){
        console.log(this);
    });
    console.log(elem);
}
