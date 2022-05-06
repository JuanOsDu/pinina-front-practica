import React, {useState} from 'react';
import {Switch} from '@mui/material';
const Permiso = ({permiso})=>{
    const [activo, setActivo] = useState(permiso.activo);
    return(<tr>
        <td>{permiso.modulo}</td>
        <td>{permiso.campo}</td>
        <td><Switch checked={activo} onChange={()=>setActivo(!activo)}></Switch></td>
    </tr>)
}






export default Permiso;