import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor) {
        return this._sacar(valor, 1.02);
    }
}