import  { HojaRuta } from "./classes/parteA/HojaRuta";
import { Detalle } from "./classes/parteA/Detalle";
import { Vehiculo } from "./classes/parteA/Vehiculo";

let vehiculo01 = new Vehiculo("AAA000","Chevrolet","Corsa");

let hojaRuta01 = new HojaRuta(new Date('10/16/2020 08:39'), 1234, vehiculo01);

let detalle01 = new Detalle(10,80,17,55,20,55, hojaRuta01);
let detalle02 = new Detalle(80,120,15,12,20,10, hojaRuta01);
let detalle03 = new Detalle(120,400,8,12,22,9, hojaRuta01);

hojaRuta01.detalles.push(detalle01);
hojaRuta01.detalles.push(detalle02);
hojaRuta01.detalles.push(detalle03);

let hojaRuta02 = new HojaRuta(new Date('11/05/2020 12:32'), 1476, vehiculo01);

let detalle04 = new Detalle(100, 160, 7, 21, 11, 57, hojaRuta02);
let detalle05 = new Detalle(60, 120, 10, 12, 6, 35, hojaRuta02);
let detalle06 = new Detalle(140, 170, 6, 10, 55, 7, hojaRuta02);

hojaRuta02.detalles.push(detalle04);
hojaRuta02.detalles.push(detalle05);
hojaRuta02.detalles.push(detalle06);

let hojaRuta03 = new HojaRuta(new Date('12/05/2020 09:35'), 1679, vehiculo01);

let detalle07 = new Detalle(150, 200, 9, 15, 17, 32, hojaRuta03);
let detalle08 = new Detalle(80, 110, 8, 13, 14, 23, hojaRuta03);
let detalle09 = new Detalle(100, 180, 10, 22, 33, 8, hojaRuta03);

hojaRuta03.detalles.push(detalle07);
hojaRuta03.detalles.push(detalle08);
hojaRuta03.detalles.push(detalle09);

vehiculo01.hojaRutas.push(hojaRuta01);
vehiculo01.hojaRutas.push(hojaRuta02);
vehiculo01.hojaRutas.push(hojaRuta03);

let desde = new Date('10/14/2020 13:00');
let hasta = new Date('12/14/2020 22:00');

let totalKm = vehiculo01.calcularTotalKilometrosRecorridos(desde,hasta);

let p = document.getElementById('respA');
p.innerHTML = `El vehículo ${vehiculo01.modelo} patente ${vehiculo01.patente}, recorrio un total de ${totalKm}km entre ${desde} y ${hasta}`;