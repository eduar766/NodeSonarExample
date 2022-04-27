const express = require('express');
const app = express();
const port = process.env.PORT || 8080

// Route
app.get('/', (req, res) => {
    return res.status(200).json({ name: 'Eduardo Saavedra' })
});

// App Running
let server = app.listen(port, () => {
    console.log(`Application running on port ${port}`)
});

module.exports = server;