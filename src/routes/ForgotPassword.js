const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../config/DBConfig')


router.post('/',(req,res)=>{  
    let pass = req.body;  
    var sql = "CALL ngo_reset_password(?,?,?);"  
    db.query(sql,[pass.reset_key,pass.username,pass.new_password],(err,rows,fields)=>{  
    if(!err)   
    res.send(rows);  
    else  
        console.log(err);  
})  
});  


module.exports = router