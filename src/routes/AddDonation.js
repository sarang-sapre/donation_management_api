const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../config/DBConfig')


router.post('/',(req,res)=>{  
    let pass = req.body; 
    var sql = "CALL ngo_add_record(?, ?, ?, ?, ?, ?,?);"
    db.query(sql,[pass.record_type,pass.donation_type,pass.product,pass.quantity,pass.person_count,pass.amount,pass.record_date],(err,rows,fields)=>{  
    if(!err)
    res.send(rows);  
    else  
        console.log(err);  
})  
});  


module.exports = router