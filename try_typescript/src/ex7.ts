type Animal = {
    special:string;
}
type Human = {
    name:string;
}
type Age = {
    age:number;
}
type User = Animal | Human | Age
//Animal型のデータをUser型に代入できる
const tama:User = {
    special:"cat"
}
//Human型のデータもUser型に代入できる
const mike:User = {
    name:"Mike"
}
// Animal型でもHuman型でもないデータを代入しようとするとエラーになる
const bob:User = {
    age:33
}
console.log(tama)
console.log(mike)
console.log(bob)