$(document).ready(function () {

});

var OPERATION_LEAST = "operationLeast";
var OPERATION_GREATEST = "operationGreatest";
var OPERATION_MEAN = "operationMean";
var OPERATION_SUM = "operationSum";
var OPERATION_PRODUCT = "operationProduct";

var least, greatest, mean, sum, product;

var value0, value1, value2, value3, value4;

var arrNumbers;

var typeOfOperation;

function onRun() {
    typeOfOperation = $('#selectbasic').val();
    value0 = parseInt($('#textinput0').val());
    value1 = parseInt($('#textinput1').val());
    value2 = parseInt($('#textinput2').val());
    value3 = parseInt($('#textinput3').val());
    value4 = parseInt($('#textinput4').val());
    arrNumbers = [value0, value1, value2, value3, value4];

    switch (typeOfOperation) {
        case OPERATION_LEAST:
            findLeast();
            break;
        case OPERATION_GREATEST:
            findGreatest();
            break;
        case OPERATION_MEAN:
            findMean();
            break;
        case OPERATION_SUM:
            findSum();
            break;
        case OPERATION_PRODUCT:
            findProduct();
            break;
    }
}
function compareNumbers(a, b) {
    return a - b;
}
function findLeast() {
    arrNumbers.sort(compareNumbers);
    least = arrNumbers[0];
    alert("This is the least number " + least);
}
function findGreatest() {
    arrNumbers.sort(compareNumbers);
    arrNumbers.reverse();
    greatest = arrNumbers[0];
    alert("This is the greatest number " + greatest);
}
function findMean() {
    mean = 0;
    for (var index = 0; index < arrNumbers.length; index++) {
        mean += arrNumbers[index];
    }
    mean /= arrNumbers.length;
    alert("This is the average number " + mean);
}
function findSum() {
    sum = 0;
    for (var index = 0; index < arrNumbers.length; index++) {
        sum += arrNumbers[index];
    }
    alert("This is the Sum of all numbers " + sum);
}
function findProduct() {
    product = 1;
    for (var index = 0; index < arrNumbers.length; index++) {
        product *= arrNumbers[index];
    }
    alert("This is the Product of all numbers " + product);
}