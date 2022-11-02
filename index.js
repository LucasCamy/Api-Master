const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json());

const clienteRoutes = require('./routes/clienteRoutes');

app.use('/clientes', clienteRoutes);

app.get('/', (req, res) => {
    res.json("Generic API!!")
    return
});

mongoose.connect(mongosh "mongodb+srv://cluster0.xoslp8g.mongodb.net/myFirstDatabase" --apiVersion 1 --username LucasCamy)
    .then(() => {
        console.log('Chegamos ao DB!')
        app.listen(3008)
    })
    .catch((err) => console.log(err))



app.listen(3000)