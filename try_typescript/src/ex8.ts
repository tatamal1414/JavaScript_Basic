function newArray<T>(param1:T,param2:T,param3:T):T[]{
    return[param1,param2,param3]
}
console.log(newArray<string>("a","b","c"))
console.log(newArray<number>(1,2,3))
console.log(newArray<any>("a",3,"n"))