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
