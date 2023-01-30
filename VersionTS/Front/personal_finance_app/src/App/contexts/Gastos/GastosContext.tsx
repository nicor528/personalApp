import { createContext } from "react";
import { GastosDB } from "../../interfaces/interfaces";

export type Meses = {
    meses : string
}

export type GastosContextProps = {
    gastosDB: GastosDB,
    setMesesenDB: (meses: Meses[]) => void
}

export const GastosContext = createContext<GastosContextProps>( {} as GastosContextProps )