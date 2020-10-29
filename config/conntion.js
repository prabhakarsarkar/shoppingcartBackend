const mongoose = require("mongoose")

// for the local db
// mongoose.connect("mongodb://127.0.0.1:27017/shoppingCart",{

// for the mongo cluster
mongoose.connect("mongodb+srv://prabhakar:Prabhakar123@shoppingcart-mern.ie2bz.mongodb.net/shoppingcart-mern?retryWrites=true&w=majority",{
    useNewUrlParser: true,
     useUnifiedTopology:true,
})
.then(()=>{console.log("connect");})
.catch((err)=>{console.log(err);})
