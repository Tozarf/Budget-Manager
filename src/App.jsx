import { useState, useEffect } from "react";
import { ExpensesList } from "./components/ExpensesList";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { generateId } from "./helpers";
import NewExpenseIcon from "./img/nuevo-gasto.svg";
function App() {
    const [budget, setBudget] = useState(localStorage.getItem("budget") ?? "");
    const [expenses, setExpenses] = useState(
        localStorage.getItem("expenses")
            ? JSON.parse(localStorage.getItem("expenses"))
            : []
    );

    const [isValidBudget, setIsValidBudget] = useState(false);

    const [modal, setModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);

    const [expenseEdit, setExpenseEdit] = useState({});

    useEffect(() => {
        if (Object.keys(expenseEdit).length > 0) {
            setModal(true);
            setTimeout(() => {
                setAnimateModal(true);
            }, 500);
        }
    }, [expenseEdit]);

    useEffect(() => {
        Number(localStorage.setItem("budget", budget) ?? 0);
    }, [budget]);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses)) ?? [];
    }, [expenses]);

    useEffect(() => {
        const localStorageBudget = Number(localStorage.getItem("budget") ?? 0);
        if (localStorageBudget > 0) {
            setIsValidBudget(true);
        }
    }, []);

    const handleNewExpense = () => {
        setModal(true);
        setExpenseEdit({});
        setTimeout(() => {
            setAnimateModal(true);
        }, 500);
    };

    const saveExpense = (expense) => {
        if (expense.id) {
            const updatedExpenses = expenses.map((mappedExpense) =>
                mappedExpense.id === expense.id ? expense : mappedExpense
            );
            setExpenses(updatedExpenses);
            setExpenseEdit({});
        } else {
            expense.id = generateId();
            expense.date = Date.now();
            setExpenses([...expenses, expense]);
        }

        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    };
    const deleteExpense = (id) => {
        if (id) {
            const updatedExpenses = expenses.filter(
                (expense) => expense.id !== id
            );
            setExpenses(updatedExpenses);
        }
    };
    return (
        <div className={modal ? "fijar" : ""}>
            <Header
                expenses={expenses}
                budget={budget}
                setBudget={setBudget}
                isValidBudget={isValidBudget}
                setIsValidBudget={setIsValidBudget}
            />
            {isValidBudget && (
                <>
                    <main>
                        <ExpensesList
                            expenses={expenses}
                            setExpenseEdit={setExpenseEdit}
                            deleteExpense={deleteExpense}
                        />
                    </main>
                    <div className="nuevo-gasto">
                        <img
                            src={NewExpenseIcon}
                            alt="New Expense Icon"
                            onClick={handleNewExpense}
                        />
                    </div>
                </>
            )}
            {modal && (
                <Modal
                    setModal={setModal}
                    animateModal={animateModal}
                    setAnimateModal={setAnimateModal}
                    saveExpense={saveExpense}
                    expenseEdit={expenseEdit}
                    setExpenseEdit={setExpenseEdit}
                />
            )}
        </div>
    );
}

export default App;
