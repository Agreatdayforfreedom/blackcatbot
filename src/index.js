const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");
const ready = require("./events/ready");
const messageCreate = require("./events/messageCreate");
const interactionHandler = require("./interactionCreate");

// const commandFolders = fs.readdir("./commands");
const dotenv = require("dotenv");
dotenv.config();

const token = process.env.BOT_TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
require("./handleCommands")(client);

client.commands = new Collection();
if (ready.once) {
  client.once(ready.name, (cli) => {
    ready.execute(cli);
  });
}

client.on(messageCreate.name, (message) => {
  if (message.author.bot) return;
  if (message.content === "HAH") {
    return message.channel.send("HAH");
  }
  messageCreate.execute(message);
});
//commandFolders, "./commands"
client.handleCommands();
client.on("interactionCreate", async (interaction) => {
  interactionHandler.execute(interaction, client);
});

client.login(token);
