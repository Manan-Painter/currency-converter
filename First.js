// LOOPS Full Study In JS

//Loop nu kam chee k koi code hoy ene execute var m var karee (again And againc)

//1.For Loop
// for(let count=1; count<=5; count++){
//     console.log("count = ",count);
// }


// let sum = 0;
// let n = 5;
// for(let i = 1; i<=n; i++){
//     sum= sum+i;
// }
// console.log("sum =",sum);

// 2.wihile loop
// let i = 1;
// while(i<=5){
//     console.log("number is ",i);
//     i++;
// }

//for  of loop
//aa lopp thi strings ane array pr pn loop lagavay
// let size = 0;
// let str = ("Manan Painter")
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log("string size=",size);

//for in loop
//aa lopp ne apde object mate ane string mate use kari sakiye chee
// let student = {
//     name: "manan",
//     age: 22,
//     cgpa:7.55,
//     isPass:true
// };

// for(let i in student){
//     console.log("obj=",i,"value=",student[i]);
// }

//print all even number from 0 to 10

// for(let i =0; i<=100; i++){
//     if(i%2 === 0){
//         console.log("num=",i);
//     }
// }
// let gamenumber =25;
// let number = prompt("Enter the number:");
// while(number != gamenumber){
//    number = prompt("you enterd wrong number");
// }
// console.log("you enterd wright number")

// let User = prompt("Enter The Full Name")
// let username = "@"+User+User.length;
// console.log(username);

// let marks = [85,52,48,3,78];

// let toppers = marks.filter((val) => {
//    return val>60;
// });

// console.log(toppers);

// let user = prompt("enter a number");

// let arr = [];

// for(let i=1; i<=user; i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// function sum(x,y){
//     s = x+y;
//     return s;
// }
// let val = sum(3,4);
// console.log(val);

// let sum = (a,b) => {
//     console.log(a+b);
// }
// let val = sum(3,4);

// function countvowels(str) {}

// class BugatiCar {
//     start() {
//         console.log("start");
//     } 
//     stop() {
//         console.log("stop");
//     }
//   }

//   let Ford = new BugatiCar();
//   let walksh = new BugatiCar();
  
// class ToyotaCar {
//     constructor(brand) {
//         console.log("creating new object");
//         this.brand = brand;
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
// }
  
// let fortuner = new ToyotaCar("mg");
// console.log(fortuner);

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }
// class Child extends Parent {}

// let obj = new Child()
  
// class Person {
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("your work");
//     }
// }

// let manan = new Engineer();


// class User {
//     constructor(name,email){
//         this.name =name;
//         this.email=email;
//     }
//     editData() {
//         console.log("data =",data);
//     }
// }

// class Admin extends User {
//     constructor(name,email){
//         super(name,email);
//     }
//     editdata() { 
//         Data = "some new value";
//     }
// }

// let std1 = new User("manan","manan@gmail.com");
// let std2 = new User("aadarsh","aadarsh@gmail.com");

// let admin1 = new Admin("nayan","nayan@gmail.com");

// let sum = 0;
// n = 10;
// for(let i = 1; i<=n ; i++){
//     sum = sum + i;
// }
// console.log("sum =",sum);

// let marks = [85,20,95,55,23,65,25];
// let sum = 0;
// for(let val of marks){
//     sum = sum + val;
// }

// let avg = sum/marks.length;
// console.log(avg);

// let arrowmul = (a,b) => {
//     console.log(a*b);
//     return a*b;
// }
// arrowmul(3,4);

// function countvowel(str) {,12,54,56,89

//     let count = 0;
//     for(let char of str){

//         if(
//             char === "a" || 
//             char === "e" ||
//             char === "i"||
//             char === "o" ||
//             char === "u"
//             ){
//                 count++;
//             }
//     }
//     console.log(count);
// const arr = [23,25,26,25,23];
// const max = math.max(arr);
// console.log(max);
  

// const fileext = (str) => str.slice (str.lastIndexof('.'));

// console.log(fileext("index.html"));
// let a = prompt("Enter a number:");
// let b = prompt("Enter the number:");
// var c = parseInt(a) + parseInt(b);
// console.log(c);

// let a = prompt("Please enter a number:")
// let b = Math.sqrt(a);
// console.log(b);

// v

