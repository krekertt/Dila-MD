const fs = require('fs'); const path = require('path'); const { readEnv } = require('../lib/database'); const { cmd, commands } = require('../command'); async function sendReplies(conn, from, replies) { for (const [index, reply] of replies.entries()) { setTimeout(async () => { await conn.sendMessage(from, { text: reply }, { quoted: null }); }, index * 800); } } cmd({ on: "body" }, async (conn, mek, m, { from, body, isOwner }) => { const sequenceTrigger = "dilo"; if (body.toLowerCase() === sequenceTrigger.toLowerCase()) { const replies = ['𝗛𝗲𝘆', '𝗜 𝗔𝗠 𝗗𝗜𝗟𝗔', '𝗙𝗥𝗢𝗠 : 𝗠𝗔𝗧𝗔𝗥𝗔', '𝗔𝗚𝗘 : 20', '𝗬𝗢𝗨.....?']; await sendReplies(conn, from, replies); } });