const express = require('express');
const router = express.Router(); 

//get pages index


router.get('/',  function (req, res) {
    Page.find({}).sort({sorting: 1}).exec(function (err, pages) {
        res.render('admin/pages', {
            pages: pages
        });
    });
});



//get add page
router.get('/add-page', function(req,res, next){
	 	const title = "";
	 	const slug = "";
	 	const content = "";

	 	res.render('admin/add_page', {
	 		title : title,
	 		slug : slug,
	 		content : content
	 	});
});


module.exports= router; 