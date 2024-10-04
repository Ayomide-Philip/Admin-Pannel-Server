import bodyParser from "body-parser";
import express from "express";
import env from "dotenv";
import session from "express-session";
import { Passport } from "passport";
import pg from "pg";
import { Strategy } from "passport-local";
env.config();

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/message", (req, res) => {
  res.render("message.ejs");
});

app.get("/testimonial", (req, res) => {
  res.render("testimonial.ejs");
});

app.get("/post-testimonial", (req, res) => {
  res.render("post-testimonial.ejs");
});

app.get("/principal-officer", (req, res) => {
  res.render("principal-officer.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.listen(port, () => {
  console.log(`The app is listenig on port ${port}`);
});
