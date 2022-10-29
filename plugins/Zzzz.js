// JANGAN TERLALU TOLOL ANAK MUDA

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `Hello kak ${ye} Lagi Nyari Sc Ya? 

*CARI SC YA DEK?*

📮 GROUP OFFICIAL :
https://chat.whatsapp.com/CxJShadfxYqCVAHHxdHSiy`

📮 GITHUB :
github.com/gilzzbotz

📮 JANGAN LUPA MAMPIR :
'https://lynk.id/gilzzx'

*NB:SC DI DESK GROUP!*

await conn.sendBut(m.chat, esce, '📮 DONT FORGET TO FOLLOW MY ACCOUNT', 'Thanks', '.menu', m) 
}
handler.help = ['sc', 'source code']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
