import React, { Component } from "react";
import "./AddZoo.css";
import { createZoo, handleSaveToPC } from '../../services/ZooService'

export class AddZoo extends Component {
    static displayName = AddZoo.name;

    constructor(props) {
        super(props);
        this.state = { zoo: {} };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let zoo = this.state.zoo

        if (event.target.name === 'zooCountry') {
            zoo.Pais = event.target.value;
        } else if (event.target.name === 'zooName') {
            zoo.Nombre = event.target.value;
        } else if (event.target.name === 'zooPhone') {
            zoo.Telefono = event.target.value;
        } else if (event.target.name === 'zooSite') {
            zoo.Sitio = event.target.value;
        }
        this.setState({ zoo })
    }

    handleSubmit(event) {
        event.preventDefault();

        // sent the data as json to the server API
        createZoo(this.state.zoo)
            .then(response => {
                handleSaveToPC(response, `submission-${response.nombre.replace(/ /g, "_")}`);
            });

        // clear the input spaces
        event.target.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    {/* <!-- Add Zoo's Country Name --> */}
                    <label htmlFor="zooCountry" className="form-label">Pais del zoologico:</label>
                    <input type="text" name="zooCountry" className="form-control" id="zooCountry" autoComplete="off" onChange={this.handleChange} />
                    {/* <!-- Add Zoo's Name --> */}
                    <label htmlFor="zooName" className="form-label">Nombre del zoologico:</label>
                    <input type="text" name="zooName" className="form-control" id="zooName" autoComplete="off" onChange={this.handleChange} />
                    {/* <!-- Add Zoo's Phone Number --> */}
                    <label htmlFor="zooPhone" className="form-label">Numero de telefono del zoologico:</label>
                    <input type="text" name="zooPhone" className="form-control" id="zooPhone" autoComplete="off" onChange={this.handleChange} />
                    {/* <!-- Add Zoo's Website --> */}
                    <label htmlFor="zooSite" className="form-label">Sitio web del zoologico:</label>
                    <input type="text" name="zooSite" className="form-control" id="zooSite" autoComplete="off" onChange={this.handleChange} />
                </div>
                <input type="submit" value="Agregar Zoologico" className="btn btn-outline-success" />
            </form>
        );
    }
}
