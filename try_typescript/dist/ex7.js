"use strict";
//Animal型のデータをUser型に代入できる
const tama = {
    special: "cat"
};
//Human型のデータもUser型に代入できる
const mike = {
    name: "Mike"
};
// Animal型でもHuman型でもないデータを代入しようとするとエラーになる
const bob = {
    age: 33
};
console.log(tama);
console.log(mike);
console.log(bob);
