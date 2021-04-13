"use strict";
exports.__esModule = true;
var DetalleFactura = /** @class */ (function () {
    function DetalleFactura(cantidad, factura, art) {
        var _this = this;
        this.calcularSubTotal = function () {
            _this.subtotal = _this.art.precio * _this.cantidad;
        };
        this.cantidad = cantidad;
        this.subtotal = 0;
        this.factura = factura;
        this.art = art;
    }
    return DetalleFactura;
}());
exports["default"] = DetalleFactura;
