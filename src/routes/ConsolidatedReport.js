const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../config/DBConfig')
const XLSX = require("xlsx");
const { json } = require('body-parser');





router.post('/',(req,res)=>{


    const GenerateExcel = (rows) =>{

        console.log(rows[8])
     
/*        var arryoutput = rows[0].map(Object.values);
       var workbook = XLSX.readFile("templates/TEMPLATE_DONATION.xlsx");
       var worksheet = workbook.Sheets[workbook.SheetNames]
       XLSX.utils.sheet_add_aoa(worksheet,arryoutput,{origin:'A6'})
       XLSX.writeFile(workbook, "reports/TEMPLATE_DONATION_output.xlsx")
       res.download("reports/TEMPLATE_DONATION_output.xlsx") */
       
    }


   let pass = req.body;
   var sql = " SET @temp_interval_type = ? ; SET @temp_donation_type = ? ; SET @temp_month = ? ; SET @temp_year = ? ; SET @date_from = ? ; SET @date_to = ? ; " 
              + " CALL ngo_get_donation_report(@temp_interval_type, @temp_donation_type, @temp_month, @temp_year, @date_from, @date_to); CALL ngo_get_usage_report(@temp_interval_type, @temp_donation_type, @temp_month, @temp_year, @date_from, @date_to); "
   db.query({sql:sql,nestTables: false},[pass.interval_type,pass.donation_type,pass.month,pass.year,pass.date_from,pass.date_to],(err,rows,fields)=>{  
       if(!err)
       GenerateExcel(rows)
       else  
           console.log(err);
   })



  
})








module.exports = router