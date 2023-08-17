// Basic imports
const express = require("express");
const app = express();

// Security Middleware
const cors = require("cors");

const blog = require("./modules/blog");
const user = require("./modules/user");
const comment = require("./modules/comment");
const { notFoundHandler, errorHandler } = require("./middlewares/errorHandlers");

// Security Middleware Implementation
app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// welcome route
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the Blog API",
  });
});

// Routes Implementation
app.use("/api/v1/user", user.Route);
app.use("/api/v1/blog", blog.Route);
app.use("/api/v1/comment", comment.Route);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

module.exports = app;
