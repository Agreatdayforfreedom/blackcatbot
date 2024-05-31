import Discord from "discord.js";

export interface ClientExtended {
  commands: Discord.Collection<string, Discord.CollectedInteraction<Discord.CacheType>>;
  commandArray: Array<any>;

  handleCommands: () => Promise<void>;
}
