



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






class MyClass{
constructor(size,age){
this.size = size;
this.age = age;
}print_size(){
console.log(this.size);
}add_age(x){
this.age += x;
}
}


my_obj = new MyClass(160,53);
my_obj.print_size()
my_obj.add_age(3)



let my_class = {
age:53,
size:160,
print_size(){
console.log(this.size);
},
add_age(x){
this.age += x
}
}

my_class.add_age(4);
my_class.age;



class NewClass{
constructor(size,age){
this.size = size;
this.age = age;
}
print_size(){
console.log(this.size);
}
add_age(x){
this.age += x;
}

}



class NameClass{
constructor(name,age){
this.name = name;
this.age = age;
}
print_name(){
console.log(this.name);
}
add_age(x){
this.age += x;
}
}
my_objs = new NameClass("太郎",44);
my_objs.print_name()
my_objs.add_age(4)

let new_my_class = {
name:"花子",
age:56,
print_name(){
console.log(this.name);
},
add_age(x){
this.age += x
}
}

new_my_class.add_age(6);
new_my_class.age;
new_my_class.name

