const exp = require('express');

const app = exp();
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
})
app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
}).listen(port, () => {
    console.log(`API available on localhost port 7865`);
})

module.exports = app;
