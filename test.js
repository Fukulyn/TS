var x; //* Explicitly declares x as a number type
var y = 1; //* Implicitly declares y as a number type
var z; //* Declares z without initializing it
var flag;
var yes = true;
var no = false;
var a;
var b = 0;
var c = 123.456;
var big = 100n;
var s;
var empty = "";
var abc = 'abc';
var firstName = "Mateo";
var sentence = "My name is ".concat(firstName, ".\n    I am new to TypeScript.");
console.log(sentence);
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
