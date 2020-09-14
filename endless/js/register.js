
///validatind if the field is empty
///....fulname.....validation
document.getElementById('fulname').addEventListener('blur', function () {
    let fvalue = this.value;
    let namel = fvalue.length;
    let space = fvalue.indexOf(' ');
    if(space < 2 || namel < space +2){
     
        document.getElementById('fname_hide').style.display='block';
        
        
    }else{
        document.getElementById('fname_hide').style.display='none';
    }
});

document.getElementById('fulname').addEventListener('mousemove', function () {
    let value = this.value;
    if(value.length < 1){
        document.getElementById('fname_hide').style.display='none';
        
    }
});

///....email.....validation
document.getElementById('email').addEventListener('blur', function () {
    validateEmail();
    let value = this.value;
    if(value.length < 1){
        document.getElementById('email_hide').style.display='block';
        
    }else{
        document.getElementById('email_hide').style.display='none';
    }
});

document.getElementById('email').addEventListener('mousemove', function () {
    let value = this.value;
    if(value.length < 1){
        document.getElementById('email_hide').style.display='none';
        
    }
    document.getElementById('email_incorrect').style.display='none';
});

function validateEmail() {
    let emailInput = document.getElementById('email').value;
    // Take note of indexOf() and lastIndexOf() functions
    let atPos = emailInput.indexOf('@'); //atPos(@ Character Position)
    let dotPos = emailInput.lastIndexOf('.');
    let lent = emailInput.length;
    if((atPos > 1) && (dotPos > atPos + 1 ) && (lent > dotPos + 1)){
      
    }else{
        document.getElementById('email_incorrect').style.display='block';
    }
 
}

///....username.....validation
document.getElementById('username').addEventListener('blur', function () {
    let value = this.value;
    if(value.length < 1){
        document.getElementById('uname_hide').style.display='block';
        
    }else{
        document.getElementById('uname_hide').style.display='none';
    }
});

document.getElementById('username').addEventListener('mousemove', function () {
    let value = this.value;
    if(value.length < 1){
        document.getElementById('uname_hide').style.display='none';
        
    }
});

///....password.....validation
document.getElementById('pass').addEventListener('blur', function () {
    let value = this.value;
    if(value.length < 1){
        document.getElementById('pass_hide').style.display='block';
        
    }else{
        document.getElementById('pass_hide').style.display='none';
    }
});

document.getElementById('pass').addEventListener('mousemove', function () {
    let value = this.value;
    if(value.length < 1){
        document.getElementById('pass_hide').style.display='none';
        
    }
});

document.getElementById('pass').addEventListener('keyup', function () {
    let value = this.value;
    if(value.length < 6){
        document.getElementById('passhide').style.display='block';
        
    }else{
        document.getElementById('passhide').style.display='none';
    }
});

////checking if the password matches
function comfirm_password (){
    pass1 = document.getElementById('pass').value;
    pass2 = document.getElementById('c_pass').value;
    if (pass1 === pass2) {
        document.getElementById('cpass_hide').style.display='none';
        
    }else{
        document.getElementById('cpass_hide').style.display='block';
    }
    
}

document.getElementById('eye-slash').addEventListener('click',function () {
    document.getElementById('pass').setAttribute('type','text')
    this.style.display="none";
    document.getElementById('eye').style.display="block";
})
    document.getElementById('eye').addEventListener('click',function () {
        document.getElementById('pass').setAttribute('type','password')
    this.style.display="none";
    document.getElementById('eye-slash').style.display="block";
    })

    document.getElementById('eyeslash').addEventListener('click',function () {
        document.getElementById('c_pass').setAttribute('type','text')
        this.style.display="none";
        document.getElementById('eye1').style.display="block";
    })
        document.getElementById('eye1').addEventListener('click',function () {
            document.getElementById('c_pass').setAttribute('type','password')
        this.style.display="none";
        document.getElementById('eyeslash').style.display="block";
        })

document.getElementById('button').addEventListener('click', function () {
    comfirm_password ();
    
})