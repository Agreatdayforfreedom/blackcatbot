import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("smile").setDescription("Replies with a joke!"),
  async execute(interaction: any) {
    await interaction.reply(
      `Why was Donkey Kong banned from the Super Smash Bros. competition?\nBecause he kept "monkeying" around with the controllers!`
    );
  },
};
