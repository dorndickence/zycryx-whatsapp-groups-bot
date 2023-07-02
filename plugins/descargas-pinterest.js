import { pinterest } from '@bochilteam/scraper'
//let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*⚠️ INGRESE UN TEXTO*\n\n💡 EJEMPLO\n*${usedPrefix + command} Minecraft*`
  m.react(rwait)
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
┅━━═❏ *PINTEREST* ❏═━━┅
💻 *Resultado de:* ${text}
🔎 *Buscado en:* Pinterest
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i

export default handler
