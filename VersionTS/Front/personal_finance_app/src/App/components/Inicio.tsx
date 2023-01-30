import { useContext, useEffect } from "react"

import { DataBaseContext } from "../contexts/Database/DataBaseContext"

export default function Inicio () {

    const { dataBase, gastosXMes, ingresoXMes } = useContext(DataBaseContext)

    useEffect(() => {
        gastosXMes("noviembre 22")
        ingresoXMes("noviembre 22")
    },[])


    console.log(dataBase)

    return(
        <>
        </>
    )
}