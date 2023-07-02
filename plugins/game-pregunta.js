let handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `♦︎ *Ejemplo :*\n\n *${usedPrefix + command}* Hoy van llover?`
  m.react('🫣') 
 m.reply(`
*⁉️ 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀𝐒 ⁉️*
  
*𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰:* ${text}
*𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰:* ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
