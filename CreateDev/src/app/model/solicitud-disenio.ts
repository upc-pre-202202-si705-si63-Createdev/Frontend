import { Pedido } from "./Pedido";
import { Artesanos } from "./Artesanos";
import { Cliente } from "./Cliente";

export class solicitud_disenio {
    id: number = 0;
    cliente: Cliente = new Cliente();
    artesano: Artesanos = new Artesanos();
    pedido: Pedido = new Pedido();
    fecha: Date = new Date();
}