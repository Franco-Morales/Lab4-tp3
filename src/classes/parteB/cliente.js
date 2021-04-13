"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(numero, razonSocial, cuit) {
        var _this = this;
        this.totalFacturadoXTipoPago = function (tipoPago) {
            var totalFact = _this.facturas.reduce(function (acc, item) {
                if (tipoPago == item.tipoPago) {
                    item.calcularTotalFinal();
                    return acc + item.totalFinal;
                }
                else {
                    item.calcularTotalFinal();
                    return acc + item.totalFinal;
                }
            }, 0);
        };
        this.cuit = cuit;
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.facturas = [];
    }
    return Cliente;
}());
exports["default"] = Cliente;
