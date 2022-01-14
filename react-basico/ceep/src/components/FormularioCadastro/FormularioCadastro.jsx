import React, { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = '';
        this.texto = '';
        this.categoria = 'Sem categoria';
        this.state = {categorias:[...this.props.categorias.categorias]};
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._atualizarCategorias.bind(this));
    }

    _atualizarCategorias(categorias) {
        this.setState({...this.state,categorias});
    }

    _handleMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _handleMudancaCategoria(evento) {
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    render() {
        const categorias = this.props.categorias.categorias.map((categ, index) => {
            return (<option key={index} value={categ}>{categ}</option>)
        })

        return (
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <select
                    onChange={this._handleMudancaCategoria.bind(this)} 
                    className="form-cadastro_input">
                    <option>Sem categoria</option>
                    {categorias}
                </select>
                <input
                type="text"
                placeholder="Título"
                className="form-cadastro_input"
                onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                rows={5}
                placeholder="Escreva sua nota..."
                className="form-cadastro_input"
                onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                Criar Nota
                </button>
            </form>
        );
    }
}