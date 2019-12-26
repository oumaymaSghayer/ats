const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ats', 
                {useNewUrlParser: true,useUnifiedTopology: true },
                (err)=>{if (!err) console.log("conx established");
                        else console.log(err);});