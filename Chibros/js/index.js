document.getElementById('currency_pair').addEventListener('change',function(){
   let cpair=this.value;
   if(cpair==='d2n'){
     let flabel=document.getElementById('firstInput').children[0];
     let slabel=document.getElementById('secondInput').children[0];
     let finputb=document.getElementById('firstInput').children[1];
     let sinputb=document.getElementById('secondInput').children[1];
     flabel.innerText='Dollar Value';
     slabel.innerText='Naira Value';
     finputb.setAttribute('id','dollar');
     sinputb.setAttribute('id','naira');
   }else if(cpair==='n2d'){
     let flabel=document.getElementById('firstInput').children[0];
     let slabel=document.getElementById('secondInput').children[0];
     let finputb=document.getElementById('firstInput').children[1];
     let sinputb=document.getElementById('secondInput').children[1];
     flabel.innerText='Naira Value';
     slabel.innerText='Dollar Value';
     finputb.setAttribute('id','naira');
     sinputb.setAttribute('id','dollar');
   }
 });

document.getElementById('btnClear').addEventListener('click',function(){
  let input1 = document.getElementById('naira');
  let input2 = document.getElementById('dollar');
  input1.value = '';
  input2.value = '';
});
document.getElementById('btnAclear').addEventListener('click',function(){
  let input1 = document.getElementById('aFi');
  let input2 = document.getElementById('aSi');
  input1.value = '';
  input2.value = '';
});

 function convert2naira(dollar){
   let naira=dollar*380;
 return naira;
 }
 function convert2dollar(naira){
 let dollar=naira/380;
 return dollar;
 }
 document.getElementById('convert').addEventListener('click',function(){
   let firstInput;
   let secondInput;
   let cpair=document.getElementById('currency_pair').value;
   if (cpair==='n2d'){
    firstInput= document.getElementById('naira').value;
    if(firstInput==''){
       alert('Please Naira field should not be left empty');
    }else{
    secondInput=convert2dollar(firstInput);
    document.getElementById('dollar').value=secondInput;
    }
   }else if(cpair==='d2n'){
   secondInput=document.getElementById('dollar').value;
     if(secondInput==''){
     alert('Please Dollar field should not be left empty');
     }else{
     firstInput=convert2naira(secondInput);
    document.getElementById('naira').value=firstInput;
     }
   }
 });
 
 //----SCRIPT FOR ADVANCED CALCULATOR-----//
 
 document.getElementById('btnAdvanced').addEventListener('click', function(){
 
  document.getElementById('container').style.display='none';
  document.getElementById('adv').style.display='block';
 });
 document.getElementById('btns').addEventListener('click', function(){
 let adv=document.getElementById('adv').style.display='none'
   let btnsimp=document.getElementById('container').style.display='block'
 });
 
 //---FUNCTIONS FOR CURRENCY CONVERTION---//
 function naira2dollar(naira){
   let dollar = naira / 380;
 return dollar;
 }
 function dollar2naira(dollar){
 let naira = dollar * 380;
 return naira;
 }
 function naira2euro(naira){
 let euro = naira / 445;
 return euro;
 }
 function euro2naira(euro){
 let naira = euro * 445;
 return naira;
 }
 function dollar2euro(dollar){
 let euro = dollar / 1.18;
 return euro;
 }
 function euro2dollar(euro){
 let dollar = euro * 1.18;
 return dollar;
 }
 
//---FUNCTION FOR THE CONVERTION---//

 function A_convert(theAmount,value1,value2){
  let converted;
  if(value1===value2){
    converted = theAmount;
  }else if(value1 === 'naira' && value2 === 'dollar'){
    converted = naira2dollar(theAmount);
  }else if(value1 === 'dollar' && value2 === 'naira'){
    converted = dollar2naira(theAmount);
  }else if(value1 === 'naira' && value2 === 'euro'){
    converted = naira2euro(theAmount);
  }else if(value1 === 'euro' && value2 === 'naira'){
    converted = euro2naira(theAmount);
  }else if(value1 === 'dollar' && value2 === 'euro'){
    converted = dollar2euro(theAmount);
  }else if(value1 ==='euro' && value2 === 'dollar'){
    converted = euro2dollar(theAmount);
  }
   return converted;
 }
 
 
/*RECEIVING INPUT FROM THE FIRST INPUT BOX
 AND PRINTING RESULT IN THE SECOND INPUT BOX*/
 
 var firstI = document.getElementById('aFi');
 var secondI = document.getElementById('aSi');
 var firstS = document.getElementById('aCurrency_pair1');
 var secondS = document.getElementById('aCurrency_pair2');
 
 document.getElementById('aFi').addEventListener('keyup', function(){
   let firstSelect = firstS.value;
   let secondSelect = secondS.value;
   let amount = this.value;
    secondI.value = A_convert(amount, firstSelect, secondSelect);
 });
 document.getElementById('aCurrency_pair1').addEventListener('change', function(){
 let firstSelect = firstS.value;
 let secondSelect = secondS.value;
 let amount = firstI.value;
 secondI.value = A_convert(amount, firstSelect, secondSelect);
 });
 document.getElementById('aSi').addEventListener('keyup', function(){
 let firstSelect = firstS.value;
 let secondSelect = secondS.value;
 let amount = this.value;
 firstI.value = A_convert(amount, secondSelect, firstSelect);
 });
 document.getElementById('aCurrency_pair2').addEventListener('change', function(){
 let firstSelect = firstS.value;
 let secondSelect = secondS.value;
 let amount = secondI.value;
 firstI.value = A_convert(amount, secondSelect, firstSelect);
 });
 
 
 