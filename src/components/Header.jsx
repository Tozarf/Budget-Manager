import React from "react";
import { NewBudget } from "./NewBudget";
export const Header = ({
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget,
}) => {
    return (
        <header>
            <h1>Expenses Planner</h1>
            {isValidBudget ? (
                <p>Budget control</p>
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
