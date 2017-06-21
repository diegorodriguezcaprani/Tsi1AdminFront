export class ChatMsg {
    constructor(
        public ChatId: Number,
        public UsuarioId: Number,
        public fecha: Date,
        public Mensaje: String,
        public Nombre: String
    ) { }
}