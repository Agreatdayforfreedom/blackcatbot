import Discord from "discord.js";

export interface ClientExtended {
  commands: Discord.Collection<string, CommandFile>;
  commandArray: Array<any>;

  handleCommands: () => Promise<void>;
}

export type CommandFile = {
  data: Discord.SlashCommandBuilder;
  execute: (...props: any) => Promise<void>;
};
