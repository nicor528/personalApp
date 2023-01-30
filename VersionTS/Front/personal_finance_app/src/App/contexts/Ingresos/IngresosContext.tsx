import { createContext } from "react";
import { IngresosDB } from "../../interfaces/interfaces";

export type Meses = {
    meses : string
}

export type IngresosContextProps = {
    ingresosDB: IngresosDB,
    setMesesenDB: (meses: Meses[]) => void
}

export const IngresosContext = createContext<IngresosContextProps>( {} as IngresosContextProps )