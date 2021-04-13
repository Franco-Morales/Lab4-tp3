import { Detalle } from "./Detalle";
import { Vehiculo } from "./Vehiculo";


export class HojaRuta {
    fecha: Date;
    numero: number;

    vehiculo: Vehiculo;
    detalles: Detalle[];

    constructor(fecha: Date, numero: number, vehiculo: Vehiculo) { 
        this.fecha = fecha;
        this.numero = numero;
        this.detalles = [];
        this.vehiculo = vehiculo;
    }

    calcularTotalKilometros(): number {
        let kmRecorridos = this.detalles.reduce((acc,item)=>{
            return acc + (item.kmRegreso-item.kmSalida);
        },0);
        return kmRecorridos;
    }
}