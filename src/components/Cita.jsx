import { Card, Button } from 'react-bootstrap';
import React, { Fragment } from 'react';
import '../css/citas.css'

const Cita = ({ cita, citas, setCita }) => {
    const borrarCita = (id) => {
        const citasN = citas.filter((cita) => cita.id !== id);
        setCita(citasN)
    }
    return (
        <Fragment>


            <Card className="cardC" style={{ width: '18rem' }}> <img alt="Imagen de la cita" src={require('../img/cita1.jpg')} className="remove-bg" style={{ borderRadius: 12, margin: 10, height: "100%" }} />
                <Card.Body style={{ color: "black" }}>
                    <Card.Title>Cita {cita.tipo}</Card.Title>
                    <Card.Text>
                        {cita.descripcion}.
                        <p>{cita.correo}</p>
                    </Card.Text>
                    <Button onClick={() => borrarCita(cita.id)} >Eliminar</Button>
                </Card.Body></Card>


        </Fragment>

    )
};


export default Cita;