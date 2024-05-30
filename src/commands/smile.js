const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("smile").setDescription("Replies with a joke!"),
  async execute(interaction) {
    await interaction.reply(
      `Why was Donkey Kong banned from the Super Smash Bros. competition?\nBecause he kept "monkeying" around with the controllers!`
    );
  },
};
