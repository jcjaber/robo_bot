class MessageService {
  getMessage (msg) {
    const greetings = [ "oi", "ola", "e ae"];
    
    const userMessage = msg.text.toString().toLowerCase();
    
    const foundGreeting = greetings.find(e => e === userMessage);

    if (userMessage.indexOf(foundGreeting) === 0) {
      return "Greeting founded";
    }
  
    return "Greeting NOT founded";
  }
}

module.exports = MessageService; 
