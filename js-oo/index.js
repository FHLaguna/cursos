import { Cliente } from './Cliente.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { Diretor } from './Funcionario/Diretor.js';
import { Gerente } from './Funcionario/Gerente.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(100);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1002);
contaCorrenteAlice.depositar(100);

contaCorrenteRicardo.transferir(25, contaCorrenteAlice);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
console.log(contaCorrenteRicardo);
console.log(contaPoupanca);
console.log(contaPoupanca.sacar(10));

const diretor = new Diretor("Rodrigo" , 10000, 12345678900);
diretor.cadastrarSenha('123456');

const gerente = new Gerente("Ricardo" , 5000, 12345678901);

console.log(SistemaAutenticacao.login(diretor, "123456"));
console.log(SistemaAutenticacao.login(new Cliente('Jonas', 12312312312), "123456"));
console.log(SistemaAutenticacao.login(contaCorrenteRicardo, "123456"));