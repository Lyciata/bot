import { Event } from "@/structures";
import { Member } from "eris";
import Bot from "@/util/bot";

export default class MemberLeaveEvent extends Event {
  name = "guildMemberRemove";

  async execute(member: Member, bot: Bot) {
    if (bot.master.queue.has(`${member.guild.id}/${member.id}`)) {
      bot.master.queue.delete(`${member.guild.id}/${member.id}`);

      bot.settings.logChannel?.channel?.createMessage(
        bot.master.strings.bot.info["USER_LEFT_SERVER"]
          .replaceAll("{0}", member.username)
          .replaceAll("{1}", member.id)
      );
    }

    const userIndex: number = bot.master.usedAccounts.findIndex((a) =>
      a.includes(`${member.id}/`)
    );

    if (userIndex !== -1) {
      bot.master.usedAccounts = bot.master.usedAccounts.filter(
        (a: string, i: number) => i !== userIndex
      );
    }
  }
}
