 const test_name = "ExportName";
 const test_age = 23;

 function test_export_fn(a:number,b:number):number{
    return a + b;
}
//外部に公開するオブジェクト型
type TestExportType={
    name:string,
    age:number
}

export {test_name as another_name, test_age as another_age, test_export_fn, TestExportType};
