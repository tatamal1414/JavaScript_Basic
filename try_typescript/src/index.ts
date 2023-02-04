// const message: string = "Hello, TypeScript";
// console.log(message);

import { type } from "os";

// const myInfo:object = {name:"My name",age:20};
// console.log(myInfo);

// const myInfo2:{name:string,age:number} = {name:"My name",age:20};
// console.log(myInfo2);

type myInfo = {name:string,age:number};
const newMyInfo:myInfo = {name:"My name",age:20};
console.log(newMyInfo);

type myInfo2 = {name:string,age?:number};
const noAgeInfo:myInfo2 = {name:"No Age name"};
console.log(noAgeInfo)

type myInfo3 = {readonly name:string, age?:number};
const readOnlyName: myInfo3 = {name:"My name"};
readOnlyName.age = 25;
// readOnlyName.name = "My New Name";

//ジェネリクス（型引数）-----------------------------------

type Data<T> = {
    dataType:T
}
//実際に使用する場合には型<型>で表現する
const strData:Data<string> = {dataType:"文字列"}
const numData:Data<number> = {dataType:123}

function makeArray<T>(param1:T,param2:T):T[]{
    return [param1,param2]
}
console.log(makeArray<string>("abc","xyz"))
console.log(makeArray<number>(123,456))

// function add<T>(param1:T,param2:T):T{
//     return param1 + param2
// }

