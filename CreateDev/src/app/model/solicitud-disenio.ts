import { Pedido } from "./Pedido";
import { Artesanos } from "./Artesanos";
import { Clientes } from "./Clientes";

export class solicitud_disenio {
    id: number = 0;
    //cliente: Clientes = new Clientes();
    //artesano: Artesanos = new Artesanos();
    pedido: Pedido = new Pedido();
    fecha: string="";
}