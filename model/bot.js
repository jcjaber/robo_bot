process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '5354300836:AAFZTKSNQWIu1mfJoO_StKKt4ypHirrQAvk';
const bot = new TelegramBot(token, {polling: true});
console.log("Robo está ligado!")

module.exports = bot;