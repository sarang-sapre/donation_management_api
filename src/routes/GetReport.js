const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../config/DBConfig')


router.post('/',(req,res)=>{  
      
    fileDownload(data, 'filename.csv');
});  








module.exports = router