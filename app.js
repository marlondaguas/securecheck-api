const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/api/validar-email", (req, res) => {
    const { email } = req.body;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    res.json({ valido: regex.test(email) });
});

app.get("/api/brechas", async (req, res) => {
    const email = req.query.email;

    try {
        const response = await axios.get(
            `https://haveibeenpwned.com/api/v3/breachedaccount/${email}`
        );

        res.json({
            comprometido: true,
            brechas: response.data
        });

    } catch (error) {
        res.json({
            comprometido: false,
            mensaje: "No se encontraron filtraciones"
        });
    }
});

app.listen(3000, () => console.log("Servidor activo"));