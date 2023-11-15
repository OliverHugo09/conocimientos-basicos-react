import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente'
import './styles/styles.css'
import { ContadorApp } from './ContadorApp'
import { ListadoApp } from './ListadoApp' //Importación como constante (manera actual-)
//import ListadoApp from './ListadoApp' //Importación como función
import { UserApp } from './UserApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PrimerComponente Nombre="Oliver" Apellido='Lucero' Edad={22} /> */}
    {/* <ContadorApp value={0} /> */}
    {/* <ListadoApp /> */}
    <UserApp />
  </React.StrictMode>,
)
