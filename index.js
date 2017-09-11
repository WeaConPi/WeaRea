/**
 * Created by Farmas on 01.05.2017.
 */

const path = require('path');
import * as express from "express";
const app = express();
const PORT =(process.env.PORT || 8080)

app.use('/ReaRest/',express.static(path.join(__dirname, 'ReaRest/dist')));
app.get('/ReaRest/*', function(request, response) {
  response.sendFile(path.join(__dirname,'ReaRest/dist/index.html'));
});

app.use('/ReaGQL/',express.static(path.join(__dirname, 'ReaGQL/build')));
app.get('/ReaGQL/*', function(request, response) {
  response.sendFile(path.join(__dirname,'ReaGQL/build/index.html'));
});

app.get('/hello', (request, response) => {
    response.send("Hello")
});

app.listen(PORT, error => {
  error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
