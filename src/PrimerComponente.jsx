import './styles/PrimerComponente.css'
import PropTypes from 'prop-types'

// const funcion = () => 1 + 1
// const objeto = { nombre: 'Oliver Lucero', edad: 22 }
// const fecha = new Date()

export const PrimerComponente = ({ Nombre, Apellido = 'Silván', Edad }) => {
    return (
        <>
            <h1 className='orange'>{Nombre}</h1>
            <h2>{Apellido}</h2>
            <h2>Edad: {Edad + 1}</h2>

            {/* <h4>Variable tipo function:</h4> <p>{funcion()}</p>
            <h4>Variable tipo JSON:</h4> <p>{JSON.stringify(objeto)}</p>
            <h4>Variable tipo fecha:</h4> <p>{JSON.stringify(fecha)}</p> */}
        </>

    )
}

PrimerComponente.propTypes = {
    Nombre: PropTypes.string.isRequired,
    Apellido: PropTypes.string.isRequired,
    Edad: PropTypes.number.isRequired
}

PrimerComponente.defaultProps = {
    Nombre: 'Hugo',
    Edad: 22
}