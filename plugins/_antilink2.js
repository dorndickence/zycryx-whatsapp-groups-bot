let linkRegex = /https:/i;
export async function before(m, { isAdmin, isBotAdmin, text }) {
  if (m.isBaileys && m.fromMe) return !0;
  if (!m.isGroup) return !1;
  let chat = global.db.data.chats[m.chat];
  let bot = global.db.data.settings[this.user.jid] || {};
  const isGroupLink = linkRegex.exec(m.text);
  if (chat.antiLink2 && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(
        m.chat
      )}`;
      const linkThisGroup2 = `https://www.youtube.com/`;
      const linkThisGroup3 = `https://youtu.be/`;
      if (m.text.includes(linkThisGroup)) return !0;
      if (m.text.includes(linkThisGroup2)) return !0;
      if (m.text.includes(linkThisGroup3)) return !0;
    }
    await m.reply(
      `*❌ [DANGER] ENLACE DETECTADO*\n\n*${await this.getName(
        m.sender
      )} Estimado usuario, se prohibe el envío de enlaces, procederé a eliminarte.*`
    );
    if (!isBotAdmin)
      return m.reply(`*⚠️ [WARN] No soy administrador del grupo.*`);
    if (isBotAdmin && bot.restrict) {
      await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    } else if (!bot.restrict)
      return m.reply(`*⚠️ [WARN] No tengo activado el modo restringido.*`);
  }
  return !0;
}
