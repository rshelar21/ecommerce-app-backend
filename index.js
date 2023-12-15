const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });
const cors = require('cors');

mongoose.connect(`${process.env.DATABASE_URL}`).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(err);
})

app.use(cors());
app.use(express.json({limit : '20mb'}));
app.use(express.urlencoded({limit : '20mb', extended : true}));

app.use('/api/products', require('./routes/Product'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});