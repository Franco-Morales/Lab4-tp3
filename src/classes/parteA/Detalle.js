"use strict";
exports.__esModule = true;
exports.Detalle = void 0;
var Detalle = /** @class */ (function () {
    function Detalle(kmSalida, kmRegreso, horaSalida, horaRegreso, minutoSalida, minutoRegreso, hojaRuta) {
        this.horaRegreso = horaRegreso;
        this.horaSalida = horaSalida;
        this.kmRegreso = kmRegreso;
        this.kmSalida = kmSalida;
        this.minutoRegreso = minutoRegreso;
        this.minutoSalida = minutoSalida;
        this.hojaRuta = hojaRuta;
    }
    return Detalle;
}());
exports.Detalle = Detalle;
