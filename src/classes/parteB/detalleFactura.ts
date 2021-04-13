import Articulo from "./articulo";
import { Factura } from "./factura";

export default class DetalleFactura {
    cantidad: number;
    subtotal: number;

    factura: Factura;
    art: Articulo;

    constructor(cantidad: number, factura: Factura, art: Articulo) {
        this.cantidad = cantidad;
        this.subtotal = 0;
        this.factura = factura;
        this.art = art; 
    }

    calcularSubTotal = () => {
        this.subtotal = this.art.precio*this.cantidad;
    }
}