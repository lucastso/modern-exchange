import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const Account = new Schema(
    {
        balance: { type: Number },
    },
    { timestamps: { createdAt: "created_at" } }
);

const AccountModel = mongoose.model("Account", Account);

export default AccountModel;
