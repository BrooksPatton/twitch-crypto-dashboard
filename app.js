const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Dashboard up and running on port ${port}`));