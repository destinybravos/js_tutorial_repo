// document.write('Hello World');
// alert('Hello');
// console.log('God Hand');

var element;
// By Using Element ID
element = document.getElementById('myelement');

// By Using Query Selector (Target like CSS)
// element = document.querySelector('#myelement');

// By Using jQuery (Target like CSS)
// $element = $('#myelement');

element.style.backgroundColor = 'tomato';
console.log(element);

document.getElementById('action1').addEventListener('click', function(){
    element.style.marginLeft = 'auto';
    element.style.marginRight = '0';
});
// $('#action1').click(function(){
//     $element.css({
//         'margin-left': 'auto',
//         'margin-right': '0' 
//     })
// });

document.getElementById('action2').addEventListener('click', function(){
    element.style.marginLeft = 'auto';
    element.style.marginRight = 'auto';
});

// $('#action2').click(function(){
//     $element.css({
//         'margin-left': 'auto',
//         'margin-right': 'auto' 
//     })
// });

document.getElementById('action3').addEventListener('click', function(){
    element.style.marginLeft = '';
    element.style.marginRight = 'auto';
});

// $('#action3').click(function(){
//     $element.css({
//         'margin-left': '',
//         'margin-right': 'auto' 
//     })
// });




