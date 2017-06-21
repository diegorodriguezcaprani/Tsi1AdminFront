

export class Evento {
    constructor(
        public EventoId: Number,
        public Nombre: String,
        public ChannelName: String,
        public ValorLimite: String,
        public Operador: String,
        public TipoDato: number,
        public UtilizaMotivo: boolean,
        public MotivoId: number

    ) { }
}

