import CandleColor from '../enums/CandleColor';

// Define a classe Candles
export default class Candles {

    // Declara as propriedades da classe
    low: number;
    high: number;
    open: number;
    close: number;
    color: CandleColor;
    finalDateTime: Date;
    values: number[];
    currency: string;

    // Construtor da classe
    constructor(currency: string) {
        // Inicializa as propriedades
        this.currency = currency;
        this.low = Infinity; // Inicializa com Infinity para que qualquer valor seja menor que o inicial
        this.high = 0; // Inicializa com 0 para que qualquer valor seja maior que o inicial
        this.close = 0;
        this.open = 0;
        this.values = []; // Array para armazenar os valores 
        this.color = CandleColor.UNDETERMINED; // Inicializa a cor como indeterminada
    }

    // Método para adicionar um valor
    addValue(value: number) {
        this.values.push(value); // Adiciona o valor ao array de valores

        // Se for o primeiro valor, define como valor de abertura
        if (this.values.length === 1) {
            this.open = value;
        }

        // Se o valor for menor que o atual menor valor, atualiza o menor valor
        if (value < this.low) {
            this.low = value;
        }

        // Se o valor for maior que o atual maior valor, atualiza o maior valor
        if (value > this.high) {
            this.high = value;
        }
    }

    // Método para fechar
    closeCandle() {
        // Se houver valores 
        if (this.values.length > 0) {
            // Define o último valor como valor de fechamento
            this.close = this.values[this.values.length - 1];
            // Define a data e hora de fechamento como o momento atual
            this.finalDateTime = new Date();

            // Define a cor com base nos valores de abertura e fechamento
            if (this.open > this.close) {
                this.color = CandleColor.RED;
            } else if (this.close > this.open) {
                this.color = CandleColor.BLUE;
            }
        }
    }

    // Método para converter em um objeto simples, excluindo a lista de valores
    toSimpleObject() {
        const { values, ...obj } = this;
        return obj;
    }
}