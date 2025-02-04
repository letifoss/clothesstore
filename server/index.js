import express from "express";
import cors from "cors";

import { MercadoPagoConfig, Preference } from "mercadopago";


const client = new MercadoPagoConfig({
    accessToken: "APP_USR-579324743891920-071815-200870217c2ab267d8e9cad2f7150e46-619277086"
});

const app = express();
const port = 3000;

app.use(cors());    
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Soy el server :) ");
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                }
            ],
            back_urls: {
                success: "http://www.youtube.com/@onthecode",
                failure: "http://www.youtube.com/@onthecode",
                pending: "http://www.youtube.com/@onthecode"
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json({
            id: result.id,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia",
        });
    }
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});