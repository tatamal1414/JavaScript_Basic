// import { test_name, test_age } from "./test_export.js";
// console.log(test_name,test_age);

import { another_name,another_age,test_export_fn as another_fn,TestExportType as anotherType } from "./test_export.js";
console.log(another_name,another_age);
console.log(another_fn(3,5));
const testExort:anotherType = {
    name:"anotherExport",
    age:24,
}
console.log(testExort);