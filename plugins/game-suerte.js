let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://media.istockphoto.com/id/460171067/es/foto/sacudir-el-bot%C3%B3n.jpg?s=612x612&w=0&k=20&c=TsX1krTyz8oyRNhpcbri4dguh3WyAZwYOwMu2T68S2A='
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
// 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
let textos = `\`\`\`CARA O CRUZ\n\nPuedes elegir la opción usando los comandos\n\n${usedPrefix + command} cara\n${usedPrefix + command} cruz\n\n*By ${wm}\`\`\``
if (!args[0]) return await conn.sendMessage(m.chat, { image: { url: pp }, caption: textos, quoted: fkontak })
//conn.sendHydrated(m.chat, '*Cara o Cruz*\n\nPuedes eleguir la opción con los botones o usa los comandos:\n.suerte cruz\n.suerte cara\n\n usar en minúsculas',wm, pp, null, null, null, null, [['Cara', `${usedPrefix + command} cara`],['Cruz', `${usedPrefix + command} cruz`]], m)
var astro = Math.random()
if (astro < 0.50) {//34
    astro = 'cara'
} else if (astro > 0.50){//34
astro = 'cruz' 
}
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
global.db.data.users[m.sender].exp += 1000
//let money0 = global.db.data.users[m.sender].money += 2
m.reply(`*╭「░⃟⃜🍭ꪳ۫₎۬〬HA GANADO ░⃟⃜ 🎉」*\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados: ${astro}\n├❥ᰰຼ Puntos: (±)1000 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
global.db.data.users[m.sender].exp += 1300
//let money0 = global.db.data.users[m.sender].money += 2
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬HA GANADO ░⃟⃜ 🎉」\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados: ${astro}\n├❥ᰰຼ Puntos: (±)1300 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//let money0 = global.db.data.users[m.sender].money -= 300
global.db.data.users[m.sender].exp -= 300
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬HA PERDIDO ░⃟⃜ 🤡」\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados: ${astro}\n├❥ᰰຼ Perdida: (±)300 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
}
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//let money0 = global.db.data.users[m.sender].money += 3
global.db.data.users[m.sender].exp += 1400
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬HA GANADO ░⃟⃜ 🎉」\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados: ${astro}\n├❥ᰰຼ Puntos: (±)1400 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
//let name = conn.getName(who) 
global.db.data.users[m.sender].exp -= 150
//let money0 = global.db.data.users[m.sender].money -= 300
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬HA PERDIDO ░⃟⃜ 🤡」\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados: ${astro}\n├❥ᰰຼ Perdida: (±)150 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
}
}else if (text == 'cruz') {
if (astro == 'cruz') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
global.db.data.users[m.sender].exp += 1500
//let money0 = global.db.data.users[m.sender].money += 100
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬HA GANADO ░⃟⃜ 🎉」\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados: ${astro}\n├❥ᰰຼ Puntos: (±)1500 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
global.db.data.users[m.sender].exp -= 150
//let money0 = global.db.data.users[m.sender].money -= 300
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬HA PERDIDO ░⃟⃜ 🤡」\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados; ${astro}\n├❥ᰰຼ Perdida: (±)150 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
}} else if (text == 'cruz') {
if (astro == 'cruz') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
global.db.data.users[m.sender].exp += 1000
//let money0 = global.db.data.users[m.sender].money += 100
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬HA GANADO ░⃟⃜ 🎉」\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados: ${astro}\n├❥ᰰຼ Puntos: (±)1000 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who)  
global.db.data.users[m.sender].exp -= 300
//let money0 = global.db.data.users[m.sender].money -= 400
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬HA PERDIDO ░⃟⃜ 🤡」\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados: ${astro}\n├❥ᰰຼ Perdida: (±)300 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
}
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
global.db.data.users[m.sender].exp += 1000
//let money0 = global.db.data.users[m.sender].money += 300
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬HA GANADO ░⃟⃜ 🎉」\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados: ${astro}\n├❥ᰰຼ Puntos: (±)1000 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
global.db.data.users[m.sender].exp -= 300
//let money0 = global.db.data.users[m.sender].money -= 300
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬HA PERDIDO ░⃟⃜ 🤡」\n├❥ᰰຼ Elegiste: ${text}\n├❥ᰰຼ Resultados: ${astro}\n├❥ᰰຼ Perdida: (±)300 XP\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
}
global.db.data.users[m.sender].wait = new Date * 1
}}
handler.help = ['suerte']
handler.tags = ['games']
handler.command = /^(suerte)$/i
handler.register = true 
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
