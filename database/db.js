import mongoose from "mongoose";
const connectdb = async()=>{
    try{
        const instance = await mongoose.connect("mongodb://127.0.0.1:27017" , {dbName:"Roushan"})
        console.log ("mongodb connected")

    }

    catch(error){
        console.log("mongodb connection failed", error)
    }
}

export default connectdb