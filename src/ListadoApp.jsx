// Constante (Función Flecha): La segunda forma utiliza una constante que es igual a una función flecha.
// Esta es la forma más moderna y común de definir componentes en React. Es especialmente útil cuando deseas
// utilizar características de React como useState (como en tu primer ejemplo) o useEffect para administrar
// el estado local o efectos secundarios en tu componente.

import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Item = ({ nombre, visto }) => {
    return (
        <li className="gray">{nombre} {visto ? '✅' : '❎'} {visto && 'Realizado'} </li>
    );
};

export const ListadoApp = () => {

    const addTask = () => {
        setArreglo([...arreglo, { nombre: 'nuevo', visto: false }])
    }
    let listadoSecciones = [
        { id: 1, nombre: "Instalaciones necesarias", visto: true },
        { id: 2, nombre: "Uso de Vite", visto: true },
        { id: 3, nombre: "Componentes", visto: true },
        { id: 4, nombre: "Variables en JSX", visto: true },
        { id: 5, nombre: "Props", visto: true },
        { id: 6, nombre: "Eventos", visto: true },
        { id: 7, nombre: "UseState", visto: true },
        { id: 8, nombre: "Redux", visto: false },
        { id: 9, nombre: "customHooks", visto: false }
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    const onAddTask = (val) => {
        if (val < 1) return
        const envio = {
            id: arreglo.length + 1,
            nombre: val,
            visto: false
        }
        setArreglo([...arreglo, envio])
    }
    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <AgregarTarea agregarTarea={onAddTask}></AgregarTarea>
            <ol>
                {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>)}
            </ol>


        </>
    );
};

// Función: La primera forma utiliza una función regular para definir el componente. Es más tradicional y ha sido
// utilizada desde las versiones anteriores de React. Puedes usar esta sintaxis si no necesitas administrar el estado
// interno del componente o si no necesitas utilizar características avanzadas de React, como el estado local o los ciclos de vida.

// const Items = ({ nombre, visto }) => {
//     return (
//         <li>{nombre} {visto ? '✅' : '❎'} {visto && 'Realizado'} </li>
//     )
// }
// export default function ListadoApp() {
//     return (
//         <>
//             <h1>Listado de Temas del Curso</h1>
//             <ol>
//                 <Items nombre="Instalaciones necesarias" visto={true}></Items>
//                 <Items nombre="Uso de Vite" visto={true}></Items>
//                 <Items nombre="Componentes" visto={true}></Items>
//                 <Items nombre="Variables en JSX" visto={true}></Items>
//                 <Items nombre="Props" visto={true}></Items>
//                 <Items nombre="Eventos" visto={true}></Items>
//                 <Items nombre="UseState" visto={true}></Items>
//                 <Items nombre="Redux" visto={false}></Items>
//                 <Items nombre="customHooks" visto={false}></Items>
//             </ol>
//         </>
//     )
// }