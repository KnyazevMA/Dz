"use strict"

/*
* 1. Функция принимает массив и выводит его на экран.
* */
function showArr(arr) {
    if (Array.isArray(arr)) {
        arr.forEach(function (elem) {
            console.log(elem);
        })
    }
}

/*
* 2. Функция принимает массив и выводит только четные
элементы.
* */
function evenElements(arr) {

    arr.forEach(function (elem) {
        if (elem % 2 === 0) {
            console.log(elem);
        }
    });
}

/*
* 3. Функция принимает массив и возвращает сумму всех
элементов массива.
* */
function summElem(arr) {
    let result = arr.reduce(function (a, b) {
        return a + b;
    })
    console.log(result);
}

/*
* 4. Функция принимает массив и возвращает его максималь-
ный элемент.
* */
function getMaxElem(arr) {

    if (Array.isArray(arr)) {
        let max = arr[0];

        arr.forEach(
            function (elem) {
                max = elem > max ? elem : max;
            }
        )
        return max;
    }


}

/*
* 5. Функция добавления нового элемента в массив по ука-
занному индексу.
* */
function addIndex(a, b) {
    const arr = [1, 233, 523, 2, 4, 5, 6, 7, 8, 9]
    console.log(arr);
    arr.splice(a, 0, b);
    console.log(arr);
}

/*
*6. Функция удаления элемента из массива по указанному
индексу.
* */
function delIndex(i) {
    const arr = [1, 233, 523, 2, 4, 5, 6, 7, 8, 9]
    console.log(arr);
    arr.splice(i, 1);
    console.log(arr);
}