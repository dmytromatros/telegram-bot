const { Telegraf } = require('telegraf');
const { Markup } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf('6181916624:AAHynGwfvp5bD-ToG-45-UC0GW6IjOqeYFA');
bot.start((ctx) => ctx.reply('Hi, it is Dima`s Bot!'
    // ,
    // {
    //     reply_markup: {
    //         keyboard: [
    //             [{ text: 'text', web_app: { url: 'https://dmytromatros.github.io/telegram-bot/' } }]
    //         ]
    //     }
    // }
));

bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));