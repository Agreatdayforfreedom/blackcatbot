import { Client } from "./utils/client";

import { REST, Routes } from "discord.js";
import command from "./commands/smile";

const guildId = process.env.GUILD_ID;
const clientId = process.env.CLIENT_ID;

export default (client: Client) => {
  client.handleCommands = async () => {
    client.commandArray = [];

    const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN!);
    client.commands.set(command.data.name, command);
    client.commandArray.push(command.data.toJSON());

    (async () => {
      try {
        console.log("Started refreshing bot (/) commands.");

        if (!clientId || !guildId) return console.log("Error reloading bot (/) commands");
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
