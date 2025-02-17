const { Telegraf } = require('telegraf');



const bot = new Telegraf('7696371667:AAH2qjQQOssN3SXCc3kId1UHifWArCd5Ikw')

bot.start( ctx => ctx.reply(`
    Hi ${ctx.from.first_name}! 
    List something /help."
`))
bot.help( ctx => ctx.reply([1, 2, 3]))
bot.on('text', async (ctx) => {
    const userText = ctx.message.text
    ctx.reply('123' + userText)
})
bot.launch()
