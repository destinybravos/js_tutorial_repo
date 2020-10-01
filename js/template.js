$('#nav_toggler').on('click', function(){
    $('#menu').toggleClass('openNav');
});

$(document).ready(function(){
    // Make An Ajax Get Request
    $.get('pages/home.html', function (response) {
        $('#pages').html(response);
    });
});

$('#menu a').click(function () {
    $page = $(this).attr('id') + '.html'; //Get the ID and Concatenate .html on it.

    $.get('pages/' + $page, function (response) {
        $('#pages').html(response);
    });
});

// $('#pages').on('click', '#btn_load_user', function(){
//     alert('Hello')
// });
