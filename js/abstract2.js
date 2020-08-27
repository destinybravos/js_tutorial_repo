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