"use strict";
exports.__esModule = true;
var Articulo = /** @class */ (function () {
    function Articulo(codigo, denominacion, precio, unidadMedida) {
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
        this.detalleFactura = [];
    }
    return Articulo;
}());
exports["default"] = Articulo;
