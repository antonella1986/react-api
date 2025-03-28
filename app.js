const express = require('express');
const app = express();
const port = 3001;

//middleware (altrimenti Express non riuscirà a leggere il body in formato JSON)
app.use(express.json());

//middleware server error
const serverError = require("./middlewares/serverError");
app.use(serverError);

//middleware error 404
const error404 = require("./middlewares/error404");
app.use(error404);

//importazione router
const postsRouter = require("./routers/posts")

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//home route
app.get('/', (req, res) => {
  res.send('Hello Bloggers!');
});

//registro il router con il prefisso /posts
app.use("/posts", postsRouter);