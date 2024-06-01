import Discord, { GatewayIntentBits } from "discord.js";
import { Client } from "./utils/client";
import fs from "fs";
import ready from "./events/ready";
import messageCreate from "./events/messageCreate";
import interactionHandler from "./interactionCreate";
import handleCommands from "./handleCommands";

// const commandFolders = fs.readdir("./commands");
import dotenv from "dotenv";
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
handleCommands(client);
//commandFolders, "./commands"
client.handleCommands();
client.on("interactionCreate", async (interaction: Discord.Interaction) => {
  interactionHandler.execute(interaction, client);
});

client.login(token);
