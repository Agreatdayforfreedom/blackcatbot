import { Message } from "discord.js";
import bangCommands from "./bangCommands";
import respondRawMessage from "./respondRawMessage";
export default {
  name: "messageCreate",
  async execute(message: any) {
    const prefix = "!";
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();

      bangCommands(message, command, args);
    } else {
      respondRawMessage(message);
    }
  },
};
