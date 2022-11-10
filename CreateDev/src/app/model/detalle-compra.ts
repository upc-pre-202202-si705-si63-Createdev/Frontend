import { Producto } from 'src/app/model/Producto';
import { Compra } from 'src/app/model/Compra';

export class detalle_compra{
    id : number=0;
    idProducto : Producto = new Producto();
    precio_unitario : number=0;
    cantidad : number=0;
    idCompra : Compra = new Compra();
}