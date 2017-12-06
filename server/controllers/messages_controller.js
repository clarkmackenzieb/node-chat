let messages = [];
let id = 0;

module.exports = {

  create:(req, res, next) => {
     const { text, time } = req.body;
     messages.push({id, text, time})
     id++;
     res.status(200).json(messages);
    },

  read: (req, res, next) => {
    console.log('messages');
      res.json(messages);
    },

  
  update: (req, res, next) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id === updateID);
    let message = messages[messageIndex];

    messages[message] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
      res.status(200).json(messages)
  },

  delete: (req, res, next) => {
       const deleteID = req.params.id;
       messageIndex = messages.findIndex(message => message.id === deleteID)
       messages.splice(messageIndex, 1)
       res.status(200).json(messages)
    }
  };
