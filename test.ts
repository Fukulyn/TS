let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it

let flag: boolean;
let yes = true;
let no = false;

let a: number;
let b = 0;
let c: number = 123.456;
let big: bigint = 100n;

let s: string;
let empty = "";
let abc = 'abc';

let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);

enum ContractStatus {
  Permanent,
  Temp,
  Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice
}

console.log(ContractStatus[employeeStatus]);