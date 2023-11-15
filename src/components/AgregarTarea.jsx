import { useState } from "react"

export const AgregarTarea = ({ agregarTarea }) => {
    const [inputValue, setinputValue] = useState('')
    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(inputValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Ingresar tarea"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
