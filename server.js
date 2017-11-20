const express =require("express");
const bodyParser =require("body-parser");
const mongoose =require("mongoose");
const routes =require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//For Ajax requests 
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//se
app.use(express.static("client/build"));
// app.use(routes);

//Set up promises with mongoose
mongoose.Promise = global.Promise;
//connect to the mongo db
mongoose.connect(
  process.env.MONGODB_URI || "mongod://localhost/NYTNews", {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
  console.log(` API Server now listening on PORT ${PORT} !`);
});