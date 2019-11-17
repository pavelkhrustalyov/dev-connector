const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('API IS RUNNING'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server running on port ' + port);
});



