import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = 3000;
let blogs = []

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/blogs', (req, res) => {
    res.render('partials/blogs.ejs', { blog_body: blogs });
});

app.get('/drafts', (req, res) => {
    res.render('partials/drafts.ejs', { blog_body: blogs });
});

app.post('/blogs', (req, res) => {
    const blog = req.body['blogContent']
    if (blog.length > 0) {
        blogs.push(blog)
    }
    res.redirect('/blogs')
})

app.post('/drafts', (req, res) => {
    const blog = req.body['blogContent']
    if (blog.length > 0) {
        blogs.push(blog)
    }
    res.redirect('/drafts')
})

app.post('/post-blog', (req, res) => {
    const blog = req.body['blogContent']
    if (blog.length > 0) {
        blogs.push(blog)
    }
    res.redirect('/blogs')
})

app.delete('/remove-blog', (req, res) => {
    const index = req.body.index;
    if (index >= 0 && index < blogs.length) {
        blogs.splice(index, 1);
    }
    res.sendStatus(200);
});

app.put('/edit-blog', (req, res) => {
    const index = parseInt(req.body['index'])
    const blog = req.body['blog']
    if (index >= 0 && index < blogs.length && blog.length > 0) {
        blogs[index] = blog
        res.status(200).send('Blog updates successfully')
    } else {
        res.status(400).send('Invalid content or index')
    }
})

app.listen(port, () => {
    console.log()
})