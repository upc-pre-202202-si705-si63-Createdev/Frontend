import { Pedido } from "./Pedido";
import { Artesanos } from "./Artesanos";
import { Clientes } from "./Clientes";

export class solicitud_disenio {
    id: number = 0;
    Cliente: Clientes = new Clientes();
    Artesano: Artesanos = new Artesanos();
    Pedido: Pedido = new Pedido();
    fecha: Date = new Date();
}