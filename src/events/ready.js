module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`${client.user.displayName} is online!`);

    const activities = ["Zzzzz", "Meoww", "Fucking Leftist"];

    setInterval(() => {
      const status = activities[Math.floor(Math.random() * activities.length)];
      client.user.setPresence({ activities: [{ type: 4, name: `${status}` }] });
    }, 10000);
  },
};
