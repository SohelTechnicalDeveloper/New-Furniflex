const mongoose = require('mongoose')
function dbConnection(URL) 
{

    mongoose.connect(URL);
    
}

module.exports = dbConnection
