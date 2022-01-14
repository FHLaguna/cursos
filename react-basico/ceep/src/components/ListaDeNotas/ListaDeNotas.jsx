import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

export default class ListaDeNotas extends Component {

    constructor(props) {
        super(props);
        this.state = {notas:[]};
    }

    componentDidMount() {
        this.props.notas.inscrever(this._atualizarNotas.bind(this));
    }

    _atualizarNotas(notas) {
        this.setState({...this.state,notas});
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.state.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota
                                indice={index}
                                apagarNota={this.props.apagarNota} 
                                categoria={nota.categoria} 
                                titulo={nota.titulo} 
                                texto={nota.texto} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}