import fg from "api-dylux";
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from "@bochilteam/scraper";
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0])
    throw `*➳ INGRESE UN LINK DE TIKTOK*\n\n*📌 EJEMPLO:*\n${
      usedPrefix + command
    } https://vm.tiktok.com/ZMYG92bUh/`;
  if (!args[0].match(/tiktok/gi)) throw `❎ verifica que el link sea de tiktok`;
  m.react(rwait);
  m.reply(
    "Calma ✋🥸🤚\n\n*Estoy descargando tu video de tiktok 🔄*\n\n*Aguarde un momento, por favor*"
  );
  try {
    let p = await fg.tiktok(args[0]);
    let te = `╭━─━─━─≪TIKTOK≫─━─━─━╮
│·˚ ༘₊· ͟͟͞͞꒰➳ *Nombre:* ${p.nickname}
│·˚ ༘₊· ͟͟͞͞꒰➳ *Username:* ${p.unique_id}
│·˚ ༘₊· ͟͟͞͞꒰➳ *Duración:* ${p.duration}
│·˚ ༘₊· ͟͟͞͞꒰➳ *Descripción:* ${p.description}
╰━─━─━─≪≫─━─━─━╯`;
    conn.sendFile(m.chat, p.play, "tiktok.mp4", te, m);
    m.react(done);
  } catch {
    try {
      const {
        author: { nickname },
        video,
        description,
      } = await tiktokdl(args[0])
        .catch(async (_) => await tiktokdlv2(args[0]))
        .catch(async (_) => await tiktokdlv3(args[0]));
      const url =
        video.no_watermark2 ||
        video.no_watermark ||
        "https://tikcdn.net" + video.no_watermark_raw ||
        video.no_watermark_hd;
      if (!url) throw "❎ Error al descargar el video";
      conn.sendFile(
        m.chat,
        url,
        "fb.mp4",
        `╭━─━─━─≪TIKTOK DL-2*≫─━─━─━╮*\n│·˚ ༘₊· ͟͟͞͞꒰➳ *Nickname:* ${nickname} ${
          description ? `\n│·˚ ༘₊· ͟͟͞͞꒰➳ *Descripción:* ${description}` : ""
        }\n╰━─━─━─≪≫─━─━─━╯`,
        m
      );
      m.react(done);
    } catch {
      m.reply(`❎ Error al descargar el video`);
    }
  }
};
handler.help = ["tiktok"];
handler.tags = ["dl"];
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i;
handler.diamond = true;

export default handler;
