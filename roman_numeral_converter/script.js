
const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn")
const result = document.getElementById("output")



const inputIsValid = (input) =>{
    if(!input){
        result.innerHTML = "Please enter a valid number"
        return false;
    }
    else if(input<1){
        result.innerHTML = "Please enter a number greater than or equal to 1"
        return false;
    }else if(input>=4000){
        result.innerHTML = "Please enter a number less than or equal to 3999"
        return false;
    }else{
        return true;
    }
}
//Do some sort of recursion 
/*
16 --> XVI
649 --> DCXLIX
1023 --> MXXIII
3999 --> MMMCMXCIX
M = 1000
CM = 900
D = 500
CD = 400
C = 100
XC = 90
L = 50
XL = 40
X = 10
IX = 9
V = 5
IV = 4
I = 1
Börjar med att lägga till den högsta möjliga symbolen till resultatet. 16,X -> 6, V-> 1, I -> 0,klar 
649,D(500) -->149,C(100) --> 49,XL(40) --> 9,IX(9) --> 0, klar 
Varje gång en input kommer in i funktionen måste man hitta det största symbolen som kan tas bort,
sedan adderas symbolen och funktionen kallas pånytt med symbolvärdet borttaget,
detta fortsätter tills inputstringen = 0; 
Klasserna är
number>=1000
999-901
*/
const convertToRoman = (inputNumber) => {
    if(inputNumber === 0) {
        // Nu är hela talet konverterat
        return;
    }
    //numret är större än eller lika med 1000
    if(inputNumber >= 1000) {
        //Lägg till M till resultatet
        result.innerHTML += "M";
        //Kalla funktionen igen med det nya numret
        convertToRoman(inputNumber - 1000);
    }
    else if(inputNumber >= 900) {
        result.innerHTML += "CM";
        convertToRoman(inputNumber - 900);
    }
    else if(inputNumber >= 500) {
        result.innerHTML += "D";
        convertToRoman(inputNumber - 500);
    }
    else if(inputNumber >= 400) {
        result.innerHTML += "CD";
        convertToRoman(inputNumber - 400);
    }
    else if(inputNumber >= 100) {
        result.innerHTML += "C";
        convertToRoman(inputNumber - 100);
    }
    else if(inputNumber >= 90) {
        result.innerHTML += "XC";
        convertToRoman(inputNumber - 90);
    }
    else if(inputNumber >= 50) {
        result.innerHTML += "L";
        convertToRoman(inputNumber - 50);
    }
    else if(inputNumber >= 40) {
        result.innerHTML += "XL";
        convertToRoman(inputNumber - 40);
    }
    else if(inputNumber >= 10) {
        result.innerHTML += "X";
        convertToRoman(inputNumber - 10);
    }
    else if(inputNumber >= 9) {
        result.innerHTML += "IX";
        convertToRoman(inputNumber - 9);
    }
    else if(inputNumber >= 5) {
        result.innerHTML += "V";
        convertToRoman(inputNumber - 5);
    }
    else if(inputNumber >= 4) {
        result.innerHTML += "IV";
        convertToRoman(inputNumber - 4);
    }
    else if(inputNumber >= 1) {
        result.innerHTML += "I";
        convertToRoman(inputNumber - 1);
    }
}


convertBtn.addEventListener("click", ()=>{
    //resets the old values when the button is clicked
    result.innerHTML = "";
    result.value = "";

    if(inputIsValid (inputNumber.value)){
        convertToRoman(parseInt(inputNumber.value))
    }else{
        //do noting because the input is invalid
    }


})