export default (message: any, command: any, args: any) => {
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
    const num1 = parseFloat(args[0]);
    const num2 = parseFloat(args[1]);

    if (!isNaN(num1) && !isNaN(num2)) {
      const sum = num1 + num2;

      message.reply(`${num1} + ${num2} = **${sum}**.`);
    } else {
      message.reply("Do you know how to sum 2 numbers? Are you stupid or something?");
    }
  }
};
