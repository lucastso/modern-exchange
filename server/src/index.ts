import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import AccountModel from "./models/Accounts";
import Transaction from "./models/Transaction";
import User from "./models/User";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.post("/transaction", async (req: Request, res: Response) => {
    const newTransaction = new Transaction({
        debitedAccountId: req.body.requestedUserId,
        creditedAccountId: req.body.receivedUserId,
        value: req.body.value,
    });
    const createdTransation = await newTransaction.save();
    res.json(createdTransation);
});

app.post("/user", async (req: Request, res: Response) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
    });
    const createdUser = await newUser.save();
    const newAccountId = new AccountModel({
        username: req.body.username,
        password: req.body.password,
    });
    const createdAccountId = await newAccountId.save();
    res.json({
        user: createdUser,
        account: createdAccountId,
    });
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`ABERTO EM ${PORT}`);

    app.listen(PORT);
});
