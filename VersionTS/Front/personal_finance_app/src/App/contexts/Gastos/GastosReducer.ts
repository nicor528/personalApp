import { GastosDB } from "../../interfaces/interfaces";

export type Meses = {
    meses : string
}

export type GastosAction = 
    | { type: "mesesEnDB", payload: {meses: Meses[]} }
    | { type: "addGasto", payload: GastosDB }

export const GastosReducer = ( DB: GastosDB, action: GastosAction): GastosDB => {
    
    switch (action.type) {
        case "addGasto":
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