// Pin Count event Section 
const buttonID = document.getElementById('button-section');
buttonID.addEventListener('click', function(event){
    let button = event.target.innerText;
    if(button === '<'){
       
        button = '';
      
    }
    else if(button === 'C'){
        document.getElementById('input-value').value = '';
        button = '';
    }
    else if(button === 'Submit'){
        pinMatcher();
    }
    else{
    document.getElementById('input-value').value += button;
    }
})
// Random Number Generator
 function randomNumber (){
    let random = Math.random()*10000 +'';
    let randomPin = random.split('.');
    randomPin = randomPin[0];
    if(randomPin.length > 3){
        return randomPin;
    }else{
        return randomNumber ();
    }
       
 }

 function genaretPin() {
    document.getElementById('random-Number').value = randomNumber ();
 }
// pin Matching Function
 function pinMatcher() {
    let generatNumber = document.getElementById('random-Number').value;
    let typeNumber = document.getElementById('input-value').value;
    let matchingInfo =document.getElementById('pin-match');
    let notMatching = document.getElementById('not-match')
    if(generatNumber == typeNumber){
       matchingInfo.style.display = 'block';
        notMatching.style.display = 'none';
    }
    else {
    matchingInfo.style.display = 'none';
    notMatching.style.display = 'block';
    //
   }

 }