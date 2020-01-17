function pushFront(arr, val){
    console.log(arr);
    for(var idx = arr.length; idx >= 1; idx--){
        arr[idx] = arr[idx-1];
        console.log(arr);
    }
    arr[0] = val;
    return arr;
}
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
// an array of comparable values 
// move the lowest element to array’s front
// shifting backward any elements previously ahead of it
// Do not otherwise change the array’s order
// Given [4,2,1,3,5]
// change it to [1,4,2,3,5]
// return it. 
// do this without using built-in functions
function minToFront(arr){
    console.log(arr);
    var mindex = 0;
    for(var i = 1; i < arr.length; i++){
        var curval = arr[i];

        if (curval < arr[mindex]){
            // minVal = curval;
            mindex = i;
            console.log(mindex)
        }
    }
    return pushFront(arr, removeAt(arr, mindex));
    console.log(minVal, mindex, arr);

    
}
console.log(minToFront([2,3,6,1]))