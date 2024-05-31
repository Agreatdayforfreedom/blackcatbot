import { Client } from "./utils/client";

import { REST, Routes } from "discord.js";
// const fs = require("fs");
import command from "./commands/smile";

const guildId = "";
const clientId = "";

export default (client: Client) => {
  client.handleCommands = async () => {
    client.commandArray = [];
    // for (folder of commandFolders) {
    //   const commandFiles = fs.readdirSync(`${path}/${folder}`).filter((file) => file.endsWith(".js"));
    //   for (file of commandFiles) {
    //     const command = require(`./commands/${file}`);
    //     client.commands.set(command.data.name, command);
    //     client.commandArray.push(command.data.toJSON());
    //   }
    // }

    const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN!);
    client.commands.set(command.data.name, command as any);
    client.commandArray.push(command.data.toJSON());

    (async () => {
      try {
        console.log("Started refreshing bot (/) commands.");

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
          body: client.commandArray,
        });

        console.log("Successfully reloaded bot (/) commands.");
      } catch (error) {
        console.error(error);
      }
    })();
  };
};
