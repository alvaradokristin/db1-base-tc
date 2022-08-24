import React, { useState, useEffect } from 'react';
import { getAllZoos, handleSaveToPC } from '../../services/ZooService'
import "./ShowZoos.css";

function ShowZoos() {
    const [data, getData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        getAllZoos()
            .then((res) =>
                res.json())

            .then((response) => {
                handleSaveToPC(response, "all_available_zoos");
                getData(response);
            })

    }

    return (
        <div>
            <h1 className='mb-5'>Información sobre los zoologicos disponibles</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Pais</th>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Sitio Web</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.pais}</td>
                            <td>{item.nombre}</td>
                            <td>{item.telefono}</td>
                            <td>{item.sitio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowZoos;