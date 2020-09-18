let isOpen = false;

function togglePassword() {
    let paswordFeild = document.getElementById('password');
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

document.getElementById('password_toggler').addEventListener('click', function () {
    togglePassword();
});

// Validating Inputs
// function validateInput(element) {
//     let value = element.value;
// }

document.getElementById('username').addEventListener('blur', function () {
    let value = this.value;
    if(value.length < 1){
        this.style.boxShadow = '0 0 2px red';
    }else{
        this.style.boxShadow = '0 0 2px #2164e0dc';
    }
});

document.getElementById('password').addEventListener('blur', function () {
    let value = this.value;
    if(value.length < 6){
        this.style.boxShadow = '0 0 2px red';
    }else{
        this.style.boxShadow = '0 0 2px #2164e0dc';
    }
});

document.getElementById('password').addEventListener('keyup', function () {
    let value = this.value;
    if(value.length < 6){
        this.style.boxShadow = '0 0 2px red';
    }else{
        this.style.boxShadow = '0 0 2px #2164e0dc';
    }
});




