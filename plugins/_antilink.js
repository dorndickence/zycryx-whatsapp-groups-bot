let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return !0;
  if (!m.isGroup) return !1;
  let chat = global.db.data.chats[m.chat];
  let delet = m.key.participant;
  let bang = m.key.id;
  let bot = global.db.data.settings[this.user.jid] || {};
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo))
    return m.reply(
      `*[❕] Los enlaces no están prohibidos para administradores*`
    );
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(
        m.chat
      )}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await m.reply(
      `*[❌] ENLACE DETECTADO*\n\n*${await this.getName(
        m.sender
      )} Estimado usuario, se prohibe el envío de enlaces, procederé a eliminarte.*`
    );
    if (!isBotAdmin) return m.reply(`*[⚠️] No soy administrador del grupo.*`);
    if (isBotAdmin) {
      await conn.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: bang,
          participant: delet,
        },
      });
      await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    } else if (!bot.restrict)
      return m.reply(`*[⚠️] No tengo activado el modo restringido.*`);
  }
  return !0;
}
