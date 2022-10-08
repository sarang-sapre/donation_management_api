const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../config/DBConfig')


router.post('/',(req,res)=>{  
    let user = req.body; 
    var sql = "CALL ngo_login_user(?,?);"  
    db.query(sql,[user.username,user.password],(err,rows,fields)=>{  
    if(!err)   
    res.send(rows);
    else  
        console.log(err);  
})  
});  




module.exports = router