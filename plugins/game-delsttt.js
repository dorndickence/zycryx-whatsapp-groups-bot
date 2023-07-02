let handler = async (m, { conn, text }) => {
	let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.reply(m.chat,`*⚠️ NO ESTAS EN UNA PARTIDA DE TICTACTOE*`, m)
delete conn.game[room.id]
await conn.reply(m.chat, `🎮 *${wm}* 🎮\n\nSe reinició la sesión de *tictactoe*`, m)
}
handler.help = ['delttt']
handler.tags = ['game']
handler.command = ['delttc', 'delttt', 'delxo']
handler.register = true 
handler.group = true
export default handler
