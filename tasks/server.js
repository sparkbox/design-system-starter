const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  const basicAuth = require('express-basic-auth');
  const envUser = process.env.AUTH_USER;
  const envPassword = process.env.AUTH_PASSWORD;
  const users = {};
  users[envUser] = envPassword;
  app.use(
    basicAuth({
      users,
      challenge: true,
      realm: 'CS',
    })
  );
}

app.use('/', express.static('dist'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
