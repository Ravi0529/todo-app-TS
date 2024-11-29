"use strict";
function newfunction(vari) {
    console.log(`hello ${vari}`);
}
// function Sum(Num1:number , Num2:number) {
//     return Num1+Num2;
// }
// this gives return value number but we can write explicitly what to return 
// type inference (tsc auto matecially returned type of return as number)
function Sum(Num1, Num2) {
    return Num1 + Num2;
}
const a = Sum(1, 3);
// console.log(a)
// writing explicitly what to return is preferable 
function isLeagal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let x = isLeagal(18);
// now here we don't have to write type becoz tsc already assigned x boolean 
// but assigning value is more preferable 
// Giving type to function  OR  
// How to give type to a function passed as an argument
function runafter1S(fn) {
    setTimeout(fn, 1000);
}
function newIsLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
// interface let you implements class 
class NewUser {
    constructor(a, b, c) {
        this.firstname = a;
        this.lastname = b;
        this.age = c;
    }
}
function UserIdPrint(id) {
    console.log(id);
}
const t = {
    name: "Fenil",
    company: "falana company",
    salary: 4999
};
// console.log(t)
// QUESTION: What is difference between type and interface ? 
// ANSWER:  where ever you need to use | or & you can use type and if you have to implement class you can user interface 
// i.m, type doesn't let to implement class whereas interface let you does that $
// ARRAYS 
function maxvalue(num) {
}
// ENUMS 
// enums lets you create human readable enumrations which you want as input by the user 
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right"; //3
})(Direction || (Direction = {}));
;
function newGame(keypressed) {
    if (keypressed == Direction.right) {
        //
    }
}
newGame(Direction.up);
newGame(Direction.down);
// this is how we use enums in this 
// console.log(Direction.up);
// console.log(Direction.down);
// console.log(Direction.right);
// console.log(Direction.right);
// at the end enums are nothing but numbers assigned to the values we wrote in that 
// now if you don't want number to be its value you've to give it values manuallly 
var Hallo;
(function (Hallo) {
    Hallo["RIGHT"] = "right";
    Hallo["LEFT"] = "left";
})(Hallo || (Hallo = {}));
// now if you want that that nums start from 1 or any other number you can do it by assignig that number to the fist value in enum 
var hallu;
(function (hallu) {
    hallu[hallu["hey"] = 15] = "hey";
    hallu[hallu["hello"] = 16] = "hello";
    hallu[hallu["wello"] = 17] = "wello";
    hallu[hallu["kemcho"] = 18] = "kemcho";
})(hallu || (hallu = {}));
// GENERIC
// so generic is used to give different of types to a function , class and other things which you can google 
function Newfun(a) {
    return a;
}
// console.log(Newfun<string> ("hallo"));
// console.log(Newfun<number> (3));
// here this works as we've given to type as varible there 
// if you don't provide type tsc implicitly infer what to is the value of T 
function getFirstEl(a) {
    return a[0];
}
let my = getFirstEl(["hello", "hey", "how"]);
my.toUpperCase();
// here i did not write type although onhovering we can see that it is returning string as tsc infered it by it's own 
getFirstEl(["hello", 1, "new", 2]);
