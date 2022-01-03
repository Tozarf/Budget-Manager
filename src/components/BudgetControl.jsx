import { useEffect, useState } from "react";

export const BudgetControl = ({ budget, expenses }) => {
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce(
            (total, expense) => expense.quantity + total,
            0
        );
        const totalAvailable = budget - totalSpent;
        setSpent(totalSpent);
        setAvailable(totalAvailable);
    }, [expenses]);

    const budgetFormat = (quantity) => {
        return quantity.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>grafica</div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Budget: </span> {budgetFormat(budget)}
                </p>
                <p>
                    <span>Available: </span> {budgetFormat(available)}
                </p>
                <p>
                    <span>Spent: </span> {budgetFormat(spent)}
                </p>
            </div>
        </div>
    );
};
