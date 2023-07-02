let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: packname, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), sendEphemeral: true }}}
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'autolevelup':
case 'levelup':
    isUser = true
     user.autolevelup = isEnable
     break
case 'simsimi':
case 'simi':
case 'chatbot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antitraba = isEnable
      break 
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break     
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'sololatinos':
      case 'sololatino':
      case 'onlylatinos':
      case 'onlylat':
      case 'antiarabe':
      case 'antifake':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.onlyLatinos = isEnable
      break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, `╭┄┄≪ *「 𝑪𝒖𝒓𝒊𝒐𝒔𝒊𝒕𝒚𝑩𝒐𝒕-𝑴𝑫 」* ≫┄┄╮
│⚌⚌⚌⚌⚌⚌⚌⚌⚌
│ *✨ 🅗🅞🅛🅐*
│⚌⚌⚌⚌⚌⚌⚌⚌⚌
╰┄┄≪ *「 𝑪𝒖𝒓𝒊𝒐𝒔𝒊𝒕𝒚𝑩𝒐𝒕-𝑴𝑫 」* ≫┄┄╯

*LISTA DE OPCIONES* 📑

➵ _${usedPrefix}enable *welcome*_
➵ _${usedPrefix}disable *welcome*_
➵ _${usedPrefix}enable *public*_
➵ _${usedPrefix}disable *public*_
➵ _${usedPrefix}enable *antilink*_
➵ _${usedPrefix}disable *antilink*_
➵ _${usedPrefix}enable *antilink2*_
➵ _${usedPrefix}disable *antilink2*_
➵ _${usedPrefix}enable *antifake*_
➵ _${usedPrefix}disable *antifake*_
➵ _${usedPrefix}enable *antitraba*_
➵ _${usedPrefix}disable *antitraba*_
➵ _${usedPrefix}enable *antitoxic*_
➵ _${usedPrefix}disable *antitoxic*_
➵ _${usedPrefix}enable *autolevelup*_
➵ _${usedPrefix}disable *autolevelup*_
➵ _${usedPrefix}enable *simi*_
➵ _${usedPrefix}disable *simi*_
➵ _${usedPrefix}enable *detect*_
➵ _${usedPrefix}disable *detect*_
➵ _${usedPrefix}enable *restrict*_
➵ _${usedPrefix}disable *restrict*_
➵ _${usedPrefix}enable *pconly*_
➵ _${usedPrefix}disable *pconly*_
➵ _${usedPrefix}enable *gconly*_
➵ _${usedPrefix}disable *gconly*_
➵ _${usedPrefix}enable *autoread*_
➵ _${usedPrefix}disable *autoread*_
➵ _${usedPrefix}enable *autoread*_
➵ _${usedPrefix}disable *modoadmin*_
➵ _${usedPrefix}enable *modoadmin*_
➵ _${usedPrefix}disable *modejadibot*_
`, fkontak, m)
throw false
}
conn.reply(m.chat, `📊 *OPCIÓN:* ${type} 
💻 *ESTADO*: ${isEnable ? 'Activado ✅' : 'Desactivado ❌'}
📡 *PARA*: ${isAll ? 'Este bot 🤖' : isUser ? '' : 'Este chat 💬'}`, fkontak,  m)

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler