import { useEffect, useReducer } from "react"
import { getGastosXMes, getIngresosXMes, obtenerMesesDB } from "../../Apis/Firebase";
import { DataBase, Gasto, Ingreso } from "../../interfaces/interfaces"
import { DataBaseContext } from "./DataBaseContext";
import { DataBaseReducer } from "./DataBaseReducer"

const initial_state: DataBase = {
    ingresos : [
        {
            ingreso: "",
            valor: 0
        }
    ],
    gastos: [
        {
            gasto: "",
            valor: 0
        }
    ]
}

type props = {
    children : JSX.Element | JSX.Element[]
}

type Meses = {
    meses : string
}

export default function ({children} : props ) {

    const [ dataBase, dispatch ] = useReducer (DataBaseReducer, initial_state)

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
    
    

    const gastosXMes = async (mes : string) => {
        let gastos: Gasto[];
        await getGastosXMes(mes).then(async (docs) => {
            gastos = docs
            await DISgastosXMes(gastos)
        })
    }

    const ingresoXMes = async (mes : string) => {
        let ingresos: Ingreso[]
        await getIngresosXMes(mes).then (async (docs) => {
            ingresos = docs
            await DISingresosXMES(ingresos)
        })
    }

    const DISgastosXMes = async (gastos : Gasto[]) => {
        dispatch({ type: "getGastosXmes", payload: { gastos } })
    }

    const DISingresosXMES = ( ingresos : Ingreso[] ) => {
        dispatch({ type: "getIngresosXmes", payload: {ingresos} })
    }


    return(
        <DataBaseContext.Provider value={{dataBase, gastosXMes, ingresoXMes}}>
            {children}
        </DataBaseContext.Provider>
    )


}