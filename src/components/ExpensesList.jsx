import React from "react";
import { Expense } from "./Expense";

export const ExpensesList = ({
    expenses,
    setExpenseEdit,
    deleteExpense,
    filter,
    filteredExpenses,
}) => {
    return (
        <div className="listado-gastos contenedor">
            {filter ? (
                <>
                    <h2>
                        {filteredExpenses.length
                            ? "Filtered expenses"
                            : "There are no expenses in this category yet, feel free to add one!"}
                    </h2>
                    {filteredExpenses.map((filteredExpense) => (
                        <Expense
                            key={filteredExpense.id}
                            expense={filteredExpense}
                            setExpenseEdit={setExpenseEdit}
                            deleteExpense={deleteExpense}
                        />
                    ))}
                </>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};
