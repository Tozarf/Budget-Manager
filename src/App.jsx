import { useState, useEffect } from "react";
import { ExpensesList } from "./components/ExpensesList";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { generateId } from "./helpers";
import NewExpenseIcon from "./img/nuevo-gasto.svg";
function App() {
    const [budget, setBudget] = useState("");
    const [isValidBudget, setIsValidBudget] = useState(false);

    const [modal, setModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);

    const [expenseEdit, setExpenseEdit] = useState({});

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        if (Object.keys(expenseEdit).length > 0) {
            handleNewExpense();
        }
    }, [expenseEdit]);

    const handleNewExpense = () => {
        setModal(true);
        setTimeout(() => {
            setAnimateModal(true);
        }, 500);
    };

    const saveExpense = (expense) => {
        expense.id = generateId();
        expense.date = Date.now();
        setExpenses([...expenses, expense]);

        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
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
                />
            )}
        </div>
    );
}

export default App;
