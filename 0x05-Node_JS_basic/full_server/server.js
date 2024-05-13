import router from './routes';

const express = require('express');

const app = express();
const PORT = 1245;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
