import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg';

export default class CardNota extends Component {

    apagar() {
        this.props.apagarNota(this.props.indice);
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.apagar.bind(this)} />
                    <p>{this.props.categoria}</p>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
}