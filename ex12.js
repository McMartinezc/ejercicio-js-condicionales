let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here

machineResult = machineActive ? "ON" : "OFF";
pwdResult = machineActive && pwd === "cheese" ? "Login successful" : "Login unsuccessful";
console.log(machineResult, pwdResult);
