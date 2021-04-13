import { Factura, TipoPago }  from "./factura";


export default class Cliente {
    numero: string;
    razonSocial: string;
    cuit: number;

    facturas: Factura[];

    constructor(numero: string, razonSocial: string, cuit: number) {
        this.cuit = cuit;
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.facturas = [];
    }

    totalFacturadoXTipoPago = (tipoPago: TipoPago) => {
        let totalFact = this.facturas.reduce((acc: number,item: Factura)=>{
            if(tipoPago == item.tipoPago) {
                item.calcularTotalFinal();
                return acc + item.totalFinal;
            } else {
                item.calcularTotalFinal();
                return acc + item.totalFinal;
            }
        },0)
    }
}