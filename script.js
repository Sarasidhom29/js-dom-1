'use strict';

const lamp = document.getElementById('lamp-off');
const powerButton = document.getElementById('turn-on');

function lampSwitch(){
    
    if (lamp.src.includes('./img/white_lamp.png')) {
      lamp.src = './img/yellow_lamp.png';
      powerButton.textContent = 'Spegni';
    } else {
      lamp.src = './img/white_lamp.png';
      powerButton.textContent = 'Accendi';
    }

}


console.log(lamp);
console.log(powerButton);