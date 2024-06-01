import React from "react";
import { Form } from "react-router-dom";
import '../styles/Contacto.css';

export default class Contacto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            mensaje: ""
        };

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
    }

    submitted(event) {
        alert("Gracias por tu mensaje, " + this.state.nombre);
        event.preventDefault();
    }

    changed(event) {
        this.setState({
            nombre: event.target.value
        });
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-center mb-5 mt-5">Contáctanos!</h1>
                <form onSubmit={this.submitted} className="contact d-flex flex-column">
                    <input type="text" placeholder="Nombre" className="p-1 m-2" onChange={this.changed}></input>
                    <input type="text" placeholder="Correo" className="p-1 m-2"></input>
                    <input type="text" placeholder="Asunto" className="p-1 m-2"></input>
                    <textarea placeholder="Mensaje" rows={8} className="p-1 m-2"></textarea>
                    <button type="submit" className="p-1 m-2 btn btn-dark">Enviar mensaje</button>
                </form>
            </div>
        );
    }
}
