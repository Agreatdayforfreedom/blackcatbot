const { Client, GatewayIntentBits } = require("discord.js");
const ready = require("./events/ready");
const messageCreate = require("./events/messageCreate");

const dotenv = require("dotenv");
dotenv.config();

const token = process.env.BOT_TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

if (ready.once) {
  client.once(ready.name, (cli) => {
    ready.execute(cli);
  });
}

client.on(messageCreate.name, (message) => {
  messageCreate.execute(message);
});

client.login(token);
