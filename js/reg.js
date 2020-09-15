// document.getElementById('myinput').addEventListener('keyup', function () {
//     let inputValue = this.value;
//     document.getElementById('mydiv').innerText = inputValue;
// });

// $('#myinput').keyup(function(){
//     $inputValue = $(this).val();
//     $('#mydiv').text($inputValue);
// });

// $('#myinput').on('keyup', function(){
//     $inputValue = $(this).val();
//     $('#mydiv').text($inputValue);
// });

// $('#mydiv').css({
//     // 'background-color':'red'
//     backgroundColor:'red',
//     width:'300px',
//     color:'white',
//     height: '400px'
// });

// Actual Form Scritps with JQuery //
$('#fname').blur(function(){
    $fname = $(this).val();
    if($fname == ''){
        $('#spanfname').text('Fullname is required');
    }else{
        $('#spanfname').text('');
    }
});

$('#pass').keyup(function(){
    $pass = $(this).val();
    $parent = $(this).parent('div')
    
    if($pass == ''){
        $parent.append(spanCreator('Password must not be empty'));
    }else{
        $parent.children('span.errorSpan').text('');
    }
});

$('#cpass').keyup(function(){
    $cpass = $(this).val();
    $pass = $('#pass').val();
    $parent = $(this).parent('div')
    
    if($pass != $cpass){
        $parent.append(spanCreator('Password Mis-match'));
    }else{
        $parent.children('span.errorSpan').text('');
    }
});


$('#myform').submit(function(){
    
});

function spanCreator(content) {
    let newSpan = document.createElement('span');
    newSpan.setAttribute('class', 'errorSpan');
    newSpan.innerText = content;
    return newSpan;
}
