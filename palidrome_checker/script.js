/* 
1.You should have an input element with an id of "text-input".
2.You should have a button element with an id of "check-btn".
3. You should have a div, span or p element with an id of "result".
4. When you click on the #check-btn element without entering a value into the #text-input element, 
an alert should appear with the text Please input a value.
5. When the #text-input element only contains the letter A and the #check-btn element is clicked, 
the #result element should contain the text A is a palindrome
6. When the #text-input element contains the text eye and the #check-btn element is clicked,
 the #result element should contain the text eye is a palindrome
7. When the #text-input element contains the text _eye and the #check-btn element is clicked, 
the #result element should contain the text _eye is a palindrome.

8. When the #text-input element contains the text race car and the #check-btn element is 
clicked, the #result element should contain the text race car is a palindrome.
9. When the #text-input element contains the text not a palindrome and the 
#check-btn element is clicked, the #result element should contain the text not a palindrome is not a palindrome.
10. When the #text-input element contains the text A man, a plan, a canal. 
Panama and the #check-btn element is clicked, the #result element should contain the text A man, a plan, a canal. Panama is a palindrome.
11. When the #text-input element contains the text never odd or even and 
the #check-btn element is clicked, the #result element should contain the text never odd or even is a palindrome.
12. When the #text-input element contains the text nope and the #check-btn 
element is clicked, the #result element should contain the text nope is not a palindrome.
13. When the #text-input element contains the text almostomla and the 
#check-btn element is clicked, the #result element should contain the text almostomla is not a palindrome.
14. When the #text-input element contains the text My age is 0, 0 si ega ym. 
and the #check-btn element is clicked, the #result element should contain the text My age is 0, 0 si ega ym. is a palindrome.
15. When the #text-input element contains the text 1 eye for of 1 eye. 
and the #check-btn element is clicked, the #result element should contain the text 1 eye for of 1 eye. is not a palindrome.
16. When the #text-input element contains the text 0_0 (: /-\ :) 0-0 
and the #check-btn element is clicked, the #result element should contain the text 0_0 (: /-\ :) 0-0 is a palindrome.
17. When the #text-input element contains the text five|\_/|four and 
the #check-btn element is clicked, the #result element should contain the text five|\_/|four is not a palindrome.

 */

const inputTxt = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


const checkInput = () =>{
    let str = inputTxt.value
    let inputLength = str.length
    if(inputLength===0){
        alert('Please input a value.');
        return;
    }else if(inputLength === 1){
        result.innerText = `${str} is a palindrome`
    }
    /* The palidrome logic
    a palidrome is a text which is same both ways
    only take alphabet into consideration

    eye  is a palidrome
    _eye  is a palidrome
    race car   is a palidrome 
    A man, a plan, a canal. Panama   is a palidrome 

    amanaplanacanalpanama  läng = 21
    */
    
    else{
        //This removes all chars which are not numbers or letter
        let removeUnwantedChars = str.replace(/[^a-zA-Z0-9]/g, "")
        //makes all letters lowercase
        let finalStr = removeUnwantedChars.toLowerCase();

        //Now i can check if it is a palidrome when all unnecessary chars are gone
        //Test
        let isPalidrome = true;
        //The for loop goes thru the string and checks that the oposite letter in the string is the same
        for(let i = 0; i<finalStr.length; i++){
            if(finalStr.charAt(i)=== finalStr.charAt(finalStr.length-i-1)){
                //The string is still a palidrome
            }else{
                //The string is no longer a palirome
                isPalidrome = false;
            }
        }

        if(isPalidrome){
            result.innerText =`${str} is a palindrome`
        }else{
            result.innerText =`${str} is not a palindrome`

        }
    }
}

checkBtn.addEventListener("click",checkInput);
