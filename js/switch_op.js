// Switching the Light Bulb
// var light = document.getElementById('light');
var light = document.querySelector('#light'); //Alternative to the line above

function changeLightState(state){
    // Check the state and switch the light
    switch (state) {
        case 'on':
                light.setAttribute('src', 'imgs/light_on.png');
            break;
        
        case 'off':
                light.setAttribute('src', 'imgs/light_off.png');
            break;
    
        default:
                alert('Unexpected Error: State not understood');
            break;
    }
}

document.getElementById('btn_on').addEventListener('click', function(){
    changeLightState('on');
});
document.getElementById('btn_off').addEventListener('click', function(){
    changeLightState('off');
});

// Advanced Switching Option
function changeContent(contentId) {
    let screen = document.getElementById('screen');
    let content = document.getElementById(contentId);
    screen.innerHTML = content.innerHTML;
}
// Default Content is content 1
changeContent('content1');

// Select all list-items on the the menu
let btnList = document.querySelectorAll('#menu ul li');

/*  
 *  We now have an array of all the list-items (li)
 *  Add event listener to each of the list-items.
 */
btnList.forEach(function (li, index) { 
    li.addEventListener('click', function () {
        //Add 1 to every list index in order to get the correct element id
        changeContent('content' + (index + 1));
        // Call to update the active of this item
        updateActiveList(this);
    })
})


function updateActiveList(list_item) {
    // First remove active class from all list by looping through each one
    btnList.forEach(function(li){ //I dont need index (Optional)
        // Remove the class 'active from each of the list-item
        li.classList.remove('active')
    });
    // Add the class 'active' to the current(clicked) list-item
    list_item.classList.add('active');
}
