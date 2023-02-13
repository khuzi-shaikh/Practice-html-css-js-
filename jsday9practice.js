//empty array////////////////////////////////////////
const arr = [];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;
arr[5] = 60;
console.log(arr[6]);
//string:-length method/////////////////////////////
var str = "JavaScript";
console.log(str.length);
//string:-toLowerCase method///////////////////////
const str1 = "HELLO THIS IS KHUZAIM SHAIKH";
console.log(str1.toLowerCase());
//string:-toUpperCase method//////////////////////
const str2 = "hello this is khuzaim shaikh";
console.log(str2.toUpperCase());
//string:-startsWith method////////////////////////
const str3 = "hello world";
console.log(str3.startsWith("hello"));
console.log(str3.startsWith("Hello"));
//string:-endsWith method//////////////////////////
const str4 = "khuzaim shaikh";
console.log(str4.endsWith("shaikh"));
console.log(str4.endsWith("Shaikh"));
//string:-indexOf method(check index from start)//
const str5 = "my name is khan im not terrorist";
console.log(str5.indexOf("not"));
//string:-lastIndexOf method(check index from start if 2 similar words in a string but consider the word from last)
const str6 = "my name is khan im not terrorist name";
console.log(str6.lastIndexOf("name"));
//string:-trim method////////////////////////////
const str7 = "         hello world         ";
console.log(str7.trim());
//string:-split method////////////////////////////////
const str8 = "o saki saki re o saki saki";
console.log(str8.split(""));
console.log(str8.split(" "));
console.log(str8.split("   "));
//string:-replace method//////////////////////////////
const str9 = "my name are khan are";
console.log(str9.replace("are", "is"));
console.log(str9.replace(/are/g, "is"));
//string:-concat method///////////////////////////////
const str10 = "my",
  str11 = "name",
  str12 = "is",
  str13 = "khan";
console.log(str10.concat(str11, str12, str13));
console.log(str10.concat(` ${str11} ${str12} ${str13}`));
