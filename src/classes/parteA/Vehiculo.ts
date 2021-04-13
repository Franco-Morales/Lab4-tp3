import { HojaRuta } from "./HojaRuta";


export class Vehiculo {
    patente: string;
    marca: string;
    modelo: string;

    hojaRutas: HojaRuta[];

    constructor(patente: string, marca: string,modelo: string) { 
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.hojaRutas = [];
    }

    calcularTotalKilometrosRecorridos = (fechaDesde: Date, fechaHasta: Date) => {
        
        let totalKilometros = this.hojaRutas.reduce((acc,item)=>{
            if ( (item.fecha >= fechaDesde) && (item.fecha <= fechaHasta) ) {
                // console.log(item);
                return acc + item.calcularTotalKilometros();
            }
            return {}
        },0);

        return totalKilometros;
    }
}