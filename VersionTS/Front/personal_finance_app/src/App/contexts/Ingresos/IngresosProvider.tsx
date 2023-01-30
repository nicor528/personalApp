import { useEffect, useReducer } from "react"
import { obtenerMesesDB } from "../../Apis/Firebase"
import { IngresosDB } from "../../interfaces/interfaces"
import { IngresosContext } from "./IngresosContext"
import { IngresosReducer } from "./IngresosReducer"

const initial_state: IngresosDB = {
    meses:  [{meses: ""}],
    ingresos: [
        {
            ingreso: "",
            valor: 0
        }
    ]
}

export type Meses = {
    meses : string
}

interface props {
    children : JSX.Element | JSX.Element[]
}

export default function ({children} : props) {

    const [ingresosDB, dispatch] = useReducer (IngresosReducer, initial_state)

    useEffect( () => {
        async function data () {
            let meses: Meses[]
            await obtenerMesesDB().then(async (res) => {
                meses = res;
                console.log(meses)
                await setMesesenDB(meses)
            })

        }
        data()
    }, [])

    const setMesesenDB = (meses: Meses[]) => {
        dispatch( {type: "mesesEnDB", payload: {meses}} )
    }

    return(
        <IngresosContext.Provider value={{ingresosDB, setMesesenDB}}>
            {children}
        </IngresosContext.Provider>
    )
}