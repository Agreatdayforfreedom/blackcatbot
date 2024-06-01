import { Interaction, Message, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("smile").setDescription("Replies with a joke!"),
  async execute(message: Message) {
    await message.reply(
      `Why was Donkey Kong banned from the Super Smash Bros. competition?\nBecause he kept "monkeying" around with the controllers!`
    );
  },
};
