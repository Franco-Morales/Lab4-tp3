"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo) {
        var _this = this;
        this.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
            var totalKilometros = _this.hojaRutas.reduce(function (acc, item) {
                if ((item.fecha >= fechaDesde) && (item.fecha <= fechaHasta)) {
                    // console.log(item);
                    return acc + item.calcularTotalKilometros();
                }
                return {};
            }, 0);
            return totalKilometros;
        };
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.hojaRutas = [];
    }
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
