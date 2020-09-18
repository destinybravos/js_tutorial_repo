let show = document.getElementById('pass');

function showpass (visibility){
 switch (visibility){
    case "visible":
        show.setAttribute('type','text');
        break;

    case "hidden":
        show.setAttribute('type','password');
    break;
 }
}

document.getElementById('btnshow').addEventListener('click', function(){
    showpass('visible');
});
document.getElementById('btnhide').addEventListener('click', function(){
    showpass('hidden');
});

function q1(){
    let mystring = document.getElementById('mail').value;
    console.log(mystring);
    let check = mystring.indexOf('@');
    console.log(check);

    if(check<1){
        alert ('email type not recognised');
    }
        
    
}

function register(){
let ifsix= document.getElementById('pass').value;   
let name = document.getElementById('name').value;
let empty = document.getElementsByClassName('txtbox').value;
checkspace=name.indexOf('-');

console.log(checkspace);
console.log(empty);}

// if(empty.length<1){
//     console.log(empty);
//     alert ('fields cannot be empty!!');
// }

//  if  (ifsix.length<= 6){
//     alert('password must be more than six characters!!');
// }
//     if(checkspace<1){
//     alert( 'make sure u include your surname!!');}
//     else {
//             alert("registration successful");}
           

// }