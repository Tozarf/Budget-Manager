import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const BudgetControl = ({
    budget,
    expenses,
    setExpenses,
    setBudget,
    setIsValidBudget,
}) => {
    const [percentage, setPercentage] = useState(0);
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce(
            (total, expense) => expense.quantity + total,
            0
        );
        const totalAvailable = budget - totalSpent;
        const newPercentage = (
            ((budget - totalAvailable) / budget) *
            100
        ).toFixed(2);
        setSpent(totalSpent);
        setAvailable(totalAvailable);

        setTimeout(() => {
            setPercentage(newPercentage);
        }, 1000);
    }, [expenses]);

    const budgetFormat = (quantity) => {
        return quantity.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };
    const handleReset = () => {
        const result = confirm(
            "Would you like to reset your budget and expenses?"
        );
        if (result) {
            setExpenses([]);
            setBudget(0);
            setIsValidBudget(false);
        }
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
                        trailColor: "#F5F5F5",
                        pathTransition: 0.5,
                        textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
                    })}
                    value={percentage}
                    text={`${percentage}% Spent`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type="button"
                    onClick={handleReset}
                >
                    Reset App
                </button>
                <p>
                    <span>Budget: </span> {budgetFormat(budget)}
                </p>
                <p className={`${available < 0 ? "negativo" : ""}`}>
                    <span>Available: </span> {budgetFormat(available)}
                </p>
                <p>
                    <span>Spent: </span> {budgetFormat(spent)}
                </p>
            </div>
        </div>
    );
};
