const express = require('express')
const router = express.Router()
const urlController = require('../urlController/urlController')


router.post('/url/shorten', urlController.createUrl)

router.get('/:urlCode', urlController.getUrl)

router.all('/*', function(res){
    res.statusCode(400).send({status: false, message: 'Path not found'})
})


module.exports = router