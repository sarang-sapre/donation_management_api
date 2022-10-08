const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../config/DBConfig')


router.post('/',(req,res)=>{  
    let pass = req.body; 
    var sql = "CALL ngo_get_donation(?,?);"
    db.query(sql,[pass.from_date,pass.to_date],(err,rows,fields)=>{  
    if(!err)
    res.send(rows);  
    else  
        console.log(err);  
})  
});  


module.exports = router