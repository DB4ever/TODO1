// Create a function that, given a string
// returns all of that string’s contents
// but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c "
// return "PlayThatFunkyMusic"


function removeBlanks(str){
    var noStr = str.split(" ");
    return noStr.join("");
}
//console.log(removeBlanks(" Pl ayTha tF u nkyM usi c"))
// Create a JavaScript function that given a string
// returns the integer made from the string’s digits
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should 
// return the number 1357924680.
function getDigits(str){
    var newNum = "";
    for (var i=0; i<str.length; i++){
        switch(str){
            case 1:
                str[i] == "1";
                break;
            case 2:
                str[i] == "2";
                break;
            case 3:
                str[i] == "3";
                break;
            case 4:
                str[i] == "4";
                break;
            case 5:
                str[i] == "5";
                break;
            case 6:
                str[i] == "6";
                break;
            case 7:
                str[i] == "7";
                break;
            case 8:
                str[i] == "8";
                break;
            case 9:
                str[i] == "9";
                break;
            case 10:
                str[i] == "0";
        }{
            newNum += str[i]
        }
    }
    return Number(newNum)
}
//console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))
// Acronyms
// Create a function that, given a string
// returns the string’s acronym (first letters only, capitalized) 
// Given " there's no free lunch - gotta pay yer way. "
// return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!"
// return "LFNYISN"
function acronyms(str){
    var firstLetters = "";
    var words = str.split(" ");
    for (var i=0; i<words.length;i++){
        if (words[i]!=""){
            firstLetters += words[i][0]
        }
    }
    return firstLetters.toUpperCase()
}
//console.log(acronyms("there's no free lunch - gotta pay yer way."))
// Count Non-Spaces
// Accept a string
// return the number of non-space characters found in the string
// given "Honey pie, you are driving me crazy"
// return 29 (not 35)
function countNoSpaces(str){
    var newStr = removeBlanks(str)
    return newStr.length
}
//console.log(countNoSpaces("Honey pie, you are driving me crazy"))
// Remove Shorter Strings
// Given a string array
// value (length)
// remove any strings shorter than the length from the array
function removeShorterStr(arr, val){
    for(var i=arr.length-1; i >=0; i--){
        if (arr[i].length<val){
            for (var j = i; j<arr.length-1; j++){
                arr[j] = arr[j+1]
            }
            arr.pop()
        }
    }
    return arr
}
//console.log(removeShorterStr("Honey pie, you are driving me crazy".split(" "), 4))