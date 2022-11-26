import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const User = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: (name: String) => name.length > 4,
                message:
                    "O seu nome de usuário deve possuir mais de 4 caracteres",
            },
        },
        password: { type: String, required: true, select: false },
        accountId: { type: Schema.Types.ObjectId, ref: "Account" },
        pix: { type: String, unique: true },
    },
    { timestamps: { createdAt: "created_at" } }
);

const UserModel = mongoose.model("User", User);

export default UserModel;
