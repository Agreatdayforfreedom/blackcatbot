import { Message } from "discord.js";
import bangCommands from "./bangCommands";
export default {
  name: "messageCreate",
  async execute(message: any) {
    const prefix = "!";
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    bangCommands(message, command, args);
  },
};
