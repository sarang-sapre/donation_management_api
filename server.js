const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var cors = require('cors')
const SignInRouter = require('./src/routes/SignIn')
const FotgotPasswordRouter = require('./src/routes/ForgotPassword')
const GetDonnationRouter = require('./src/routes/GetDonation')
const GetDonationType = require('./src/routes/GetDonationType')
const GetProductlist = require('./src/routes/GetProductList')
const AddDonation = require('./src/routes/AddDonation')
const GetUsageRouter = require('./src/routes/GetUsage')
const GetReportRouter = require('./src/routes/Reports')
const AddProductRouter = require('./src/routes/AddProduct')
const DownloadReportrouter = require('./src/routes/GetReport')
const DonationReportRouter = require('./src/routes/DonationReport');
const UsageReportRouter = require('./src/routes/UsageReport');
const CombineReportRouter = require('./src/routes/ConsolidatedReport');


app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))

app.use('/SignIn',SignInRouter)
app.use('/ForgotPassword',FotgotPasswordRouter)
app.use('/GetDonation',GetDonnationRouter)
app.use('/GetUsage',GetUsageRouter)
app.use('/GetDonationType',GetDonationType)
app.use('/GetProductList',GetProductlist)
app.use('/AddDonation',AddDonation)
app.use('/Reports',GetReportRouter)
app.use('/AddProduct',AddProductRouter)
app.use('/ReportDownload',DownloadReportrouter)
app.use('/DonationReport',DonationReportRouter)
app.use('/UsageReport',UsageReportRouter)
app.use('/CombineReport',CombineReportRouter)

app.listen(8080 , ()=>{
    console.log("Running on Port 8080")
})