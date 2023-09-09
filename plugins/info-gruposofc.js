const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴 OLYMPUS 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙸𝚅𝙸𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰𝙳 :D*

*➤ Comunidades oficiales de Zyx Bot:*
*OLYMPUS.-* https://chat.whatsapp.com/Ft5oVy3kCRXDjFqIphKQi4
*SYSTEM HACK.-* https://chat.whatsapp.com/DZqcdcIfIUs4v9raFOPH5M

*➤ Grupos de soporte para Zyx Bot:*
*OL 🌞 | BOT LABS 🔬.-* https://chat.whatsapp.com/H6LQ5C2WBwPA0PfD3lqIKN
*ZYCRYX | BOT LABS 🔬.-* https://chat.whatsapp.com/CsRv1irW7cX6x8J1xja4jm

*➤ Grupos oficiales de Zyx Bot:*
*ஜ 𝙼𝙰𝙶𝙽𝚄𝙼 𝙲𝙷𝙰𝙾𝚂 ஜ.-* https://chat.whatsapp.com/LNEGPa9WQ650Mlt5yKOAYX
*๖ۣۜƧys†eᴍs & Ⱨ₳₵₭ 🏴‍☠️ᴼᶠᶠ.-* https://chat.whatsapp.com/FlBQfL7UpkWIULMBe8waP4`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/ZycryxCreative/zycryx-whatsapp-groups-bot`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/ZycryxCreative/zycryx-whatsapp-groups-bot',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
