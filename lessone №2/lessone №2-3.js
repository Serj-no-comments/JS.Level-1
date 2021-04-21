let a=5;
let b=10;
let c="";

if(a>0 && b>0){
    c=a-b;
    alert(c);
}else if(a<0 && b<0){
    c=a*b;
    alert(c);
}else if(a<0 && b>0 || a>0 && b<0){
    c=a+b;
    alert(c);
}else{
    alert("Это не числа.")
}