import express from "express";
import predictions from "../utils/numerologyPredictions.js";
import planets from "../utils/numerologyPlanets.js";
import planetDescriptions from "../utils/planetDescriptions.js";
import lifePathDescriptions from "../utils/lifePathDescriptions.js";

const router = express.Router();

function reduceNumber(num){
while(num>9){
num=num.toString().split("").reduce((a,b)=>a+Number(b),0);
}
return num;
}

function calculateLifePath(dob){
const digits = dob.replaceAll("-","").split("").map(Number);
let sum = digits.reduce((a,b)=>a+b,0);
return reduceNumber(sum);
}

// Destiny Number
function calculateDestiny(name){

const values = {
A:1,J:1,S:1,
B:2,K:2,T:2,
C:3,L:3,U:3,
D:4,M:4,V:4,
E:5,N:5,W:5,
F:6,O:6,X:6,
G:7,P:7,Y:7,
H:8,Q:8,Z:8,
I:9,R:9
};

let sum = 0;

name = name.toUpperCase().replace(/\s/g,"");

for(let char of name){
if(values[char]) sum += values[char];
}

return reduceNumber(sum);
}

router.post("/calculate",(req,res)=>{

const {name,dob} = req.body;

const lifePath = calculateLifePath(dob);
const destiny = calculateDestiny(name);


console.log("Destiny Planet:", planets[destiny]);
console.log("Destiny Info:", planetDescriptions[planets[destiny]]);
const prediction = predictions[lifePath] || {};
res.json({

name,
dob,

lifePath,
lifePlanet: planets[lifePath],
lifePathInfo: lifePathDescriptions[lifePath],

destiny,
destinyPlanet: planets[destiny],
destinyPlanetInfo: planetDescriptions[planets[destiny]],

prediction

});

});

export default router;