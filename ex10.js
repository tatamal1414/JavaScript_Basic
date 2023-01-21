



const myError = Error("This is My Error");




try{
throw myError;
}catch(e){
console.log(e);
}finally{
console.log('後処理');
}



function sum(a,b){
let sum;
sum = a + b;
return sum;
}


try{
console.log(sum(5,4));
console.log(sum(5,4a));
try{
console.log(sum(5,4));
console.log(sum(5,4a));}catch(e){console.error(e);}





try{
console.log(sum(5,4)):
try{
console.log(sum(5,4));
console.log(sum(5,4,1));
}catch(e){
console.log(e);
}
try{
console.log(sum(5,4));
console.log(sum(5,4,a));
}catch(e){
console.log(e);
}
