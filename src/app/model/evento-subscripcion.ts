export class EventoSubscripcion {
    constructor(
        public Id: Number,
        public CentroLatitud: Number,
        public CentroLongitud: Number,
        public Radio: Number,
        public EventoId: Number,
        public UsuarioId: Number
    ) { }
}