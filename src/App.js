
import './App.css'
import 'bootswatch/dist/quartz/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Added this :boom:

import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Citas from './components/Citas';
import Draggable from 'react-draggable'
import Permisos from './components/Permisos';

function App() {

  

  const [permisos, setPermiso] = useState([
    {
      id: uuid(),
      modulo: "Contabilidad",
      campo: "Contabilidad de la empresa",
      activo: true
    },
    {
      id: uuid(),
      modulo: "Mascotas",
      campo: "Mascotas de los clientes",
      activo: false
    }
  ])
  const [citas, setCita] = useState([]);
  function Cita(correo, tipo, descripcion) {
    this.correo = correo;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.id = uuid();
  }
  const correoRef = useRef();
  const descripcionRef = useRef();
  const tipoRef = useRef();

  useEffect(() => {
    const citasG = JSON.parse(localStorage.getItem('citasG'))
    if (citasG.length === 0) return;
    setCita(citasG)
  }, [])


  const [cita, actualizarCita] = useState({
    correo: "",
    descripcion: "",
    tipo: ""
  })


  const listenCita = e => {
    console.log(e.target.value)
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (citas.length === 0) return;
    localStorage.setItem('citasG', JSON.stringify(citas));
  }, [citas])


  const { correo, descripcion, tipo } = cita;
  const añadirCita = () => {

    const cita = new Cita(correoRef.current.value, tipoRef.current.value, descripcionRef.current.value);
    setCita([
      ...citas, cita
    ]);
    correoRef.current.value = null;
    tipoRef.current.value = null;
    descripcionRef.current.value = null;
  }
  const submitCita = e => {
    e.preventDefault();
    if (correo.trim() === "" || descripcion.trim() === "" || tipo.trim() === "") {
      return;
    }
    cita.id = uuid()
    setCita([
      ...citas, cita
    ])

    actualizarCita({
      correo: "",
      descripcion: "",
      tipo: ""
    })
   




  }
  return (
  


    < div className = "App" >
      <header >

      </header>
      <div className='container-fluid' >
        <div className='row' >
          <div className='col-md-4' >
            {/* <ul>
              <li><a href="#">Ver citas</a></li>
              <li><a href="#">Crear cita</a></li>
            </ul> */}
          </div>


          <div className='col-md-4' >
            <h2 className='titulo'>Añadir Citas</h2>
            <form onSubmit={submitCita}>
              <div className='form-group'> <label type={"exampleFormControlInput1"} >Correo</label>
                <input name='correo' ref={correoRef} value={correo} style={{ width: 300 }} onChange={listenCita} type={"email"} className={"form-control"} id={"exampleFormControlInput1"} placeholder={"name@example.com"}></input></div>
              <div className='form-group'>
                <label for="exampleFormControlSelect1">Tipo Cita</label>
                <select ref={tipoRef} name='tipo' value={tipo} style={{ width: 300 }} onChange={listenCita} className="form-control" id="exampleFormControlSelect1" >
                  <option>Urgencias</option>
                  <option>Control</option>
                  <option>Consulta</option>
                  <option>Vacunas</option>
                  <option>Spa</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Descripcion de la cita</label>
                <textarea value={descripcion} name='descripcion' ref={descripcionRef} style={{ width: 300 }} onChange={listenCita} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button style={{ marginTop: 30 }} type='submit' className='btn btn-primary'>Añadir cita</button>
            </form>

            <Permisos permisos={permisos}></Permisos>
          </div>
          <div className='col-md-4' >
            <h2 className='titulo'>Citas Pendientes</h2>
            <Citas citas={citas} setCita={setCita}></Citas>
          </div>
        </div>

      </div>
   
      <Draggable>
        <div id='main'>I can now be moved around!</div>
   
      </Draggable>

    </div >
  );
}

export default App;
