import { Client, Guild, Member, Message, TextChannel } from "eris";
import { FailureAction } from "types/config";
import Bot from "@/util/bot";

export interface Params {
  client: Client;
  args: string[];
  message: Message;
  author: Member;
  guild: Guild;
  channel: TextChannel;
  bot: Bot;
}

interface BotSettings {
  enabled: boolean;
  servers: string[];
  successRoles: string[];
  failureAction: FailureAction;
  logChannel?: {
    id: string;
    channel: TextChannel;
  };
  backup?: {
    auto: boolean;
    interval: number;
    path: string;
  };
}
