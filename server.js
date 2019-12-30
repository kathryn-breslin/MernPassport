const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const dbConnection = require("./client/dbConnection");
const MongoStore = require("connect-mongo")(session);
const passport = require("./client/src/utils/passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const user = require("./routes/user")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use( session({ 
    secret: "hello-mern", 
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, 
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use("/user", user);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
