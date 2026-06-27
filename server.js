const express = require('express');
const app = express();
const port = 3000;

app.get('/datalab5', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send('Lab 5 data.123');
});

if (require.main === module) {
    app.listen(port, () => { console.log(`Server is running on http://localhost:${port}`); });
}

module.exports = app; 
