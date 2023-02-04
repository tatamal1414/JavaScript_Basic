// const message: string = "Hello, TypeScript";
// console.log(message);

// const myInfo:object = {name:"My name",age:20};
// console.log(myInfo);

// const myInfo2:{name:string,age:number} = {name:"My name",age:20};
// console.log(myInfo2);

type myInfo = {name:string,age:number};
const newMyInfo:myInfo = {name:"My name",age:20};
console.log(newMyInfo);

type myInfo2 = {name:string,age?:number};