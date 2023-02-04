const test_name = "ExportName";
const test_age = 23;
function test_export_fn(a, b) {
    return a + b;
}
export { test_name as another_name, test_age as another_age, test_export_fn };
