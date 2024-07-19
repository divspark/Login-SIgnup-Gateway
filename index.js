import express from "express";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import { HandleUserLogin, HandleUserSignup } from "./Controllers/user.js";
import { connectDB } from "./Connect/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./Controllers/views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

app.post("/login", HandleUserLogin);
app.post("/signup", HandleUserSignup);

app.get("/login", (req, res) => {
  res.sendFile(
    "D:/Project Modules/Login Signup with JWT Auth/Controllers/views/index.html"
  );
});

app.get("/home",(req,res) => {
  res.sendFile(
    "D:/Project Modules/Login Signup with JWT Auth/Controllers/views/home.html"
  );
})

app.get("/signup", (req, res) => {
  res.sendFile(
    "D:/Project Modules/Login Signup with JWT Auth/Controllers/views/index2.html"
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
