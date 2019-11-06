const authorName = "Faris Ibrahim";
const clientName = prompt("What can we call as?", "Enter your name here");

function logName(name) {
  console.log(`Hello, ${name}\n
    Have a nice day!`);
}

logName(authorName);
logName(clientName);
