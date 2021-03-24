const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/bookmarks');

router.post('/', (req, res) => {
	Bookmarks.create(req.body, (err, createdBookmark) => {
		res.json(createdBookmark);
	});
});

router.get('/', (req, res) => {
	Bookmarks.find({}, (err, foundBookmarks) => {
		res.json(foundBookmarks);
	});
});

router.put('/:id', (req, res) => {
	Bookmarks.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedBookmark) => {
			res.json(updatedBookmark);
		}
	);
});

router.delete('/:id', (req, res) => {
	Bookmarks.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
		res.json(deletedBookmark);
	});
});

module.exports = router;