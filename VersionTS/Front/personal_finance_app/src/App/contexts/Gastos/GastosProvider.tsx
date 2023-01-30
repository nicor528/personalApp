import { useEffect, useReducer } from "react"
import { obtenerMesesDB } from "../../Apis/Firebase"
import { GastosDB } from "../../interfaces/interfaces"
import { GastosContext } from "./GastosContext"
import { GastosReducer } from "./GastosReducer"

const initial_state: GastosDB = {
    meses:  [{meses: ""}],
    gastos: [
        {
            gasto: "",
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

    

    const [gastosDB, dispatch] = useReducer (GastosReducer, initial_state)

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
        <GastosContext.Provider value={{gastosDB, setMesesenDB}}>
            {children}
        </GastosContext.Provider>
    )
}