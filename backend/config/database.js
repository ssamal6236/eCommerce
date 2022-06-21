const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser:true, 
        useUnifiedTopology:true
        //useCreateIndex:true is not support
    })
    .then((data) => {        
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    //commenting below step due to Unhandled Promise Rejecting coded in server.js
    // .catch((err)=>{
    //     console.log(err);
    // });
}


module.exports = connectDatabase