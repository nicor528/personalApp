import { useContext } from "react"
import { GastosContext } from "../contexts/Gastos/GastosContext"
import { IngresosContext } from "../contexts/Ingresos/IngresosContext"


export default function useIG () {

    const { gastosDB } = useContext(GastosContext)

    const { ingresosDB } = useContext(IngresosContext)

    console.log(ingresosDB, gastosDB)



    return{
        ingresos: ingresosDB,
        gastos: gastosDB
    }
}