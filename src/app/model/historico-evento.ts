export class HistoricoEvento {
    constructor(
        public Id: Number,
        public EventoId: Number,
        public SensorId: Number,
        public Fecha: Date,
        public ValorCritico: string,
        public Mensaje: string
    ) { }
}