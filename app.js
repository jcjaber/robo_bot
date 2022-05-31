const MessageService = require('./model/services/messageService');
const ResponseService = require('./model/services/responseService');

const bot = require('./model/bot');

const msgService = new MessageService();
const respService = new ResponseService(bot);

bot.on('message', (msg) => {

  const userMessage = msgService.getMessage(msg);

  if(userMessage == "Greeting founded") {
    respService.sendHelloResponse(msg);
  }
  
});
