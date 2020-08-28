var person = '';
var people = [];
var btnAdd = document.getElementById('btnAddPerson');
var btnClear = document.getElementById('btnclearPerson');


btnAdd.addEventListener('click', function () {
    // person = document.getElementById('person').value; //First Method of getting the value
    person = document.forms['myform']['person'].value; //Second Method of getting the value

    if (person.length >= 6) {
        people.push(person); //Added the new to the people array
        displayName(people);  //Called the function to display the names in the UI
        clearInput();

    } else {
        alert("Person's name must be greater pr equal to 6 characters!");
    } 

})

btnClear.addEventListener('click', function(){
    people=document.getElementById('people').innerHTML='';

})

// This function will clear the input field called person
function clearInput(){
    document.getElementById('person').value = '';
}

// This function will display the list of people on the user interface
function displayName(people) {
    let list = '';
    people.forEach(function(person) {
        // list += '<li> ' + person + ' </li>'; //First Method of add variables to string (concertenate)
        list += `<li> ${person} </li>`; //First Method of add variables to string
    });

    console.log(list);
    document.getElementById('people').innerHTML = list;
}




