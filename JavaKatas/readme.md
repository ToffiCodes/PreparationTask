Who's online?

function whosOnline(friends){
let result = {online:[], offline:[], away:[]};

for (let i=0; i< friends.length; i++){
let user = friends[i];
if (user.status === "online" && user.lastActivity <= 10) {result.online.push(user.username)};
if (user.status === "offline") {result.offline.push(user.username)};
if (user.status=== "online" && user.lastActivity > 10) {result.away.push(user.username)};
}
if (result.online.length === 0) {delete result.online};
if (result.offline.length === 0) {delete result.offline};
if (result.away.length === 0) {delete result.away};
return result;
}

Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
return Math.abs(dadYearsOld - sonYearsOld \* 2);
}

Calculate BMI

function bmi(weight, height) {
const bmiValue = weight / (height \* height);

    if (bmiValue <= 18.5) {
        return "Underweight";
    } else if (bmiValue <= 25.0) {
        return "Normal";
    } else if (bmiValue <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }

}

Mumbling

function accum(s) {
const sArr = s.split("");
let result = "";

    for (let i = 0; i < sArr.length; i++) {
        for (let j = 1; j <= i + 1; j++) {
            if (j === 1) {
                result += sArr[i].toUpperCase();
            } else {
                result += sArr[i].toLowerCase();
            }
        }
        if (i !== sArr.length - 1) {
            result += "-";
        }
    }

    return result;

}

Credit Card Mask

function maskify(cc) {
let visible = cc.slice(-4);
let countNum = '';
for(let i = (cc.length)-4; i>0; i--){
countNum += '#';
} return (countNum+visible);
}
