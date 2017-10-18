const express = require('express');
const bodyParser = require('body-parser');
const messagesCtrl = require(__dirname + '/controllers/messages_controller');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))

const messagesBaseURL = '/api/messages'
app.get(messagesBaseURL, messagesCtrl.read);
app.post(messagesBaseURL, messagesCtrl.create);
app.put('/api/messages/:id/:text', messagesCtrl.update);
app.delete(messagesBaseURL, messagesCtrl.delete);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
