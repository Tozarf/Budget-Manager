import React from "react";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatDate } from "../helpers";
import SaveIcon from "../img/icono_ahorro.svg";
import RentIcon from "../img/icono_casa.svg";
import FoodIcon from "../img/icono_comida.svg";
import EntertainmentIcon from "../img/icono_ocio.svg";
import HealthIcon from "../img/icono_salud.svg";
import SuscriptionsIcon from "../img/icono_suscripciones.svg";

const iconsManager = {
    Savings: SaveIcon,
    Food: FoodIcon,
    Rent: RentIcon,
    Entertainment: EntertainmentIcon,
    Health: HealthIcon,
    Suscriptions: SuscriptionsIcon,
};

export const Expense = ({ expense, setExpenseEdit }) => {
    const { name, quantity, category, id, date } = expense;
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setExpenseEdit(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    );
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => console.log("delete")}>
                Delete
            </SwipeAction>
        </TrailingActions>
    );
    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img src={iconsManager[category]} alt="" />
                        <div className="descripcion-gasto">
                            <p className="categoria">{category}</p>
                            <p className="nombre-gasto">{name}</p>
                            <p className="fecha-gasto">
                                Added: {""}
                                <span>{formatDate(date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">${quantity}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
};