// const a = prompt("Enter a nnumber");
// if(a < 0){
//     console.log("this is a nagative number");
// }else if(a > 0){
//     console.log("this is a positive number");
// }else{
//     console.log("this is zero");
// }

// const a = prompt("enter a number");
// if(a == 1){
//     console.log("this is not a prime num and not composite num")
// }
// else if(a % 2 !== 0){
//     console.log("this is prime num");
// }
// else{
//     console.log("this is not prime num");
// }


// const a = prompt("enter a number");
// const b = prompt("enter a number");
// const c = prompt("enter a number");
// var res = Math.max(a,b,c);
// console.log(res);

// const num = prompt("enter a num");
// var fct = 1;
// for(let i = 1; i<=num; i++){
//     fct = fct * i;
//     console.log(fct);
// }
// 
// 
// const num = prompt("enter a table num");
// for(var i =1;i<=10;i++){
// var res = i * num;
// console.log(res);
// }

// var fact = 1;
// for (let i = 1; i<=a; i++){
//  fact = fact * i;
//  console.log(fact);
// // }

// const num1 = prompt("enter a num");
// const num2 = prompt("enter a num");
// var opr = prompt("enter opr +,-,*,/");
// switch(opr)
// {
//     case "+":
//         var res = parseFloat(num1) + parseFloat(num2);
//         console.log(res);
//         break;
// }


// var a =0;
// var b = 1;
// for (let i=0; i<=10; i++){

//     var temp=a+b;
//     var res = temp + i;
//     console.log (res);
// }

// const num = prompt("Enter A Number");
// console.log(Math.sqrt(num));

// const height = prompt("Enter Height");
// const base = prompt("Enter Base");

// let res = (height * base)/2;
// console.log(res);

// const a = prompt("Enter a num");
// const b = prompt("Enter a num");
// var temp;
// temp = a;
// a=b;
// b=temp;
// console.log(a,b);


// function convert(){
//     var c = document.getElementById("data").value;
//     var f =( c * 1.8)+32;
//     document.getElementById("res").innerText= "c = f";
    
// }

// const num = prompt("Enter A Number");

// if(num%2===0){
//     console.log("This is even num");
// }else {
//     console.log("This is odd num")
// }
// if(num>0){
//     console.log("positive");
// }   else if(num<0){
//     console.log("nagative");
//     }else {
//         console.log("zero");
//    


// for(let i = 2; i<=100; i+1)
//     console.log(i);
// }

//const num = prompt("Enter Your Factorial num");
// // for(let num = 1; num<=1; num--){
// // //     let res = parseInt(facnum) + parseInt(num);
// //         console.log(res);
// // }

// function sum(num){
//     if(num>0){
//         return num + sum(num-1);
//     }else{

//     }
//}
// let num = 5;
// for(let num = 1; num>=0; num-1){
//     console.log(num);
// }

// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}"

// const dropdowns = document.querySelector(".dropdown select");
// const btn = document.querySelector("form button");
// const fromcurr = document.querySelector(".from select");
// const tocurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for(let select of dropdowns) {
//     let(currcode in countrylist) {
//         console.log(code,countrylist[code]);
//         let newOption = document.createElement("option");
//         newOption.innerText =currcode;
//         newOption.value = currcode;
//         if(select.name === "from" && currcode === "USD"){
//             newOption.selected="selected"
//         }else if(select.name === "to" && currcode === "INR"){
//             newOption.selected="selected"
//         }

//         select.append(newOption);
//     }
//     select.addEventListener("change" , (evt) =>{
//         updateFlag(evt.target);
//     });
// }

// const updateFlag = (element) => {
//     let currcode = element.value;
//     let coutrycode = countryList[currcode];
// };

// btn.addEventListener("click", async (evt)=>{
//     evt.preventDefault();
//     let amount = document.querySelector(".amount input");
//     let amtval = amount.value;
//     if(amtval===" " ||amtval < 1) {
//         amount.value = "1";
//     }

//     const URL =`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()};
//     let response = await fetch(URL);
//     let data = await response.json();
//     let rate = data[tocurr.value.toLowerCase()];

//     let finalamount = amount*rate;
//     msg.innerText = `${amtval} ${fromcurr.value} = ${finalamount} ${tocurr.value}
// });


for(let i = 0; i<=100; i++){
    if(i%2===0){
        console.log(i);
    }
}