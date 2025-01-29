const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello');
    })
    .catch(next);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function doSomethingAsync() {
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong');
  }
}