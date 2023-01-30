export interface Gasto {
    id?: string;
    gasto: string;
    valor: number
}

export interface Ingreso {
    id?: string;
    ingreso: string;
    valor: number
}

export interface IngresosDB{
    meses?: MesesEnDB[];
    ingresos: Ingreso[]
}

export interface GastosDB{
    meses?: MesesEnDB[];
    gastos: Gasto[]
}

export interface MesesEnDB {
    meses: string
}

export interface DataBase {
    meses?: MesesEnDB[];
    ingresos: Ingreso[];
    gastos: Gasto[]
}

