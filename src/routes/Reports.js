const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../config/DBConfig')
const format = require('date-format');
const XlsxPopulate = require('xlsx-populate');


function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('-');
  }



router.post('/',(req,res)=>{  
    let output;
  
const  GenerateExcel = (rows,FileName) => {
    var output = rows[0];
    var arryoutput = output.map(Object.values)

        XlsxPopulate.fromFileAsync("templates/TEMPLATE_DONATION.xlsx")
        .then(workbook => {
            const r = workbook.sheet(0).range("A6:AW36");
            r.value(arryoutput)
            workbook.toFileAsync("reports/TEMPLATE_DONATION_output.xlsx");
        });


}

    let pass = req.body;
    var sql = "CALL ngo_get_report_data(?, ?, ?, ?, ?, ?);"
    db.query(sql,[pass.report_type,pass.interval_type,pass.month,pass.year,pass.date_from,pass.date_to],(err,rows,fields)=>{  
    if(!err)
      GenerateExcel(rows)
    else  
        console.log(err);  
})  


});  


module.exports = router