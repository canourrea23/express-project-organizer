let express = require('express')
let db = require('../models')
let router = express.Router()

router.get('/', (req, res) => {
    db.category.findAll().then(categories => {
        res.render('categories/show', {categories:categories})
    })
})
router.get('/:id', (req,res) => {
    db.category.findOne({
        where: { id: req.params.id },
        include: [db.project]
      }).then(category => {
          console.log(category);
          res.render('categories/details', {category:category});
      })

})




module.exports = router