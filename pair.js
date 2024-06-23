const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Maher_Zubair = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Maher_Zubair.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
            Pair_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: "" + b64data });

               let SIGMA_MD_TEXT = `
*_Pair Code Connected by shanuwa md Made With 🖤_*
❃_____________________________________❃
╔════⛤
╠ *『 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 』*
╠ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝ 
╔════⛤
╠ *『 ▿▵▿ Visit For Help ▵▿▵ 』*
╠ *✦ Youtube:* https://www.youtube.com/@SL_Shanuwa
╠ *✦ Owner:* SHANUWA
╠ *✦ Repo:* https://github.com/mrshameen/SHANUWA-MD
╠ *✦ WaGroup:* https://chat.whatsapp.com/HjDrEpRyT7AKGiI7sy4sCp
╠ *✦ WaChannel:* https://whatsapp.com/channel/0029VaiLZwyL7UVO1s7VEO2I
╠ *✦ 𝑺𝑯𝑨𝑵𝑼𝑾𝑨 𝑴𝑫:*
╚══════════════════════╝ 
𝑺𝑯𝑨𝑵𝑼𝑾𝑨 𝑴𝑫
❃_____________________________________❃
ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱʜᴀɴᴜᴡᴀ`
 await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id,{text:SIGMA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Maher_Zubair.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
