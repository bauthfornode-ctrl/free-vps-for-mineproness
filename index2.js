import mineflayer, { createBot } from "mineflayer";

// import {} from "prismarine-viewer";
const setting = {
  version: "1.21.11",
  username: "minepronessBot2",
  auth: "offline",
  host: "mineproness.aternos.me",
  port: 25565,
};

let interval = null
let interval2 = null
function CreateBot() {
  const bot = mineflayer.createBot(setting);
  bot.once("spawn", () => {
    console.log("The player is spawned⛳");
    interval2 = setInterval(() => {
      bot.chat("i like to play minecraft with zenith launcher");
    }, 500000);
    interval = setInterval(
      () => {
        bot.setControlState("jump", true);
        bot.setControlState("jump", false);
      },
      Math.floor(Math.random() * 8000),
    );
  });
  bot.addListener("end", (resson) => {
    console.log("error:", resson);
    clearInterval(interval);
    clearInterval(interval2);
    CreateBot();
  });
  bot.addListener("kicked", (resson) => {
    console.log(resson)
    clearInterval(interval);
    clearInterval(interval2);
    CreateBot();
  });
}

CreateBot()
