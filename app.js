//a.Data types
//string;
let color = "Blue";
let name = "Saliz"
//Number;
let length = 14;
let width = 20;

//Booleans;
let x = true;
let y = false;

//object;
const Cellphones = {firstName: "Saliz", lastName: "Pagoy"};
const CellphoneBrand =["Acer","HP","Lenovo"];

//b. Arithmetic and Logical Operators
//Addition
let add = 2 + 5;

//Subtraction
let sub = 7 - 3;

//Multiplacation
let mul = 11 * 3;

//Division
let div = 11 / 2 ;

//Exponentiation
let exp = 4 ** 3;

//Modulu
let mod = 9 % 3;

//Increment
x++;
//Decrement
y--;

//c. Conditional Statements
//i. If else
let number = 95;
if(number >75 ){
     Cellphone = "Get Now";
}else{
    Cellphone = "Do not Buy";
}
console.log(Laptop Brands);

//ii.Switch
let z = 1 % 2;
switch (z){
    case 0:
        yow = "Even"
        break;
    case 1:
      yow = "odd"
       break;
       
    default:
        yow= "No Value"
}
console.log(yow);

//d. Loops
//i. For
for(let b =0; b< 5; b++){
    console.log(b);
}

//ii. For in
const  Langga =["Sal","Ali","Jhan"];
let bab = "";
for(let c in Langga){
    bab += Langga[c];
    console.log(Langga);
}

//iii. For of
const lastnames = ["Pags", "Raxy", "Jami"];
let las = "";
for(let m of lastnames){
    las += m;
    console.log(m);
}



//iv.For while
let j = 0;
while(j < 10){
    j++;
    console.log(j);
}
//e.functional Programming
//i. odd or even
let o = 0;
while (o < 5){
    o++;
let l = o % 2;
    switch (l){
       case 0:
         ak = " Even"
          break;
       case 1:
        ak = "odd"
         break;
        default:
        ak = "No Value"
    }
console.log(o + ". " + o + " is " + ak);
}

//ii.determine prime numbers
let nums =34;
if (nums == 0 || nums == 1){
    let flag= true;
}
for (let d = 2; d<= nums / 2; p++){
    flag = false;
    break;
}
if (!flag){
    console.log(nums + " is prime ");
}else{
    console.log(nums + " is not prime");
}

//iii. determine a string if it is a palindrome

function ispalindrome(Jhand){
    let t = Jhand.length -1
    for (let i = 0; i< Jhand.length / 2; i++){
        if (Jhand [i] !=Jhand [t]){
            return false;
        }
        t--;
    }
    return true;
}
let Jhand1 = "mug";
let Jhand2 = "glass";
let Jhand3 = "plate";

console.log(ispalindrome(Jhand1));
console.log(ispalindrome(Jhand2));
console.log(ispalindrome(Jhand3));