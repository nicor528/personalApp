import { IngresosDB } from "../../interfaces/interfaces";

export type Meses = {
    meses : string
}

export type IngresosAction = 
    | { type: "mesesEnDB", payload: {meses: Meses[]} }
    | { type: "addIngreso", payload: IngresosDB }

export const IngresosReducer = ( DB: IngresosDB, action: IngresosAction): IngresosDB => {
    
    switch (action.type) {
        case "addIngreso":
            return {
                ...DB,
            }

        case "mesesEnDB":
            const meses = action.payload.meses
            console.log(meses)
            return{
                ...DB,
                meses: meses
            }
        
        default:
            return DB;
    }
}