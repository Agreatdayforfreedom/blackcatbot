const { REST, Routes } = require("discord.js");
const fs = require("fs");

const guildId = "1239587224601890858";
const clientId = "1245118921644834917";

module.exports = (client) => {
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

    const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);
    const command = require(`./commands/smile.js`);
    client.commands.set(command.data.name, command);
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
