import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>

        <h1>Sistema administardor de zoologicos</h1>
        <p>Bienvenido al sistema administrador de zoologicos, donde podras agregar informacion de nuevos zoologicos y visualizar la informacion de los zoologicos disponibles.</p>
        <ul>
          <li>Puede seleccionar la opcion de <code>Agregar zoologico</code> para agregar la informacion del zoologico nuevo.</li>
          <li>Puede seleccionar la opcion de <code>Mostrar zoologicos</code> para acceder a una tabla con la informacion de los zoologicos disponibles.</li>
          <li>Seleccione <code>Inicio</code> para volver a esta pagina.</li>
        </ul>

      </div>
    );
  }
}
