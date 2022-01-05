import React from "react";
import { Expense } from "./Expense";

export const ExpensesList = ({ expenses, setExpenseEdit, deleteExpense }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>
                {expenses.length
                    ? "Expenses"
                    : "There are no expenses yet, feel free to add one!"}
            </h2>
            {expenses.map((expense) => (
                <Expense
                    key={expense.id}
                    expense={expense}
                    setExpenseEdit={setExpenseEdit}
                    deleteExpense={deleteExpense}
                />
            ))}
        </div>
    );
};
