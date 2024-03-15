const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    const toy = {name: "snot", toy_type: "puppet", colour: "pink and white"};

    res.render('index');

//   res.send(`<h2>My Toys</h2> <p>My toy is called ${toy.name} and it's a ${toy.toy_type}</p>`);
});

app.listen(3000, (err) => {
    if(err) throw (err);
    console.log(`Server is listening on //localhost:3000`);
})