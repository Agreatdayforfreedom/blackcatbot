module.exports = {
  name: "messageCreate",
  async execute(message) {
    const prefix = "!";
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    require("./bangCommands")(message, command, args);
  },
};
