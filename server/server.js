const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;


const app = express();
app.use(bodyParser.json());

require('./routes/users')(app);

app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
