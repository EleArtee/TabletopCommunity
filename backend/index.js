const express = require("express");
const passport = require("passport");
const session = require("express-session");

const app = express();

// public directory
app.use(express.json());

app.use(express.urlencoded({extended:true}));

const db = require("./models");

db.sequelize.sync({}).then(() =>{
    console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
    res.json({ message: "Bienvenide a la aplicación de la app de juegos de mesa."});
});

/* app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

initializePassport(passport, async email =>{
    const user = (await Usuario.findOne()).where('email', email);
    return user;
}) */

require("./routes/juego.routes")(app);
require("./routes/usuario.routes")(app);
require("./routes/admin.routes")(app);
require("./routes/lista.routes")(app);
require("./routes/perfil.routes")(app);
require("./routes/review.routes")(app);
require("./routes/tag.routes")(app);
require("./routes/informeJuego.routes")(app);
require("./routes/informeReview.routes")(app);
require("./routes/informeLista.routes")(app);
require("./routes/informeUsuario.routes")(app);
require("./routes/tagjuegos.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}.`);
});