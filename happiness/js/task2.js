let isOpen = false;

function toggle() {
    let paswordFeild = document.getElementById('pass');
    if (isOpen === true) {
        paswordFeild.setAttribute('type','password');
        //Change state to false
        isOpen = false;
    } else {
        paswordFeild.setAttribute('type','text');
        //Change state to false
        isOpen = true;
    }

    console.log(isOpen);
}
function togglec() {
    let paswordFeild = document.getElementById('cpass');
    if (isOpen === true) {
        paswordFeild.setAttribute('type','password');
        //Change state to false
        isOpen = false;
    } else {
        paswordFeild.setAttribute('type','text');
        //Change state to false
        isOpen = true;
    }
   }

document.getElementById('tog').addEventListener('click', function () {
    toggle();
});

document.getElementById('togg').addEventListener('click', function () {
    togglec();
});


// Validating Inputs
// function validateInput(element) {
//     let value = element.value;
// }

document.getElementById('fname').addEventListener('blur', function () {
    let value = this.value;
    let fspan = document.getElementById('fspan');
    if(value.length < 2){
        this.style.boxShadow = '0 0 2px red';
        fspan.style.display = "block";
    }else{
        this.style.boxShadow = '0 0 2px green';
        fspan.style.display = "none";
    }
});

document.getElementById('email').addEventListener('blur', function () {
    let value = this.value;
    let espan = document.getElementById('espan');
    if(value.length < 2){
        this.style.boxShadow = '0 0 2px red';
        espan.style.display = "block";
    }else{
        this.style.boxShadow = '0 0 2px green';
        espan.style.display = "none";
    }
});

document.getElementById('uname').addEventListener('blur', function () {
    let value = this.value;
    let uspan = document.getElementById('uspan');
    if(value.length < 1){
        this.style.boxShadow = '0 0 2px red';
        uspan.style.display = "block";
    }else{
        this.style.boxShadow = '0 0 2px green';
        uspan.style.display = "none";
    }
    checkUname(this.value);
});

document.getElementById('pass').addEventListener('blur', function () {
    let value = this.value;
    let pspan = document.getElementById('pspan');
    if(value.length < 6){
        this.style.boxShadow = '0 0 2px red';
        pspan.style.display = "block";
    }else{
        this.style.boxShadow = '0 0 2px green';
        pspan.style.display = "none";
    }
});

document.getElementById('cpass').addEventListener('keyup', function () {
    let value = this.value;
    let cspan = document.getElementById('cspan');
    if(value.length < 6){
        this.style.boxShadow = '0 0 2px red';
        cspan.style.display = "block";
    }else{
        this.style.boxShadow = '0 0 2px green';
        cspan.style.display = "none";
    }
});

document.getElementById('reg').addEventListener('click', function () {
    let register = document.getElementsByClassName('txtbox');
for (let i = 0; i < register.length; i++) {
    let elem = register[i];
    elem.addEventListener('keyup', function(){
        console.log(this.value);
    });
    console.log(elem);
}

});

// Validating Name
// Assuming we have an array of user as below
let users = [
    'skirt', 
    'lisaixora', 
    'endless', 
    'pretty', 
    'splash', 
    'coolemyx', 
    'chibros'
];


function checkUname(username) {
    let exists = false; //set exist variable to false
    // loop through the users array and check user with the entered username
    users.forEach(function (name) {
        if(username === name){
            exists = true
        }
    });

    // If exist is true after looping, then flag an error
    // Meaning the user exists
    if(exists === true){
        uspan.innerText = "Username Unavaliable";
        uspan.style.display = "block";
    }else{
        uspan.style.display = "none";
        uspan.innerText = "";
    }
    
}

document.getElementById('uname').addEventListener('keyup', function () {
    // checkUname(this.value)
});



