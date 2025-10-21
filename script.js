//آرایه ها
// let x = ["erfan", "sarae", "hastam", 16, "esfahan", true];
// console.log(x[5]);

//فانکشن حالت اول
// function hello(){
//     console.log("hellow world");
// }
// // call function
// hello();
//فانکشن حالت دوم
// const logging = function() {
//     console.log("hello wrold");
// }
// logging();

//تمرین غرض و ارتفاع زمین
// function erea(width, height) {
//     const eq = height * width;
//     console.log(eq);
// }
// erea(60, 10);

// function user(name, space, lastname) {
//     const full = name + space + lastname;
//     console.log(full);
// }
// user("erfan"," ", "sarae");

// function ms(name, lastname) {
//     const massage = "your full name is this: " + name + " " + lastname +" " + "i hope you have a good noon";
//     console.log(massage);
// }
// ms("erfan", "sarae");

// function user(first, last, age) {
//     const takmil = "dear contact your name is :" + first + " " + last + " " + "and your age is this: " + age;
//     console.log(takmil);
// }
// user("erfan", "sarae", 16);

// برای نمایش اطلاعات کاربر

// روش اول
// const person = {
//     name: "erfan",
//     lastname: "sarae",
//     born: 2009,
//     age: function() {
//         const b = 2025 - person.born;
//         return b;
//     },
//     text: function () {
//         const c = person.age();
//         const a = person.name + " " + person.lastname + " " + c;
//         console.log(a);
//     }
// }
// person.text();

// روش دوم

// const information = ["erfan", "sarae", 2009];

// function math(age) {
//     const calc = 2025 - age;
//     return calc;
// }
// const y = math(information[2]);S
// const call = information[0] + " " + information[1] + " " + y;
// console.log(call);     


// const a = "mohammad erfan sarae";
// const b = a.split(" ", 1);
// console.log(b);

// برای فیلتر کردن شماره موبایل کاربر

// const phonenumber = 9134499410;
// const phonestring = phonenumber.toString();
// const fourword = phonestring.slice(3, 7);
// const full = phonestring.replace(fourword, "****")
// console.log(full);


// برای رند کردن عداد
// const score = 16.78;
// const fix = score.toFixed(0);
// console.log(fix);


// تعریف کردن محدوده سنی خاص برای کاربر

// const info = {
//     name: "erfan",
//     lastname: "sarae",
//     age: 14,
// }
// if (info.age > 15) {
//     console.log("عزیز شما به محتوا های این سایت دسترسی کامل دارید" + info.name);
// }else if (info.age <= 15) {
//     console.log("!!عزیز شما به محتوا های این سایت درستری کامل ندارید" + info.name);
    
// }

// برای مقایسه ی 3 عدد

// const a = 10;
// const b = 20;
// const c = 40;
// let bigger;

// if (a > b &&  a > c) {
//     bigger = a;
// }else if (b > a &&  b > c) {
//     biggerc = b;
// }else {
//     bigger = c;
// }
// console.log(bigger);

// اولین تمرین برای لوپ و حلقه

// for (let i = 0; i < 10; i = i + 1) {
//     console.log(i);
// }

// برای جابه جایی ارایه های یک متغیر

// const array = [10,20,30,40,50,60,70,80,90,100];
// const newarray = [];
// for (let i = array.length - 1; i >= 0; i-- ) {
//     newarray.push(array[i]);
// }
// console.log(newarray);

// دو شکل برای تعیین محدوده برای متغیر
//  let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
//  let i = 0;
// for (i;i < 10;) {
//     console.log(i);
//     i++; 
// }



// نوشتن مضرب های عدد 19 به دو روش

// const array = [];
// for (let i = 1; i< 201; i++) {
//     if (i % 19 !== 0){
//         continue;
//     }
//     array.push(i);    
// }
//     console.log(array);


// const array = [];
// let i = 1;
// while (i < 201) {
//     if (i % 19 !== 0) {
//         i++;
//         continue;
//     }
//     array.push(i);
//     i++;
// }
// console.log(array);


// صرفا جهت یادآوری
// تمرین با آبجکت ها

// const a = {
//     name: "erfan",
//     lastname: "sarae",
//     born: 2009,
//     calc: function(age) {
//         const finall = 2025 - age;
//         return finall;
//     },
//     takmilly: function() {
//         const c = a.calc(a.born)
//         const x = a.name + " " + a.lastname + " " + c;
//         console.log(x);
//     },
// };
// a.takmilly();


// arrow functions
// برای بیشتر از یک دونه پارامتر نیازه به پرانتز 

// const name = (num1, num2) => {
//     const calc = num1 + num2;
//     return calc;
// }
//    const ss = () => {
//     const nt = name(10,90);
//     console.log(nt);
    
//    } 
// ss();
// ss();
// اما برای یک پارامتر نیازی به9 پرانتز نیست!! اما برای هیچ پارامتر هم نیاز به پرانتز هست
 
// const name = num1 => {
//     const calc = num1;
//     return calc;
// }
//    const ss = () => {
//     const nt = name(10);
//     console.log(nt);
    
//    } 
// ss();

// اگر که فقط یک خط کد داریم

// const a = (num1, num2) => console.log(num1 + num2 );

// a(20,90); 

// ترکیبی

// const a = num12 => console.log(num12);
// a(30);

// ریختن یک سری ارایه هایی ک با اس شروع میشن

// const username = ["ali", "erfan", "ehsan", "sara", "soheil", "mamad", "ahmad", "mehdi", "Sahar"];

// const newarray = [];
//  username.forEach((item) => {
//     if (item[0] === "s" || item[0] === "S") {
//         const userobj = {
//             name: item,
//             index: username.indexOf(item)
//         }
//         newarray.push(userobj);
//     }
    
//  });
//      console.log(newarray);

// const a = "age";
// const b = 6;
// const obj = {
//    name: "erfan",
//    lastname: "sarae",
//    [a]: b,
//     born: 2009,
// };
// obj.name = "ali"
// delete obj.name;
// obj.lastname = null;
// console.log(obj);

// if ("born" in obj) {
//     console.log(obj.born);
// }

// الکی
// const obj = {
//     name: "erfan",
//     lastname: "sarae",
//     age: 16,
//     born: 2009,
// };
// const a = Object.keys(obj);
// console.log(a);

// انواع آبجکت ها
// Function
// Array
// Number
// String
// Object
// Date
// Math

// برای دادن 10 عدد رندوم به یک متفیر

// const a = [];

// for (i = 0; i< 10;) {
//     const newnumber = Math.trunc(Math.random() *100);
//     if (newnumber < 75) {
//         continue;
//     }
//     a.push(newnumber);
//     i++;
// }
// console.log(a);

// window

// const a = prompt("whats your name?");
// console.log(a);

// print();
// const b = confirm("are you sure?");
// if (b == true) {
// print();
// };

// فانکشن های مربوط به ویندو

// setTimeout(() => {
//     logging("erfan");
// }, 2000);

// function logging(name) {
//     console.log(name);
    
// }

// const a = setInterval(() => {
//     logging("erfan");
// }, 1000);
// setTimeout(() => {
//     clearInterval(a);
// },4000 );

