const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../config/DBConfig')


router.get('/',(req,res)=>{  
    let pass = req.body; 
    var sql = "CALL ngo_get_donation_type();"
    db.query(sql,(err,rows,fields)=>{  
    if(!err)
    res.send(rows);  
    else  
        console.log(err);  
})  
});  


module.exports = router