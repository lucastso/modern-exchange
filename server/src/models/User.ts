import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const User = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        accountId: [{ type: ObjectId, ref: "Account" }],
    },
    { timestamps: { createdAt: "created_at" } }
);

const UserModel = mongoose.model("User", User);

export default UserModel;
