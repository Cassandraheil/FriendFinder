var express = require("express");
var path = require('path')

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("/public"));
app.use('/css',express.static(path.join(__dirname, 'public/css')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);




app.listen(PORT, function() {
    console.log("app listening on port:", PORT)
});


