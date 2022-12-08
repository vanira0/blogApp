const express = require('express');
const router = express.Router()

const Blog = require('../models/Blog');

// @desc    Show new page
// @route   GET /blogs/new
router.get('/new', (req, res) => {
    res.render('blogs/new')
})

// @desc    Process new form
// @route   POST /blogs
router.post('/', async (req, res) => {
    // console.log(req.body.blog)
    const blog = new Blog(req.body.blog);
    await blog.save();
    res.redirect(`/blogs`)
})

// @desc    Show all blogs/ index page
// @route   GET /blogs
router.get('/', async (req, res) => {
    const blogs = await Blog.find({});
    res.render('blogs/index', { blogs })
})

// @desc    Show single blog/ show page
// @route   GET /blogs/:id
router.get('/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    // console.log(blog)
    if (!blog) {
        return res.redirect('/blogs');
    }
    res.render('blogs/show', { blog });
})

// @desc    Show edit page
// @route   GET /blogs/:id/edit
router.get('/:id/edit', async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.render('blogs/edit', { blog });
});

// @desc    Process edit form
// @route   PUT /blogs/:id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findByIdAndUpdate(id, { ...req.body.blog })
    res.redirect(`/blogs/${blog._id}`)
});

// @desc   Delete blog
// @route  DELETE /blogs/:id
router.delete('/:id', async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/blogs');
});

// @desc   User blogs
// @route  GET /blogs/user/:userId
// coming soon <3

module.exports = router;

