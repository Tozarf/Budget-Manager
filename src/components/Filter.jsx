import { useEffect, useState } from "react";

export const Filter = ({ filter, setFilter }) => {
    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Filter Expenses</label>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">-- All Categories --</option>
                        <option value="Savings">Savings</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Other">Other</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Health">Health</option>
                        <option value="Suscriptions">Suscriptions</option>
                    </select>
                </div>
            </form>
        </div>
    );
};
