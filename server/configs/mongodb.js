import mongoose from "mongoose";

//connect to the MongoDB database

const connectDB= async() => {
    mongoose.connection.on('connected',()=>console.log('Database Connected'))    //register_an_event('event name',()=> this is executing the event)
    //connect with databse
    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}
export default connectDB