import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    email : {
        type : String,
        required: true,
        unique : true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
},
{timestamps : true}
);

export default mongoose.model("Subscriber" , subscriberSchema)