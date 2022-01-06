import { useEffect, useState } from "react";
import CloseBtn from "../img/cerrar.svg";
import { Message } from "./Message";

export const Modal = ({
    setModal,
    animateModal,
    setAnimateModal,
    saveExpense,
    expenseEdit,
    setExpenseEdit,
}) => {
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (Object.keys(expenseEdit).length > 0) {
            setName(expenseEdit.name);
            setQuantity(expenseEdit.quantity);
            setCategory(expenseEdit.category);
            setId(expenseEdit.id);
            setDate(expenseEdit.date);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([name, quantity, category].includes("")) {
            setMsg("One or more fields are empty");
            setTimeout(() => {
                setMsg("");
            }, 3000);
            return;
        }

        saveExpense({ name, quantity, category, id, date });
    };

    const hideModal = () => {
        setAnimateModal(false);
        setExpenseEdit({});
        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseBtn} alt="Closing button" onClick={hideModal} />
            </div>

            <form
                className={`formulario ${animateModal ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit}
            >
                <legend>
                    {expenseEdit.name ? "Edit Expense" : "Add a new expense"}
                </legend>
                {msg && <Message type="error">{msg}</Message>}
                <div className="campo">
                    <label htmlFor="name">Expense Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Add an Expense Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        id="quantity"
                        type="number"
                        placeholder="Add the quantity (e.g., 200)"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">--Choose a category</option>
                        <option value="Savings">Savings</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Other">Other</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Health">Health</option>
                        <option value="Suscriptions">Suscriptions</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value={expenseEdit.name ? "Save Changes" : "Add expense"}
                />
            </form>
        </div>
    );
};
