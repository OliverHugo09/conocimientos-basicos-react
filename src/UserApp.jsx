import { useEffect, useState } from "react"
import { UserList } from "./components/UserList"

export const UserApp = () => {
    const [endPoint, setEndPoint] = useState('users')
    const handleFetch = () => {
        setEndPoint('comments')
    }
    return (
        <>
            <h1>Lista de Usuarios</h1>
            <ul>
                <UserList endPoint={endPoint}></UserList>
                <button onClick={handleFetch}>Aquí se llama a la API</button>
            </ul>
        </>
    )
}
