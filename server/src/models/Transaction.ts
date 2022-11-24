import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const Transaction = new Schema(
    {
        debitedAccountId: [{ type: Schema.Types.ObjectId, ref: "Account" }],
        creditedAccountId: [{ type: Schema.Types.ObjectId, ref: "Account" }],
        value: { type: Number },
    },
    { timestamps: { createdAt: "created_at" } }
);

const TransactionModel = mongoose.model("Transaction", Transaction);

export default TransactionModel;
