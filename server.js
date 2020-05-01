const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use(logger('dev'))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
})

const posts =
    [
        {
            id: 1,
            title: "Lorem Ipsum Dolor",
            imgURL: "https://www.unsplash.com/92hd.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            author: "Bruno Galvao"
        }, {
            id: 2,
            title: "Ut Enim Ad Minim",
            imgURL: "https://www.unsplash.com/64ea.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            author: "Bruno Galvao"
        }
    ]

app.get('/', (req, res) => {
    res.send("This is root!");
});

app.get('/posts', async (req, res) => {
    res.json(posts)
})

app.get('/posts/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.filter(post => post.id === id)[0]
    res.json(post)
})

app.post('/posts', (req, res) => {
    const post = req.body
    posts.push(post)
    res.json(posts)
})

app.put('/posts/:id', async (req, res) => {
    const id = req.params.id
    const postIndex = posts.findIndex(post => post.id === id)
    const post = { ...posts[postIndex], ...req.body }
    posts.splice(postIndex, 1, post)
    res.json(post)
})

app.delete('/posts/:id', async (req, res) => {
    const id = req.params.id
    const postIndex = posts.findIndex(post => post.id === id)
    posts.splice(postIndex, 1)
    res.json(posts)
})