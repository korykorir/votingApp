const express = require('express');
const handle = require('./handlers');

const app = express();

app.get('/', (req,res)=>res.json({hello: 'World'}));
const port = 4000;


app.use(handle.notFound);

app.use(handle.errors);
app.listen(port, console.log(`The server is listening on port ${port}`));