const express = require('express')
app = express(),
bp = require('body-parser'),
DB_NAME = 'tasks',
port =  8000;

app.use(bp.json());

app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose')(DB_NAME);
require('./server/config/routes')(app)

app.listen(port, ()=>console.log(`Listening on port ${port}`));