class ResponseService {
  constructor(bot) {
    this._bot = bot;
   }

  sendHelloResponse (msg) {
    this._bot.sendMessage(msg.from.id, "Olá, " + msg.from.first_name + ". Como você está hoje?");
  }
}

module.exports = ResponseService; 
