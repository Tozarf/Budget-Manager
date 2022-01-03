import { useState } from "react";
import { Message } from "./Message";

export const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
    const [msg, setMsg] = useState("");

    const handleBudget = (e) => {
        e.preventDefault();
        if (!budget || budget < 0) {
            setMsg("not a valid budget");

            return;
        }
        setMsg("");
        setIsValidBudget(true);
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handleBudget} className="formulario">
                <div className="campo">
                    <label>Enter your budget</label>
                    <input
                        type="number"
                        className="nuevo-presupuesto"
                        placeholder="Your budget"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                    />
                    {msg && <Message type={"error"}>{msg}</Message>}
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};
