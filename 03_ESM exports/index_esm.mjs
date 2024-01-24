// método 1
import add1 from "./math_1-esm.mjs";
console.log("patron 1: ",add1(7,9));

// método 2
import add2 from "./math_2-esm.mjs"
console.log("patron 2: ", add2(23,2));

// método 3 - importando un objeto
import math3 from "./math_3-esm.mjs"
console.log("patron 3-1: ", math3.add3(23,2));
console.log("patron 3-2: ", math3.subs3(23,2));

// método 3.5 - importando un objeto
const {add3, subs3} = math3;
console.log("patron 3.5-1: ", add3(23,2));
console.log("patron 3.5-2: ", subs3(23,2));

// método 4 
import * as math4 from "./math_4-esm.mjs"

const {add4, subs4 } = math4
console.log("patron 4-1: ", add4(23,2));
console.log("patron 4-2: ", subs4(23,2));

// método 5
import {add5, subs5 } from "./math_5-esm.mjs"

console.log("patron 5-1: ", add5(23,2));
console.log("patron 5-2: ", subs5(23,2));