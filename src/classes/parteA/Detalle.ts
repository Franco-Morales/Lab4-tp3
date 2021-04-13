import { HojaRuta } from "./HojaRuta";

export class Detalle {
    kmSalida: number;
    kmRegreso: number;
    horaSalida: number;
    horaRegreso: number;
    minutoSalida: number;
    minutoRegreso: number;

    hojaRuta: HojaRuta;

    constructor(kmSalida: number, kmRegreso: number, horaSalida: number, horaRegreso: number, minutoSalida: number, minutoRegreso: number, hojaRuta: HojaRuta) {
        this.horaRegreso = horaRegreso;
        this.horaSalida = horaSalida;
        this.kmRegreso = kmRegreso;
        this.kmSalida = kmSalida;
        this.minutoRegreso = minutoRegreso;
        this.minutoSalida = minutoSalida;
        this.hojaRuta = hojaRuta;
    }
}