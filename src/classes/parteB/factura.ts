import Cliente from "./cliente";
import DetalleFactura from "./detalleFactura";

class Factura {
    letra: string;
    numero: number;
    recargo: number;
    tipoPago: TipoPago;
    totalItems: number;
    totalFinal: number;
    fecha: Date;

    cliente: Cliente;
    detalleFactura: DetalleFactura[];

    constructor(letra: string, numero: number,  recargo: number, tipoPago: TipoPago, fecha: Date, cliente: Cliente) {
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.totalItems = 0;
        this.totalFinal = 0;
        this.fecha = fecha;
        this.cliente = cliente;
        this.detalleFactura = [];
    }

    calcularTotalItems = () => {
        this.totalItems = this.detalleFactura.reduce((acc: number, item: DetalleFactura)=>{
            item.calcularSubTotal();
            return acc + item.subtotal;
        },0);
    }

    calcularTotalFinal = () => {
        this.totalFinal = this.totalItems + this.recargo;
    }
}

enum TipoPago {
    E = "Efectivo",
    TC = "Tarjeta Credito",
    TD = "Tarjeta Debito",
    CC = "Cuenta Corriente",
    TR = "Transferencia"
}

export { Factura, TipoPago};