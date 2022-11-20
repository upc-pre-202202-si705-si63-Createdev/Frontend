import { Tipo_Producto } from './tipo-producto';
import { Artesano } from './Artesanos';

export class Producto {
    idProducto: number = 0;
    nameProducto: string = "";
    descripcionProducto: string = ""
    stockProducto: number = 0;
    pesoProducto: number = 0;
    precioProducto: number = 0;
    materialProducto: string = "";
    fechaProducto: string = "";
    lugarfabricacionProducto: string = "";
    tipoproductoProducto: Tipo_Producto = new Tipo_Producto();
    artesanoProducto: Artesano = new Artesano();
}