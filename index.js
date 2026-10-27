require("dotenv").config();

const { App } = require("@slack/bolt");

const responses = [
  "It is certain.",
  "Without a doubt.",
  "Yes, definitely.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "My sources say no.",
  "Very doubtful.",
  "Outlook not so good.",
  "Possibly.",
  "Don't ask me.",
  "If you think so...",
  "Yes, you should.",
  "Reply hazy. Come back when I have my glasses.",
  "I'm not sure, but I'll tell you what I think.",
  "Really hungry for some mac and cheese right now.",
  "我不知道",
  "idk bro why u askin me",
  "go ask chatgpt, i've heard you love her SOOOOO much anyway",
  "Love yourself. It doesn't matter what the answer is, just love yourself.",
  "Ask again later, I'm busy.",
  "Error! Try again.",
  "Do your homework first.",
  "Du you're inglish home work before,",
  "Maybe once my phone charges, I'll tell you",
  "Beep boop, I am a robot.",
  "Pong! ... wait wrong command",
  "Congrats! You have won a free trip to the Bahamas! Just kidding, I can't give you that.",
  "youtube.com/watch?v=dQw4w9WgXcQ",
  "crazyyyy question, but do you like pineapple on pizza?",
  "wowie zowie... uhh i dunno what to say about that one",
  "you're disgusting. leave!",
  "THIS?? I'm a 2,500 YEAR OLD MAGIC BALL, AND YOU DECIDE TO ASK ME ABOUT THIS??? I hate you. Also the answer is yes",
  "Yeas",
  "Only if you promise to be nice to me",
  "SHUT UP I'M TRYING TO SLEEP HERE",
  "Oh how it feels to be an 8 ball. I am so sad I am so small. How it feels to be an 8 ball, no one will ever hear my poem.",
  "participate in the 8ball bot survey at https://forms.gle/7g6k1Z5v9y3Q2J4F7",
  "I wish I was a little bit taller, I wish I was a ball. Just kidding, I already am!",
  "To win at billards, do NOT sink me into a pocket. To win at life, keep me in YOUR pocket.",
];

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.command("/8ball", async ({ command, ack, respond }) => {
  await ack();

  if (!command.text.trim()) {
    await respond("Ask me a question! Example: /8ball Will I ace my test?");
    return;
  }

  const answer = responses[Math.floor(Math.random() * responses.length)];

  await respond({
    response_type: "in_channel",
    text: `🎱 The Magic 8Ball says: ${answer}`,
  });
});

(async () => {
  await app.start();
  console.log("🎱 8Ball Bot is running!");
})();
