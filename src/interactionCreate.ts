import Discord from "discord.js";
import { Client } from "./utils/client";

export default {
  name: "interactionCreate",
  async execute(interaction: Discord.Interaction, client: Client) {
    // If the interaction isn't a command, return
    if (!interaction.isCommand()) return;
    // Get the command from the collection
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
      await command.execute(interaction);
    } catch (error) {
      console.log(error);
      await interaction.reply({
        content: "There was an error while executing this command.",
        ephemeral: true,
      });
    }
  },
};
