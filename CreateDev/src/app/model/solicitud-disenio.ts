import { Pedido } from "./Pedido";
import { Artesano } from "./Artesanos";
import { Cliente } from "./Cliente";

export class solicitud_disenio {
    id: number = 0;
    cliente: Cliente = new Cliente();
    artesano: Artesano = new Artesano();
    pedido: Pedido = new Pedido();
    fecha: Date = new Date();
}