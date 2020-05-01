# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

### Let's Build an Express API!

Your task is to build a small, light-weight server that can create, read, update, and delete posts using express.

Instead of storing your posts in a json file, you can store it in an array in your server.js file.

```js
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
```

Deploy your app using Heroku.
> include the heroku deployed url in the pull request description so we can test your app
