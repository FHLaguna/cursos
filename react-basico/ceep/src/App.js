import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaDeCategorias";
import ArrayDeNotas from "./dados/ArrayDeNotas";
import Categorias from "./dados/Categorias";

class App extends Component {
  constructor() {
    super();
    this.notas = new ArrayDeNotas();
    this.categorias = new Categorias();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas} />
        </main>
      </section>
    );
  }
}

export default App;