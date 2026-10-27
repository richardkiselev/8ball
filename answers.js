const responses = [
  "It is certain.",
  "Without a doubt.",
  "Yes, definitely.",
  "Signs point to yes.",
  "Most likely.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Cannot predict now.",
  "Don't count on it.",
  "My sources say no.",
  "Very doubtful.",
  "Outlook not so good.",
];

function getAnswer() {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
}

console.log(getAnswer());
