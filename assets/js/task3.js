'use strict'
const map = [];
function noRepeatArr(arr1,arr2) {
    arr1.filter(function (el1) {
        arr2.some(function (el2) {
            if(el1 === el2){
                map.push(el1);
            };
        })
    })
}