function addition(a,b){
    result=a+b;
    return result;
}
addition(4,6);
alert("Сложение: " + result);

function subtraction(a , b) {
    result=a-b;
    return result;
}

subtraction(6, -5);
alert("Вычитание: " + result);

function multiplying(a , b) {
    result=a*b;
    return result;
}

multiplying(12, 8);
alert("Умножение: " + result);

function division(a , b) {
    result=a/b;
    return result;
}

division(81, 19);
alert("Деление без остатка: " + parseInt(result));

function mathOperation(arg1,arg2,operation) {
    switch(operation){
        case 1:
            addition(arg1,arg2);
            alert("Сложение: " + result);
            break;
        case 2:
            subtraction(arg1,arg2);
            alert("Вычитание: " + result);
            break;
        case 3:
            multiplying(arg1 , arg2);
            alert("Умножение: " + result);
            break;
        case 4:
            division(arg1 , arg2);
            alert("Деление без остатка: " + parseInt(result));
            break;
        default:
            alert("Таких функций нет.");
    }
    
}
mathOperation(45,13,2);