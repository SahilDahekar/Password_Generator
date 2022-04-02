let buttonOne = document.getElementById("btn-one")
let buttonTwo = document.getElementById("btn-two")
let buttonThree = document.getElementById("btn-three")
let buttonFour = document.getElementById("btn-four")
let customLength = document.getElementById("custom-len")
let passlen = 0;


function generatepass(){
    let password = "";
    customlen()
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    const len = str.length;
    for(let i=0; i < passlen; i++){
        let random = Math.floor( Math.random()*len + 1 );
        password += str.substring(random, random +1);
    }
    return password;
}

function assignpass(){
    buttonOne.textContent = generatepass();
    buttonTwo.textContent = generatepass();
    buttonThree.textContent = generatepass();
    buttonFour.textContent = generatepass();
}

function customlen(){
    if(customLength.value > 20 || customLength.value < 0){
        alert("invalid number");
    } else if(customLength.value == ""){
        passlen =12;
    }
    else{
        passlen = customLength.value;
    }
}