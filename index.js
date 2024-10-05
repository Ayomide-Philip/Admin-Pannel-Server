import bodyParser from "body-parser";
import express from "express";
import env from "dotenv";
import session from "express-session";
import passport from "passport";
import pg from "pg";
import bcrypt from "bcryptjs";
import { Strategy } from "passport-local";
env.config();

const app = express();
const port = 3000;

app.use(express.static("public"));
const db = new pg.Client({
  user: process.env.PG_CLIENT_USERNAME,
  database: process.env.PG_CLIENT_DATABASE,
  port: process.env.PG_CLIENT_PORT,
  host: process.env.PG_CLIENT_HOST,
  password: process.env.PG_CLIENT_PASSWORD,
});

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/home", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("index.ejs");
  } else {
    res.redirect("/");
  }
});

app.get("/message", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("message.ejs");
  } else {
    res.redirect("/");
  }
});

app.get("/testimonial", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("testimonial.ejs");
  } else {
    res.redirect("/");
  }
});

app.get("/post-testimonial", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("post-testimonial.ejs");
  } else {
    res.redirect("/");
  }
});

app.get("/principal-officer", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("principal-officer.ejs");
  } else {
    res.redirect("/");
  }
});

app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/",
  })
);

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.log(err);
    res.redirect("/");
  });
});

passport.use(
  new Strategy(async function (username, password, cb) {
    const inputedUsername = username;
    const inputedPassword = password;

    const request = await db.query("SELECT * FROM admin WHERE username = $1", [
      inputedUsername,
    ]);
    console.log(request.rows);
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`The app is listenig on port ${port}`);
});

// passport.use(
//   new Strategy(async function verify(username, password, cb) {
//     const request = await db.query("SELECT * FROM admin");
//     const savedUsename = request.rows[0].username;
//     const savedPassword = request.rows[0].password;
//     try {
//       if (username != savedUsename) {
//         return cb(null, false);
//       }

//       bcrypt.compare(password, savedPassword, (err, result) => {
//         if (result) {
//           return cb(null, request.rows[0]);
//         } else {
//           return cb("Wrong password", false);
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   })
// );
