import Discord from "discord.js";
import { ClientExtended, CommandFile } from "../types";

export class Client extends Discord.Client implements ClientExtended {
  public commands: Discord.Collection<string, CommandFile>;
  public commandArray: any[];
  constructor(opts: Discord.ClientOptions) {
    super({ ...opts });
    this.commands = new Discord.Collection();
    this.commandArray = [];
  }

  async handleCommands(): Promise<void> {}
}
