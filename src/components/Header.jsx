import React from "react";
import { BudgetControl } from "./BudgetControl";
import { NewBudget } from "./NewBudget";
export const Header = ({
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget,
    expenses,
    setExpenses,
}) => {
    return (
        <header>
            <h1>Expenses Planner</h1>
            {isValidBudget ? (
                <BudgetControl
                    budget={budget}
                    setBudget={setBudget}
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setIsValidBudget={setIsValidBudget}
                />
            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}
        </header>
    );
};
