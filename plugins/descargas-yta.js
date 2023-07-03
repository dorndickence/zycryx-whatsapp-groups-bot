import { youtubedl, youtubedlv2, youtubedlv3 } from "@bochilteam/scraper";
import fetch from "node-fetch";
let handler = async (m, { conn, args }) => {
  if (!args[0])
    throw "*[⚠️] INGRESE UN ENLACE DE YOUTUBE PARA DESCARGAR PARA DESCARGAR EL AUDIO*\n\n💡 EJEMPLO\n*#yta https://youtu.be/85xI8WFMIUY*";
  m.react(rwait);
  await conn.reply(
    m.chat,
    `*Calmao pa estoy bucando tu canción 😎*\n\n*Recuerda colocar bien el nombre de la cancion o el link del video de youtube*`,
    m
  );
  try {
    let q = "128kbps";
    let v = args[0];
    const yt = await youtubedl(v)
      .catch(async (_) => await youtubedlv2(v))
      .catch(async (_) => await youtubedlv3(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size = await yt.audio[q].fileSizeH;
    await conn.sendFile(m.chat, dl_url, ttl + ".mp3", null, m, false, {
      mimetype: "audio/mp4",
    });
  } catch {
    try {
      let lolhuman = await fetch(
        `https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`
      );
      let lolh = await lolhuman.json();
      let n = lolh.result.title || "error";
      m.react(done);
      await conn.sendMessage(
        m.chat,
        {
          audio: { url: lolh.result.link },
          fileName: `${n}.mp3`,
          mimetype: "audio/mp4",
        },
        { quoted: m }
      );
      //await conn.sendFile(m.chat, lolh.result.link, `${n}.mp3`, null, m, false, { mimetype: 'audio/mp4' })
    } catch {}
  }
};
handler.command = /^fgmp3|dlmp3|getaud|yt(a|mp3)$/i;
export default handler;
