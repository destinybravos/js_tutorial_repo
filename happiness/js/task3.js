document.getElementById('respbar').addEventListener('click',function () {
    document.getElementById('upaside1').style.padding="36px 0 5px 8px";
    document.getElementById('upaside3').style.display="none";
document.getElementById('upaside2').style.display="inline-block";
document.getElementById('topnav').style.height='165px';
});
document.getElementById('respbar1').addEventListener('click', function() {
    document.getElementById('upaside2').style.display="none";
    document.getElementById('upaside3').style.display="inline-block";
    document.getElementById('topnav').style.height='34px';
    document.getElementById('upaside1').style.padding="7px 8px";
});