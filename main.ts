//comparison operator(==),(!=),(>),(<),(===),(!==),(>=),(<=)

let a:string="ali"
let b:string="ali"
console.log(a==b);//true because same value no (upper and lower case)

let c:string="ali"
let d:string="ALI"
console.log(c==d);//false because of case sensitivity(lower and upper case occur)

let e:string="5"
let f:number=5
//@ts-ignore
console.log(e==f);//true because in (==) it check value

let g:string="true"
let h:boolean=true
//@ts-ignore
console.log(g==h);//false because boolean and string can't same 

let i:string="5"
let j:number=5
//@ts-ignore
console.log(i!=j);//false because value is same

let k:number=10
let l:number=5
console.log(k>l)//true because 10 is greater than 5

let m:number=25
let n:number =15
console.log(m<n);//false because 25 is less than 15

let o:string="5"
let p:number=5
//@ts-ignore
console.log(o===p)//false because in (===) it check value and also data type

let q:string="true"
let r:boolean=true
//@ts-ignore
console.log(q===r);//false because both are different data type

let s:number=10
let t:number=5
console.log(s!==t)//true because values are different

let u:string="10"
let v:number=10
//@ts-ignore
console.log(u!==v);//true because data type are different

let w:number=10.5
let x:number=10
console.log(w<=x)//false beacause 10.5 is not less than or equal to 10

let y:number=5
let z:number=5
console.log(y>=z);//true because 5 is not greater than 5 but its equal to 5