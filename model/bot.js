const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});
console.log("Robo está ligado!")

module.exports = bot;
