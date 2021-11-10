const mongoose = require("mongoose");

const Db = 
"mongodb+srv://srinivasrelangi766:Srinu1999@cluster0.jrghh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(Db, {
    // userNewUrlParser: true,
    
    useUnifiedTopology: true,
   
})
.then(() =>{
    console.log("Connection Successfull");
})
.catch((e) => { 
    console.log(e);
});