const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../config/DBConfig')


router.post('/',(req,res)=>{  
    let pass = req.body; 
    var sql = "CALL ngo_get_product(?);"
    db.query(sql,[pass.search_text],(err,rows,fields)=>{  
    if(!err)
    res.send(rows);  
    else  
        console.log(err);  
})  
});  


module.exports = router