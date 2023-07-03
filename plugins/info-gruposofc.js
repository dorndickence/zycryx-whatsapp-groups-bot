import fs from "fs";
let handler = async (m, { conn, command }) => {
  let estilo = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}),
    },
    message: {
      orderMessage: {
        itemCount: 2023,
        status: 1,
        surface: 1,
        message: "By Azami ©",
        orderTitle: "Bang",
        thumbnail: fs.readFileSync("./storage/menus/Menu2.jpg"),
        sellerJid: "0@s.whatsapp.net",
      },
    },
  };
  let foto = "./storage/img/grupos.jpg";
  let texto = `🍿 *＊•̩̩͙✩•̩̩͙˚ GRUPOS OFC ˚•̩̩͙✩•̩̩͙˚＊* 🍿

*✧ GRUPO 1*
*✦ ${nn}*`;

  await conn.sendFile(m.chat, foto, "Curiosity.jpg", texto, estilo);
};

handler.command = /^gruposcb|grupos|groups$/i;
handler.exp = 35;
handler.register = true;
export default handler;
