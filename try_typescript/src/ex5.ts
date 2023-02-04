type Info3 = {name:string,readonly age:number};
const info3:Info3 = {name:"myname", age:43};
info3.name = "new my name";
// info3.age = 34;
console.log(info3);