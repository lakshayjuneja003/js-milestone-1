let a=prompt("enter first number")
let o=prompt("enter operator")
let b=prompt("enter second num")
switch(o){
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
    break;
        default:
        console.log("bad Expression");
        break;
}