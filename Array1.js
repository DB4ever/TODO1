/*
Make a Push Front without built-in methods
*/
function pushFront(arr, val){
    console.log(arr);
    for(var idx = arr.length; idx >= 1; idx--){
        arr[idx] = arr[idx-1];
        console.log(arr);
    }
    arr[0] = val;
    return arr;

}
//console.log(pushFront([1,2,3,4],99));
/*
Pop Front without using built-in array methods except pop()
 */
function popFront(arr, val){
    console.log(arr);
    var returnVal = arr[0];
    for(var idp = 0; idp < arr.length; idp++){
        arr[idp] = arr[idp+1];
        console.log(arr);
    }
    arr.length--;
    console.log(arr);
    return returnVal;
}
//popFront([1,2,3,5])
/*
Insert At
Given an array
index
additional value
insert the value into array at given index 
Do this without using built-in array methods 
pushFront(arr,val) as equivalent to insertAt(arr,0,val).
*/
function insertAtFunc (arr, idx, val){
    console.log(arr);
    for(var i = arr.length; i >=idx; i--){
        arr[i] = arr[i-1];
        console.log(arr);
    }
    arr[idx] = val;
    return arr;
}
//console.log(insertAtFunc([1,2,3,4],2,99))
// Remove At
// array
// index into array
// remove and return
// array value at that index 
// Do this without using built-in array methods except pop()
// popFront(arr) as equivalent to removeAt(arr,0)
function removeAt (arr, idx){
    console.log(arr);
    var returnVal = arr[idx];
    for(var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
        console.log(arr);
    }
    arr.pop();
    console.log(arr);
    return returnVal;
}
console.log(removeAt([1,2,3,4],1))