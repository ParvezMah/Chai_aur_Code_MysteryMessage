import exp from "constants";
import mongoose, {Schema, Document} from "mongoose";

// Step-1 Interface
export interface Message extends Document{
    content : string;
    createdAt : Date;
}



// Step-2 Schema
const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})


// Step-3 Use Interface
export interface User extends Document {
    username : string;
    email : string;
    password : string;
    verifyCode : string;
    verifyCodeExpiry : Date;
    isVerified: boolean;
    isAcceptingMessage : boolean;
    messages : Message[]   
}


// Step-4 User Schema
const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "User name is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email name is required"],
        unique: true,
        match: [/.+\@.+\..+/, 'Plese use a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password name is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "verify Code name is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "verify Code Expiry name is required"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
})


// Step-5 Sending to Next.js
const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;