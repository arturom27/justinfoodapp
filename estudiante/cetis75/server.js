const express = require('express');
const mercadopago = require('mercadopago');
const app = express();

// Configurar Mercado Pago
mercadopago.configurations.configure({
    access_token: 'APP_USR-8458813615932962-060303-8723959aac8e55b4dc4b1861777846f9-1841757904'
});

app.use(express.json());

// Endpoint para crear una preferencia de pago
app.post('/api/create_preference', (req, res) => {
    const preference = req.body;

    mercadopago.preferences.create(preference)
        .then(response => {
            res.json({ init_point: response.body.init_point });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send(error);
        });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
