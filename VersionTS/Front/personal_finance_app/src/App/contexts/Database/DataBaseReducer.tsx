import { getGastosXMes } from "../../Apis/Firebase";
import { DataBase } from "../../interfaces/interfaces";

type Meses = {
    meses : string
}

type Gastos = {
    gasto: string,
    valor: number
}

type Ingresos = {
    ingreso: string,
    valor: number
}

type DataBaseAction = 
    | {type: "getIngresosXmes", payload: {ingresos: Ingresos[]}}
    | {type: "mesesEnDB", payload: {meses: Meses[]}}
    | {type: "getGastosXmes", payload: {gastos: Gastos[]}}

export const DataBaseReducer = ( DB: DataBase, action: DataBaseAction ): DataBase => {

    switch (action.type) {
        case "mesesEnDB":
            const meses = action.payload.meses
            console.log(meses)
            return{
                ...DB,
                meses: meses
            }

        case "getGastosXmes":
            return{
                ...DB,
                gastos: action.payload.gastos
            }

        case "getIngresosXmes":
            return{
                ...DB,
                ingresos: action.payload.ingresos
            }
        
        default:
            return DB;
    }
}