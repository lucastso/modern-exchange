import React, {useState} from "react";
import CurrencyFormat from 'react-currency-format';

const Transaction = () => {
    const [transactionTo, setTransactionTo] = useState("");
    const [value, setValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return <section className="p-12 font-bold">
        <form method="POST" onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="to">Para quem</label>
            <input
                type="text"
                id="to"
                className="border p-2 m-2"
                value={transactionTo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTransactionTo(e.target.value);
                }}
            />
            <label htmlFor="value">Valor</label>
            <CurrencyFormat
                thousandSeparator={true}
                id="value"
                className="border p-2 m-2"
                prefix={'R$'}
                placeholder='R$0,00'
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(e.target.value);
                }}
            />
        </form>
    </section>;
};

export default Transaction;
