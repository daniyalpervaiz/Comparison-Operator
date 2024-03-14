//comparison operator(==),(!=),(>),(<),(===),(!==),(>=),(<=)
var a = "ali";
var b = "ali";
console.log(a == b); //true because same value no (upper and lower case)
var c = "ali";
var d = "ALI";
console.log(c == d); //false because of case sensitivity(lower and upper case occur)
var e = "5";
var f = 5;
//@ts-ignore
console.log(e == f); //true because in (==) it check value
var g = "true";
var h = true;
//@ts-ignore
console.log(g == h); //false because boolean and string can't same 
var i = "5";
var j = 5;
//@ts-ignore
console.log(i != j); //false because value is same
var k = 10;
var l = 5;
console.log(k > l); //true because 10 is greater than 5
var m = 25;
var n = 15;
console.log(m < n); //false because 25 is less than 15
var o = "5";
var p = 5;
//@ts-ignore
console.log(o === p); //false because in (===) it check value and also data type
var q = "true";
var r = true;
//@ts-ignore
console.log(q === r); //false because both are different data type
var s = 10;
var t = 5;
console.log(s !== t); //true because values are different
var u = "10";
var v = 10;
//@ts-ignore
console.log(u !== v); //true because data type are different
var w = 10.5;
var x = 10;
console.log(w <= x); //false beacause 10.5 is not less than or equal to 10
var y = 5;
var z = 5;
console.log(y >= z); //true because 5 is not greater than 5 but its equal to 5
