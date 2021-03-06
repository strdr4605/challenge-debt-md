const express = require('express');
const app = express();
const router_basic = require('./routes/router_basic');
const cors = require('cors')

app.use(cors());
app.listen(80);
app.use(express.static('debt-md-front-end/dist'))
app.use("/api/v1/", router_basic);