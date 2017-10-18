let messages = [];
let id = 0;

module.exports = {

  create:(req, res, next) => {
      const {text, time} = req.body;
      messages.push({id, text, time});
      id += 1;
      res.json(messages)
    },

  read: (req, res, next) => {
    console.log('messages');
      res.json(messages);
    },

  update: (req, res, next) => {
    console.log(req.params);
      const updateID = req.params.id;
       let index = messages.findIndex(messages => messages.id == updateID );

       messages[index] = {
         id: messages[index].id,
         text: req.params.text || messages[index].text,
         time: messages[index].time
       };
       res.json(messages);
     },

  delete: (req, res, next) => {
       const deleteID = req.params.id;
       messageIndex = messages.findIndex(messages => messages.id == updateID);
       messages.splice(messageindex, 1);
        res.json(messages);
    }
  };
