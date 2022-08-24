import React, { useState, useEffect } from 'react';
import { getAllZoos, handleSaveToPC } from '../../services/ZooService'
import "./ShowZoos.css";

// export class ShowZoos extends Component {
//     static displayName = ShowZoos.name;

//     constructor(props) {
//         super(props);

//         this.state = { zoo: {} };
//     }

//     getAllZoos(event) {
//         let zoo = this.state.zoo;
//         getAllZoos()
//             .then(zoos => {
//                 console.log(zoos)
//                 zoo = zoos;
//             });
//     }

//     render() {
//         return (
// <div>
//     <h1>Información sobre los zoologicos disponibles</h1>
//     <table className="table table-striped">
//         <thead>
//             <tr>
//                 <th>Pais</th>
//                 <th>Nombre</th>
//                 <th>Telefono</th>
//                 <th>Sitio Web</th>
//             </tr>
//         </thead>
//         <tbody>
//             {data.map((item, i) => (
//                 <tr key={i}>
//                     <td>{item.userId}</td>
//                     <td>{item.id}</td>
//                     <td>{item.title}</td>
//                     <td>{item.body}</td>
//                 </tr>
//             ))}
//             {/* <tr>
//                 <td>Anom</td>
//                 <td>19</td>
//                 <td>Male</td>
//                 <td>Male</td>
//             </tr>
//             <tr>
//                 <td>Megha</td>
//                 <td>19</td>
//                 <td>Female</td>
//                 <td>Female</td>
//             </tr>
//             <tr>
//                 <td>Subham</td>
//                 <td>25</td>
//                 <td>Male</td>
//                 <td>Male</td>
//             </tr> */}
//         </tbody>
//     </table>
//     {/* <Users users={this.state.users}></Users> */}
// </div>
//         );
//     }
// }

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
        <>
            {/* <tbody>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
            </tbody> */}
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
                {/* <Users users={this.state.users}></Users> */}
            </div>
        </>
    );
}

export default ShowZoos;