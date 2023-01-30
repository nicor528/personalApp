import { createContext } from "react";
import { DataBase } from "../../interfaces/interfaces";


type DataBaseContextProps = {
    dataBase : DataBase,
    gastosXMes: (mes : string) => void,
    ingresoXMes: (mes : string) => void
}

export const DataBaseContext = createContext<DataBaseContextProps>( {} as DataBaseContextProps )