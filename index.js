const { Telegraf } = require('telegraf');



const index = new Telegraf('7696371667:AAH2qjQQOssN3SXCc3kId1UHifWArCd5Ikw')

index.start(ctx => ctx.reply(`
    Hi ${ctx.from.first_name}! 
    List something /help."
`))
index.help(ctx => ctx.reply([1, 2, 3]))
index.on('text', async (ctx) => {
    const userText = ctx.message.text
    ctx.reply('123' + userText)
})
index.launch()
