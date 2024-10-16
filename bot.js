const { Telegraf, Markup } = require("telegraf");
const axios = require("axios");
const bot = new Telegraf("6662828137:AAHcockjh6lSx3om9iYB8yaXmfmHF_Nw7Dw");

bot.on('text', (ctx) => {
    const userName = ctx.from.first_name || "Foydalanuvchi";

    if (userName.toLowerCase() === 'ibrohimov') {
        ctx.reply('ibrohimov zo\'r', { reply_to_message_id: ctx.message.message_id });
    }
    else {
        ctx.reply(`${userName} kot`, { reply_to_message_id: ctx.message.message_id });
    }
});




bot.launch();