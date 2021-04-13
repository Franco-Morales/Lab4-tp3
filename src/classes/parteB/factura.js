"use strict";
exports.__esModule = true;
exports.TipoPago = exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura(letra, numero, recargo, tipoPago, fecha, cliente) {
        var _this = this;
        this.calcularTotalItems = function () {
            _this.totalItems = _this.detalleFactura.reduce(function (acc, item) {
                item.calcularSubTotal();
                return acc + item.subtotal;
            }, 0);
        };
        this.calcularTotalFinal = function () {
            _this.totalFinal = _this.totalItems + _this.recargo;
        };
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
    return Factura;
}());
exports.Factura = Factura;
var TipoPago;
(function (TipoPago) {
    TipoPago["E"] = "Efectivo";
    TipoPago["TC"] = "Tarjeta Credito";
    TipoPago["TD"] = "Tarjeta Debito";
    TipoPago["CC"] = "Cuenta Corriente";
    TipoPago["TR"] = "Transferencia";
})(TipoPago || (TipoPago = {}));
exports.TipoPago = TipoPago;
