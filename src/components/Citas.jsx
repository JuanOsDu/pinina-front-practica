import React from 'react'
import Cita from './Cita';

const Citas = ({ citas, setCita }) => {
    return (
        citas.map((cita) => {
            return <Cita key={cita.id} citas={citas} cita={cita} setCita={setCita} ></Cita>
        })
    )
}




export default Citas;