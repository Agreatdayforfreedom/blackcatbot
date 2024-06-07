export default async function (message: any) {
  if (message.content === "HAH") {
    return message.channel.send("HAH");
  }
}
