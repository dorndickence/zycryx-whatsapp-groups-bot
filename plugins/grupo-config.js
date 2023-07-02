let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { 
        'abrir': 'not_announcement',
        'cerrar': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*¡⚠️ FORMATO ERRÓNEO ⚠️!*\n\n💡 EJEMPLO:
  *○ 🔓 ${usedPrefix + command} abrir*
  *○ 🔒 ${usedPrefix + command} cerrar*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *abrir / cerrar*']
handler.tags = ['group']
handler.command = /^(grupo)$/i

handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler

