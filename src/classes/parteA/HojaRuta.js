"use strict";
exports.__esModule = true;
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta(fecha, numero, vehiculo) {
        this.fecha = fecha;
        this.numero = numero;
        this.detalles = [];
        this.vehiculo = vehiculo;
    }
    HojaRuta.prototype.calcularTotalKilometros = function () {
        var kmRecorridos = this.detalles.reduce(function (acc, item) {
            return acc + (item.kmRegreso - item.kmSalida);
        }, 0);
        return kmRecorridos;
    };
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;
