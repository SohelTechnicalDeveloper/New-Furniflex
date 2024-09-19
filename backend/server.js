const dbConnection = require('./dbConnection')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const port = process.env.PORT||3000
const jwt = require('jsonwebtoken')
const app = express();
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const URL = process.env.MONGOURL

const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require("./routes/categoryRoutes")
const orderRoutes = require("./routes/orderRoutes")
const userRoutes = require("./routes/userRoutes")
const adminRoutes = require("./routes/adminRoutes")
const cartRoutes = require("./routes/cartRoutes")
dbConnection(URL)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
 
app.use(cors())
app.use(fileUpload,({
    useTempFiles:true
}))
app.use('/uploads', express.static('uploads'));
app.use('/Api/Product',productRoutes)
app.use('/Api/Category',categoryRoutes)
app.use('/Api/Order',orderRoutes)
app.use('/Api/user',userRoutes)
app.use('/Api/adminLogin',adminRoutes)
app.use('/Api/Cart',cartRoutes)

app.listen(port,()=>{
    console.log(`The Server is running on PORT ${port}`);
})
