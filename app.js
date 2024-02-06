const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"./public")));
app.set("view engine", "ejs");

const inventory = [
    { name: "sirloin", type: "beef", amount: 25 }, 
    { name: "ribs", type: "pork", amount: 0 },
    { name: "wings", type: "chicken", amount: 10 },
    { name: "breast", type: "chicken", amount: 5 },
    { name: "cod", type: "fish", amount: 22 },
    { name: "haddock", type: "fish", amount: 2 },
    { name: "chops", type: "pork", amount: 0 },
];

app.get("/",(req,res)=>{
    let username = "John";
    res.render("landing",{data : username, stock : inventory});
});

app.get("/", (req, res) => {

    res.send(`hello qub`);
});

app.get("/playlist", (req, res) => {
 res.send("my playlist");

});

app.get("/playlist/:playID", (req, res) => {

    let id = req.params.playID;
    res.send(`SELECT * FROM playlists where ID = ${id}`);

});

app.get("/products", (req, res) => {
    let queryp = req.query.id;
    res.send(`SELECT * FROM products WHERE name LIKE product id: ${queryp}`);
});

app.listen(3000, (err) => {
    if (err) throw err;
    console.log(`listening port 3000`)
});

