const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../config/DBConfig')
const XLSX = require("xlsx");



router.post('/',(req,res)=>{


     const GenerateExcel = (rows) =>{
      
        var arryoutput = rows[0].map(Object.values);
        var workbook = XLSX.readFile("templates/TEMPLATE_USAGE.xlsx");
        var worksheet = workbook.Sheets[workbook.SheetNames]
        XLSX.utils.sheet_add_aoa(worksheet,arryoutput,{origin:'A6'})
        XLSX.writeFile(workbook, "reports/TEMPLATE_USAGE_output.xlsx")
        res.download("reports/TEMPLATE_USAGE_output.xlsx")
        
     }


    let pass = req.body;
    var sql = "CALL ngo_get_usage_report(?, ?, ?, ?, ?, ?);"

    db.query(sql,[pass.interval_type,pass.donation_type,pass.month,pass.year,pass.date_from,pass.date_to],(err,rows,fields)=>{  
        if(!err)
        GenerateExcel(rows)
        else  
            console.log(err);
    })



   
})



module.exports = router