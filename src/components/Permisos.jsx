import React from 'react'

import '../css/permisos.css'
import Permiso from './Permiso';
const Permisos = ({ permisos }) => {
    return (
        <table className='permisos'>
            <thead>  <tr>
                <th>Modulo</th>
                <th>Campo</th>
                <th>Estado</th>

            </tr></thead>
            <tbody>  {
                permisos.map((permiso) => {
                    return <Permiso key={permiso.id} permiso={permiso}></Permiso>
                })
            }</tbody>
            <tfoot>
                <button style={{backgroundColor: "rgb(250, 211, 82)", borderRadius: "30px", position: "left"}}>Guardar Cambios</button>
            </tfoot>



        </table>
    )
}


export default Permisos;