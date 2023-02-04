// const message: string = "Hello, TypeScript";
// console.log(message);
const newMyInfo = { name: "My name", age: 20 };
console.log(newMyInfo);
const noAgeInfo = { name: "No Age name" };
console.log(noAgeInfo);
const readOnlyName = { name: "My name" };
readOnlyName.age = 25;
//実際に使用する場合には型<型>で表現する
const strData = { dataType: "文字列" };
const numData = { dataType: 123 };
function makeArray(param1, param2) {
    return [param1, param2];
}
console.log(makeArray("abc", "xyz"));
console.log(makeArray(123, 456));
export {};
// function add<T>(param1:T,param2:T):T{
//     return param1 + param2
// }
