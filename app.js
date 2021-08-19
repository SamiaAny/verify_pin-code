function getPin() {
    const randomPin = Math.round(Math.random() * 10000);
    if (randomPin.toString().length < 4) {
        return getPin();
    }
    else {
        return randomPin;
    }
}
//generate pin number randomly
function generatePin() {
    const pin = getPin();
    document.getElementById('input-field').value = pin;
}

//for user input
document.getElementById('key-pad').addEventListener('click', function (event) {
    const clicked = event.target.innerText;
    const inputField = document.getElementById('input-number');
    if (isNaN(clicked)) {
        if (clicked == 'C') {
            inputField.value = '';
        }
        else if(clicked == '<') {
            let number = inputField.value;
            number = number.slice(0,number.length-1);
            inputField.value = number;
        }
    }
    else {
        const prevValue = inputField.value;
        const currentValue = prevValue + clicked;
        inputField.value = currentValue;
    }

})

//verify after submission
function verifyPin() {
    const generatedPin = document.getElementById('input-field').value;
    let userPin = document.getElementById('input-number').value;
    //for showing error
    const successField = document.getElementById('success-msg');
    const errorField = document.getElementById('error-msg');
    //for trial
    const trialPeriod = document.getElementById('trial');
    let leftTrial = parseInt(trialPeriod.innerText);

    if(generatedPin == userPin) {
        successField.style.display = 'block';
        errorField.style.display = 'none';
        document.getElementById('input-number').value = '';
        
    }else {
        successField.style.display = 'none';
        errorField.style.display = 'block';
        leftTrial--;
        if(leftTrial > 0) {
            trialPeriod.innerText = leftTrial;
        } else {
            trialPeriod.innerText = leftTrial;
            document.getElementById('submit-btn').setAttribute('disabled','true');
        }
        
    }
}

