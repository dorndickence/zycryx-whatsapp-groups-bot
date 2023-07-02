import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `✳️ Todavía estás en el juego para reiniciar la session escribe : *${usedPrefix}delttt*`
    if (!text) throw `*⚠️ Ponga un nombre a la sala*`
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('✅ Compañero encontrado')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❎',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬${wm} ░⃟⃜🐾⁩」
├❥ᰰຼ Esperando a @${room.game.currentTurn.split('@')[0]} como primer jugador
╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🙀*️⃟ᬽ፝֟━*
├❥ᰰຼ ${arr.slice(0, 3).join('')}
├❥ᰰຼ ${arr.slice(3, 6).join('')}
├❥ᰰຼ ${arr.slice(6).join('')}
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*        

╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬〬${cb} ░⃟⃜🐾⁩」
├❥ᰰຼ *SALA ID* ${room.id}
├❥ᰰຼ *⚠️ REGLAS*
├❥ᰰຼ Haz 3 filas de símbolos verticales, horizontales o diagonales para ganar
├❥ᰰຼ Escribe *surrender* para salir del juego y ser declarado derrotado.
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`.trim()
        if (room.x !== room.o) await conn.reply(room.x, str, m, {
            mentions: conn.parseMention(str)
        })
        await conn.reply(room.o, str, m, {
            mentions: conn.parseMention(str)
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        
     conn.reply(m.chat, `╭─╮─᤻─᳒─᤻᳒「░⃟⃜⏳ꪳ۫₎۬〬${cb} ░⃟⃜⏳」\n├❥ᰰຼ *Esperando pareja*\n├❥ᰰຼ Escriba el siguiente comando para aceptar\n├❥ᰰຼ *${usedPrefix + command} ${text}*\n├❥ᰰຼ 🎁 Recompensa: *4999 XP*\n*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`, m, {
            mentions: conn.parseMention(text)
        })
        
   conn.game[room.id] = room
    }
    
}

handler.help = ['tictactoe <nombre Sala>']
handler.tags = ['game']
handler.command = ['tictactoe', 'ttc', 'ttt', 'xo']
handler.register = true 
export default handler
