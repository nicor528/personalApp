import Inicio from "./components/Inicio"
import DataBaseProvider from "./contexts/Database/DataBaseProvider"
import GastosProvider from "./contexts/Gastos/GastosProvider"
import IngresosProvider from "./contexts/Ingresos/IngresosProvider"


export default function PersonapApp () {

    return(
        <div>
            <DataBaseProvider>

                <h1>
                    En desarrollo!
                </h1>
                <Inicio></Inicio>

            </DataBaseProvider>
        </div>
    )
} 