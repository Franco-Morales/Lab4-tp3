import DetalleFactura from "./detalleFactura";

export default class Articulo {
    codigo: number;
    denominacion: string;
    precio: number;
    unidadMedida: string;

    detalleFactura: DetalleFactura[];

    constructor(codigo: number, denominacion: string, precio: number, unidadMedida: string) {
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
        this.detalleFactura = [];
    }
}