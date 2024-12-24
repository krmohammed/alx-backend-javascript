const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
})

app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
})

app.get('/available_payments', (req, res) => {
    res.send({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    })
})

app.use(express.json());

app.post('/login', (req, res) => {
    const user_name = req.body ? req.body.userName: ''
    res.send(`Welcome ${user_name}`);
}).listen(port, () => {
    console.log(`API available on localhost port 7865`);
})

module.exports = app;
