const mongoose=require("mongoose");

const DB=process.env.DATABASE;

mongoose.set('strictQuery', false);
mongoose.connect(DB ).then(() => {
    console.log('Connncetion Successfull')
}).catch((err) => console.log("no Connection"));
