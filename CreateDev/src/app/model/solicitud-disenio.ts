import { Pedido } from "./Pedido";
import { Artesano } from "./Artesanos";
import { Cliente } from "./Cliente";

export class solicitud_disenio {
    id: number = 0;
    //cliente: Clientes = new Clientes();
    //artesano: Artesanos = new Artesanos();
    cliente: Cliente = new Cliente();
    artesano: Artesano = new Artesano();
    pedido: Pedido = new Pedido();
    fecha: string = "";
}