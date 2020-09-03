// The basic Part
// let person = {
//     name: { firstname: 'Destiny', lastname: 'Elijah'},
//     age: 20,
//     email: 'destinye@SpeechGrammarList.com',
//     phone: ['08023436533', '070453523223', '34454545'],
//     married: true,
//     acc_ball: 20.50
// }
// console.log(person.name.firstname + ' ' + person.name.lastname);
// console.log(person.phone[1]);

// Part Two
// let persons = [
//     { name: 'Destiny Elijah', phone : '081', email: 'destiny@email.com' },
//     { name: 'Destiny Pretty', phone : '071', email: 'dpretty@email.com' },
//     { name: 'James Elijah', phone : '080', email: 'james@email.com' },
//     { name: 'Micheal Uzor', phone : '090', email: 'mike@email.com' }
// ];
// console.log(persons[1].phone);

// ACTUAL ABSTRACT 2 CODING STARTS HERE //
function openModal(modalId) {
    let modal = document.getElementById(modalId);  //Our modal is the hover div
    modal.style.display = 'block';
}
function closeModal(modalId) {
    let modal = document.getElementById(modalId);  //Our modal is the hover div
    modal.style.display = 'none';
}

let users = [];

document.forms['frmAddUser'].addEventListener('submit', function (ev) {
    ev.preventDefault();
    // Get the form elements by their names
    let fname = document.forms['frmAddUser']['fname'].value;
    let lname = document.forms['frmAddUser']['lname'].value;
    let phone = document.forms['frmAddUser']['phone'].value;
    let email = document.forms['frmAddUser']['email'].value;

    let person = {
        firstname : fname,
        lastname : lname,
        phone : phone,
        email : email
    }

    // Push person into users
    users.push(person);

    // Clear the form
    clearForm();

    // Close the Modal
    closeModal('hover');

    // Fecth the users list into the main interface
    populateList();

    console.log(users);

});

function clearForm() {
    document.forms['frmAddUser']['fname'].value = "";
    document.forms['frmAddUser']['lname'].value = "";
    document.forms['frmAddUser']['phone'].value = "";
    document.forms['frmAddUser']['email'].value = "";
}

// Populate the users list on the main interface
function populateList() {
    let name_list = document.getElementById('name_list')
    let list = '';
    users.forEach(function (person, index) {
        console.log(person, index);
        // list = list + '<li>Dummy</li>';
        list += `<li id="${index}"> ${person.firstname} </li>`;  //This is equivalent to the line above
    });
    name_list.innerHTML = list;
    addListner();
}

// Last Part, Add Click Event Listener to all list items
function addListner() {
    let allList = document.querySelectorAll('#name_list li'); //This give an array of all the list items

    // loop through the array of list and add event listner to each
    allList.forEach(function (listItem) {
        listItem.addEventListener('click', function () {
                let index = this.getAttribute('id');
                populateUserDetails(index);
            });
    })
}

// Populating the user details
function populateUserDetails(index) {
    let selectedPerson = users[index];
    document.getElementById('firstname').innerText = selectedPerson.firstname;
    document.getElementById('lastname').innerText = selectedPerson.lastname;
    document.getElementById('span_email').innerText = selectedPerson.email;
    document.getElementById('span_phone').innerText = selectedPerson.phone;
    // console.log(selectedPerson);
}