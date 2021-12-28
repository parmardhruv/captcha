function cap(){
    var alpha =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
    'S','T','U','V', 'W','X',
        ,'Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','h','i'
        ,'j','k','l','m','n','o','p','q','r','s','t',
        ,'v','w','x','y','z', '!','@','#','$','%','^','&','*','+','*'];

var a = alpha [Math.floor(Math.random()*71)];
var b = alpha [Math.floor(Math.random()*71)];
var c = alpha [Math.floor(Math.random()*71)];
var d = alpha [Math.floor(Math.random()*71)];
var e = alpha [Math.floor(Math.random()*71)];
var f = alpha [Math.floor(Math.random()*71)];


var final =a+b+c+d+e+f;
document.getElementById("capt").value=final;
}
function validcap(){
    var stg1 = document.getElementById('capt').value;
    var stg2 = document .getElementById('textinput').value;
    if(stg1==stg2){
        alert('from is validated succesfuly');
        return true ;
    }
    else{
        alert('please inter valid captcha');
        return false ;
    }
}