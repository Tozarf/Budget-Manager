import React from "react";
import { BudgetControl } from "./BudgetControl";
import { NewBudget } from "./NewBudget";
export const Header = ({
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget,
    expenses,
}) => {
    return (
        <header>
            <h1>Expenses Planner</h1>
            {isValidBudget ? (
                <BudgetControl budget={budget} expenses={expenses} />
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
