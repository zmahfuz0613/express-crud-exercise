// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const logger = require('morgan')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
const PORT = process.env.PORT || 3000




app.listen(PORT, function () {
  console.log("Server started on port 3000");
});

const posts =
  [
    {
      id: "100",
      title: "Lorem Ipsum Dolor",
      imgURL: "https://www.unsplash.com/92hd.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Zunayed Mahfuz"
    },
    {
      id: "101",
      title: "Ut Enim Ad Minim",
      imgURL: "https://www.unsplash.com/64ea.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Zunayed Mahfuz"
    }
  ]

app.get('/', (req, res) => {
  res.send("This is root!");
});

app.get('/posts', async (req, res) => {
  res.json(posts)
})

app.get('/posts/:id', async (req, res) => {
  const id = req.params.id
  const post = post.filter(post => post._id === id)[0]
  res.json(post)
})

app.post('/posts', (req, res) => {
  const post = req.body
  posts.push(post)
  res.json(posts)
})

app.put('/posts/:id', async (req, res) => {
  const id = req.params.id
  const postIndex = posts.findIndex(post => post._id === id)
  const post = { ...posts[postIndex], ...req.body }
  posts.splice(postIndex, 1, posts)
  res.json(post)
})

app.delete('/posts/:id', async (req, res) => {
  const id = req.params.id
  const postIndex = posts.findIndex(post => post._id === id)
  posts.splice(postIndex, 1)
  res.json(posts)
})