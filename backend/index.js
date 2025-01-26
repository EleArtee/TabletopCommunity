const express = require("express");

const app = express();

// public directory
app.use(express.json());

app.use(express.urlencoded({extended:true}));

const db = require("./models");

db.sequelize.sync({force: true}).then(() =>{
    console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
    res.json({ message: "Bienvenide a la aplicación de la app de juegos de mesa."});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}.`);
});