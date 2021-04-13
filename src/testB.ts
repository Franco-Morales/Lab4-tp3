import Cliente from "./classes/parteB/cliente";
import { Factura, TipoPago} from "./classes/parteB/factura";
import DetalleFactura from "./classes/parteB/detalleFactura";
import Articulo from "./classes/parteB/articulo";

let artLeche = new Articulo(123,"Leche",110,"litro");
let artQueso = new Articulo(234,"Queso",260,"gramo");
let artPan = new Articulo(345,"Pan",100,"gramo");
let artFideos = new Articulo(678,"Fideos",95,"gramo");
let artCerveza = new Articulo(891,"Cerveza",250,"litro");

let cliente01 = new Cliente("1234abc",'Monotributista',20123456788);

let factura01 = new Factura("A",1,100,TipoPago.E,new Date("01/12/2021 13:00"),cliente01);

let detArt01 = new DetalleFactura(2,factura01,artLeche);
let detArt02 = new DetalleFactura(4,factura01,artCerveza);

factura01.detalleFactura.push(detArt01);
factura01.detalleFactura.push(detArt02);

// factura01.calcularTotalItems();
// factura01.calcularTotalFinal();

let factura02 = new Factura("B",2,200,TipoPago.CC,new Date("01/24/2021 14:56"),cliente01);

let detArt03 = new DetalleFactura(4,factura02,artFideos);
let detArt04 = new DetalleFactura(1,factura02,artQueso);

factura02.detalleFactura.push(detArt03);
factura02.detalleFactura.push(detArt04);

// factura02.calcularTotalItems();
// factura02.calcularTotalFinal();

let factura03 = new Factura("B",2,200,TipoPago.CC,new Date("01/24/2021 14:56"),cliente01);

let detArt05 = new DetalleFactura(2,factura03,artPan);
let detArt06 = new DetalleFactura(6,factura03,artCerveza);

factura03.detalleFactura.push(detArt05);
factura03.detalleFactura.push(detArt06);

// factura03.calcularTotalItems();
// factura03.calcularTotalFinal();

cliente01.facturas.push(factura01);
cliente01.facturas.push(factura02);
cliente01.facturas.push(factura03);

let ulElement = document.getElementById("respB");

cliente01.facturas.forEach(factura => {
    factura.calcularTotalItems();
    factura.calcularTotalFinal();

    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.innerHTML += `EL cliente n°${cliente01.numero}, factura n°${factura.numero}, total : ${factura.totalFinal}`;
});