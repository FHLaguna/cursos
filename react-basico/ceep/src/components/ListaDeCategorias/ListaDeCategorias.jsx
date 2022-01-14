import { Component } from "react";
import './estilo.css';

export default class ListaDeCategorias extends Component {

    constructor(props) {
        super(props);
        this.state = {categorias:[...this.props.categorias.categorias]};
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._atualizarCategorias.bind(this));
    }

    _atualizarCategorias(categorias) {
        this.setState({...this.state,categorias});
    }

    _handleEventoInput(e) {
        if (e.key === 'Enter') {
            this.props.adicionarCategoria(e.target.value);
        }
    }

    render() {

        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                {this.state.categorias.map((categoria, index) => {
                    return (
                    <li key={index} className="lista-categorias_item">
                        {categoria}
                    </li>
                    );
                })}
                </ul>
                <input
                type="text"
                className="lista-categorias_input"
                placeholder="Adicionar Categoria"
                onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }

}