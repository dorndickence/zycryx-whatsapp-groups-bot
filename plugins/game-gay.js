let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png'), 
  }), 'gay.png', `*${name} es orgullosamente gay ❤️🏳️‍🌈*`, m)
}

handler.help = ['gay @user']
handler.tags = ['fun']
handler.command = ['gay'] 
handler.register = true 
export default handler
