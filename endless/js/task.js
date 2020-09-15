//email validation
  function val() {
   let mystring=document.getElementById('email').value;
    let validate = mystring.indexOf('@');
    if (validate <=1) {
       alert('your email is invalid');
       
    }
  }
  btnv =document.getElementById('validate').addEventListener('click',function () {
     val();
     
  })

  ///show and hide password
  var password_change = document.getElementById('password_change');
   function changepassword(state){
    switch (state) {
        case 'on':
          password_change.setAttribute('type', 'text');
            break;
        case 'off':
          password_change.setAttribute('type', 'password');
            break;
    }
 }
 
  
btnshow =document.getElementById('btnshow').addEventListener('click',function () {
   mystring = document.getElementById('password_change').value;

   if (mystring.length >=6){
      changepassword('on');
      
   }else{
      alert('Password must be 6 characters')
   }
  
})

btnhide =document.getElementById('btnhide').addEventListener('click',function () {
   mystring = document.getElementById('password_change').value;

   if (mystring.length >=6){
      changepassword('off');
      
   }else{
      alert('Password must be 6 characters');
   }
  
})


///checking for white space
function ful_name() {
   let data=document.getElementById('fname').value;
    let fulname = data.indexOf(' ');
    if (fulname < 2 ) {
      alert('Enter your firstname and lastname');
       console.log(fulname);
      
    }

  }
  document.getElementById('btnreg').addEventListener('click',function () {
   ful_name();
   
})

