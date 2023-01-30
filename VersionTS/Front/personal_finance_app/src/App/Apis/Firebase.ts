import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import { Gasto, Ingreso } from "../interfaces/interfaces";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

/*export const obtenerMesesDB = async () => {
    
    const refCol = await collection(DB, "ingresos y gastos")
    return(
        new Promise((res, rej) => {
            getDocs(refCol).then((snapshot) => {
                let meses = snapshot.docs.map((docs) => {
                    return{
                        mes: docs.id as string
                    } as MesesEnDB
                })
                res(meses)
            }).catch(error=>{
                rej(console.log("Error al traer los resultados", error))})
        })
    )
}*/

export type Meses = {
    meses: string
}

export async  function obtenerMesesDB () : Promise<Meses[]>{
    const refCol = await collection(DB, "ingresos y gastos") 
        return new Promise ((res, rej) => {
            getDocs(refCol).then((snapshot) => {
                let meses = snapshot.docs.map((docs) => {
                    return{
                        meses: docs.id
                    } 
                    
                })
                res(meses); console.log(meses)              
            })
        })
    //)
}

export async function getGastosXMes ( mes: string ) : Promise<Gasto[]> {
    let gastos;
    const refCol = await collection(DB, "ingresos y gastos")
    const refCol2 = await collection(refCol,mes, "gastos")
        return new Promise ((res, rej) => {
            getDocs(refCol2).then( (snapshot) => {
                gastos = snapshot.docs.map((docs) => {
                let valor = docs.data()
                    return{
                        gasto : docs.id,
                        valor : valor.valor
                    }
                }); res(gastos); console.log(gastos)
            } )
        })
}

export async function getIngresosXMes ( mes: string ) : Promise<Ingreso[]> {
    let ingresos;
    const refCol = await collection(DB, "ingresos y gastos")
    const refCol2 = await collection(refCol,mes, "ingresos")
        return new Promise ((res, rej) => {
            getDocs(refCol2).then( (snapshot) => {
                ingresos = snapshot.docs.map((docs) => {
                let valor = docs.data()
                    return{
                        ingreso : docs.id,
                        valor : valor.valor
                    }
                }); res(ingresos); console.log(ingresos)
            } )
        })
}





