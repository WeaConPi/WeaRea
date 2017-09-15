/**
 * Created by Farmas on 01.05.2017.
 */

const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Redirect all HTTP traffic to HTTPS
function ensureSecure(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    // OK, continue
    return next();
  }
  res.redirect('https://' + req.hostname + req.url);
}

// Handle environments
if (process.env.NODE_ENV === 'production') {
  app.all('*', ensureSecure);
}

app.use('/ReaRest/', express.static(path.join(__dirname, 'ReaRest/build')));
app.get('/ReaRest/*', function(request, response) {
  response.sendFile(path.join(__dirname, 'ReaRest/build/index.html'));
});

app.use('/ReaGQL/', express.static(path.join(__dirname, 'ReaGQL/build')));
app.get('/ReaGQL/*', function(request, response) {
  response.sendFile(path.join(__dirname, 'ReaGQL/build/index.html'));
});

app.get('/hello', (request, response) => {
  response.send('Hello');
});
app.get('/', function(request, response) {
  response.send(
    '<a href="./ReaGQL/"><h1>Go to ReaGQL</h1></a><a href="./ReaRest/"><h1>Go to ReaREST</h1></a><img src="https://circleci.com/gh/WeaConPi/WeaRea/tree/master.svg?style=svg" />',
  );
});
app.listen(PORT, error => {
  error
    ? console.error(error)
    : console.info(' Visit http://localhost:/ ' + PORT);
});
