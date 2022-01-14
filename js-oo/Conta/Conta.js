export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error('Não pode instanciar Conta!');
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(val) {
        if (val instanceof Cliente) {
            this._cliente = val;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }
    
    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (valorSacado <= this._saldo) {
            this._saldo -= valorSacado;
        }
        return this._saldo;
    }

    sacar(valor) {
        throw new Error('Este método é abstrato!');
    }
    
    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}