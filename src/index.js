const { Client, GatewayIntentBits } = require("discord.js");

const dotenv = require("dotenv");
dotenv.config();

const token = process.env.BOT_TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", (cli) => {
  console.log(cli.user.displayName + "is online!");
  client.user.setPresence({ activities: [{ type: 4, name: `Fuck leftist` }] });
});

client.on("messageCreate", (message) => {
  const prefix = "!";
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") message.reply("maslaton");
  if (command === "cat") message.reply("Meoow");
  if (command === "server") {
    const serverDate = new Date(message.guild.createdAt).getTime();
    const today = new Date().getTime();
    const differenceInDays = Math.ceil((today - serverDate) / (1000 * 3600 * 24));
    (async () => {
      try {
        const owner = await message.guild.fetchOwner();
        message.channel.send(`The server was created ${differenceInDays} days ago.\nThe owner is **<@${owner.id}>**.`);
      } catch (error) {
        console.error(error);
      }
    })();
    return;
  }
  if (command === "add" && args.length === 2) {
    // Convert the two arguments to numbers
    const num1 = parseFloat(args[0]);
    const num2 = parseFloat(args[1]);

    if (!isNaN(num1) && !isNaN(num2)) {
      const sum = num1 + num2;

      message.reply(`${num1} + ${num2} = **${sum}**.`);
    } else {
      message.reply("Do you know how to sum 2 numbers? Are you stupid or something?");
    }
  }
});

client.login(token);
