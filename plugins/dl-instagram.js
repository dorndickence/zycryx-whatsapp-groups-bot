import instagramGetUrl from 'instagram-url-direct'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `·˚ ༘₊· ͟͟͞͞꒰➳ 𝚄𝚜𝚘 𝚍𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘: *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`
    m.react(rwait)
    m.reply('Calmao 😎\n*Estoy descargando tu post 🔄*\n\nAguarde un momento, por favor')
    const results = (await instagramGetUrl(args[0])).url_list[0]

    conn.sendFile(m.chat, results, 'ig.mp4', `*Instagram Downloader*`, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(Instagram|ig|igdl)$/i
handler.diamond = true
export default handler 