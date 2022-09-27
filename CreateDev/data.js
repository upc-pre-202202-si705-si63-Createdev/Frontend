
module.exports = function () {
  var data = {
    Usuarios: [
      {
        id: 1,
        correo: "knnth2312@createdev.com",
        contrasenia: "upc2022",
        nombre: "Kenneth",
        apellidos: "Guzman Benavidez",
        telefono: 879233892,
        direccion: "Av. Benavides 2340, Surco"
      }, {
        id: 2,
        correo: "sebas@createdev.com",
        contrasenia: "upc2022",
        nombre: "Sebastian",
        apellidos: "Torres",
        telefono: 35346234,
        direccion: "av. Cesar Canevaro 399"
      }, {
        id: 3,
        correo: "petercasanova@createdev.com",
        contrasenia: "upc2022",
        nombre: "Peter",
        apellidos: "Casanova",
        telefono: 567567567,
        direccion: "Av. Caminos del Inca 1404"
      }, {
        id: 4,
        correo: "sgodoy@createdev.com",
        contrasenia: "upc2022",
        nombre: "sergio",
        apellidos: "godoy",
        telefono: 939870566,
        direccion: "calle vilcanota 160"
      }, {
        id: 5,
        correo: "chupetintrujillo@createdev.com",
        contrasenia: "upc2022",
        nombre: "Chupetin",
        apellidos: "Trujillo",
        telefono: 43534656,
        direccion: "Prolongación Primavera 2390"
      }, {
        id: 6,
        correo: "pcastillito@createdev.com",
        contrasenia: "upc2022",
        nombre: "Peter",
        apellidos: "Castle Terrores",
        telefono: 34242343,
        direccion: "pasaje Sarratea 240"
      }, {
        id: 7,
        correo: "sideral@createdev.com",
        contrasenia: "upc2022",
        nombre: "sideral",
        apellidos: "carrion",
        telefono: 324242453,
        direccion: "comas cuadra 20"
      }, {
        id: 8,
        correo: "cookie_pounds@createdev.com",
        contrasenia: "upc2022",
        nombre: "Grecia",
        apellidos: "Ordoñez",
        telefono: 56465463,
        direccion: "Larcomar 2343"
      }, {
        id: 9,
        correo: "jhonny@createdev.com",
        contrasenia: "upc2022",
        nombre: "jhonny",
        apellidos: "deep",
        telefono: 987654321,
        direccion: " Av. Washington"
      }, {
        id: 10,
        correo: "kiara@createdev.com",
        contrasenia: "upc2022",
        nombre: "kiara",
        apellidos: "diaz",
        telefono: 65757557,
        direccion: " Av. wilson cuadra 3"
      }, {
        id: 11,
        correo: "bruno@createdev.com",
        contrasenia: "upc2022",
        nombre: "bruno",
        apellidos: "pinnasco",
        telefono: 345634534,
        direccion: " Av. canal 4"
      }, {
        id: 12,
        correo: "jorge@createdev.com",
        contrasenia: "upc2022",
        nombre: "jorge",
        apellidos: "curioso",
        telefono: 868768423,
        direccion: " Av. las americas "
      }, {
        id: 13,
        correo: "RamiroM2304@createdev.com",
        contrasenia: "upc2022",
        nombre: "Ramiro",
        apellidos: "Mezada",
        telefono: 45645645,
        direccion: " Av. Colonial 334"
      }
    ],
    Artesanos: [
      {
        id: 1,
        informacion: "responsable, creativo, trabajador",
        provincia: "Lambayeque",
        Usuarios: {
          id: 1
        }
      }, {
        id: 2,
        informacion: "Soy un artesano que le gusta mucho diseñar artesanías  para hacer notar la variedad artistica de mi pais",
        provincia: "Huancayo",
        Usuarios: {
          id: 2
        }
      }, {
        id: 3,
        informacion: "Me gusta mi trabajo y disfruto crear artesanias para todos mi clientes",
        provincia: "La Libertad",
        Usuarios: {
          id: 3
        }
      }, {
        id: 4,
        informacion: "un gran artesano con habilidades unicas",
        provincia: "junin",
        Usuarios: {
          id: 4
        }
          }, {
        id: 5,
        informacion: "Hombre dedico al arte peruano con ganas de expandir su arte a todo el mundo",
        provincia: "Moquegua",
        Usuarios: {
          id: 5
        }
      }

      ],
      Tipo_Producto:[
        {
          id:1,
          tipo:"Artesania"
        },{
          id:2,
          tipo:"Disenio"
        }
      ],
      Producto:[
        {
          id:1,
          nombre:"Destello Boreal",
          descripcion:"modelo grande color naranja",
          stock:4,
          peso:7.00,
          precio_unitario:13.00,
          material:"madera",
          fecha_creacion:"01/01/2022",
          lugar_fabricacion:"huanuco"     
        },{
          id:2,
          nombre:"Arte unico",
          descripcion:"modelo pequeño color rojizo oscuro",
          stock:6,
          peso:10.00,
          precio_unitario:18.00,
          material:"madera",
          fecha_creacion:"11/04/2022",
          lugar_fabricacion:"pasco"
        },{
          id:3,
          nombre:"mate-burilado4",
          descripcion:"bañado en oro color dorado",
          stock:1,
          peso:100.00,
          precio_unitario:250.00,
          material:"calabaza",
          fecha_creacion:"11/04/2022",
          lugar_fabricacion:"junin"
        },{
          id:4,
          nombre:"Dia Soleado",
          descripcion:"Mate burilado de forma ovalada, con colores amarillo, verde y azul",
          stock:10,
          peso:45.00,
          precio_unitario:23.00,
          material:"burilado",
          fecha_creacion:"10/08/2022",
          lugar_fabricacion:"libertad"
        },{
          id:5,
          nombre:"Una sola vez",
          descripcion:"Mate burilado de forma en forma de rosa, colores utilizados blanco, rojo y naranja",
          stock:16,
          peso:10.00,
          precio_unitario:27.00,
          material:"burilado",
          fecha_creacion:"10/09/2022",
          lugar_fabricacion:"Huancan"
        },{
          id:6,
          nombre:"Sol de primavera",
          descripcion:"Mate burilado de forma de basija, colores utilizados blanco, negro y amarillo",
          stock:5,
          peso:12.00,
          precio_unitario:29.00,
          material:"burilado",
          fecha_creacion:"05/09/2022",
          lugar_fabricacion:"Huancan"
        },{
          id:7,
          nombre:"mate-burilado-extra",
          descripcion:"modelo grande color rosado",
          stock:4,
          peso:7.00,
          precio_unitario:13.00,
          material:"madera",
          fecha_creacion:"01/01/2022",
          lugar_fabricacion:"libertad"
        },{
          id:8,
          nombre:"mate-burilado dios",
          descripcion:"modelo bañado en arena rosada ",
          stock:4,
          peso:10.00,
          precio_unitario:180.00,
          material:"calabaza",
          fecha_creacion:"01/01/2022",
          lugar_fabricacion:"piura"
        },{
          id:9,
          nombre:"mate-burilado dios",
          descripcion:"modelo bañado en arena rosada ",
          stock:4,
          peso:10.00,
          precio_unitario:18.00,
          material:"calabaza",
          fecha_creacion:"01/01/2022",
          lugar_fabricacion:"piura"
        },{
          id:10,
          nombre:"Mate burilado en fondo negro",
          descripcion:"En esta pieza se representan los paisajes andinos",
          stock:7,
          peso:10.00,
          precio_unitario:25.00,
          material:"burilado",
          fecha_creacion:"14/09/2022",
          lugar_fabricacion:"Acobamba"
        },{
          id:11,
          nombre:"Mate Selva Morado",
          descripcion:"En esta pieza se representan los animales de la selva",
          stock:2,
          peso:12.00,
          precio_unitario:200.00,
          material:"burilado",
          fecha_creacion:"04/07/2022",
          lugar_fabricacion:"Acobamba"
        },{
          id:12,
          nombre:"Mate Selva Virgen",
          descripcion:"En esta pieza se representa la flora de la selva peruana",
          stock:4,
          peso:14.00,
          precio_unitario:120.00,
          material:"burilado",
          fecha_creacion:"26/08/2022",
          lugar_fabricacion:"Acobamba"
        },{
          id:13,
          nombre:"Paseo del lago",
          descripcion:"Mate burilado de forma de vasija con tonos de azul claro y oscuro",
          stock: 10,
          peso:18.00,
          precio_unitario:20.00,
          material:"burilado",
          fecha_creacion:"07/04/2022",
          lugar_fabricacion:"Lambayeque"
        },{
          id:14,
          nombre:"Amanecer en los andes",
          descripcion:"Mate burilado de forma de tazón de colores cálidos con tonos oscuros",
          stock:5,
          peso:10.00,
          precio_unitario:25.00,
          material:"burilado",
          fecha_creacion:"08/02/2022",
          lugar_fabricacion:"Lambayeque"
        },{
          id:15,
          nombre:"Bastion del inca",
          descripcion:"Mate burilado de forma de tazón con colores monoliticos",
          stock:10,
          peso:10.00,
          precio_unitario:35.00,
          material:"burilado",
          fecha_creacion:"16/06/2022",
          lugar_fabricacion:"Lambayeque"}
    ],
    Clientes: [
      {
        Usuarios: {
          id: 6
        },
        dni: 56564563
      }, {
        Usuarios: {
          id: 7
        },
        dni: 43523123
      }, {
        Usuarios: {
          id: 8
        },
        dni: 56342345
      }, {
        Usuarios: {
          id: 9
        },
        dni: 54622111
      }, {
        Usuarios: {
          id: 10
        },
        dni: 32455323
      }, {
        Usuarios: {
          id: 11
        },
        dni: 34543225
      }, {
        Usuarios: {
          id: 12
        },
        dni: 67844234
      },
      {
        Usuarios: {
          id: 13
        },
        dni: 68744555
      }
    ],
    Tipo_Comprobante: [
      {
        id: 1,
        tipo: "boleta"
      }, {
        id: 2,
        tipo: "factura"
      }
    ],
    
    Solicitud_Diseño: [
      {
        id: 1,
        Clientes: {
          Usuarios: {
            id: 3
          }
        },
        Artesanos: {
          Usuarios: {
            id: 7
          }
        },
        Pedido: {
          id: 1
        },
        fecha: "23/03/2022"
      }
    ],
    Pedido: [
      {
        id: 101,
        estado: "Aceptado",
        nombre: "Catedral de Lima",
        caracteristicas: "Me gustaria que tenga colores intensos como el rojo y que resalte mucho los bordes negro"
      },
      {
        id: 102,
        estado: "Pendiente",
        nombre: "La dama pintada",
        caracteristicas: "Quisiera que tenega tonos rojos y morado y representen a una mujer"
      },
      {
        id: 103,
        estado: "Pendiente",
        nombre: "Hermanos del lago",
        caracteristicas: "Quiero que tenga diferentes tono de azul y celeste con niños en un lago jugando"
      },
      {
        id: 104,
        estado: "Rechazado",
        nombre: "Amanecer Rojo",
        caracteristicas: "Quiero un cielo rojo con toques de amarillo y naranja con gente gritando"
      },
      {
        id: 105,
        estado: "Aceptado",
        nombre: "Cueva de los amantes",
        caracteristicas: "Deseo que tenga colores calidos con tonos oscuros que simbolizen a una pereja"
      },
      {
        id: 106,
        estado: "Aceptado",
        nombre: "Trono del Inca",
        caracteristicas: "Quiero que sea monocromatico que muestre la silueta de un inca en su trono"
      }
    ],
    Compra: [
      {
        id: 1,
        nombre_Cliente: "Alexandra",
        cantidad_total: 1,
        precio_total: 23.00,
        peso_total: 5,
        Tipo_Comprobante: 1,
        fecha_cancelacion: "23-04-2022",
        Solicitud_Diseño: 0
      },
      {
        id: 2,
        nombre_Cliente: "Ramiro",
        cantidad_total: 4,
        precio_total: 128.00,
        peso_total: 10,
        Tipo_Comprobante: 2,
        fecha_cancelacion: "28-07-2022",
        Solicitud_Diseño: 0
      },
      {
        id: 3,
        nombre_Cliente: "Felicia",
        cantidad_total: 2,
        precio_total: 56.00,
        peso_total: 8,
        Tipo_Comprobante: 1,
        fecha_cancelacion: "15-07-2022",
        Solicitud_Diseño: 0
      }
    ],
    Detalle_Compra: [
      {
        id: 1,
        Producto: {
          id: 14
        },
        cantidad: 1,
        Compra: {
          id: 1
        }
      }
    ]
  }
  return data
}
