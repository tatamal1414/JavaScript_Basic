function sayHello(name:string):string{return `Hello ${name}`}
const sayHello2:(name:string)=>string = (param) => {return `Hello ${param}`}
console.log(sayHello("TypeScript"))
console.log(sayHello2("TypeScript"))