import { useState } from "react"

export const Listas = () => {

    const estadoInicial = [
        {id: 1, texto: 'Tarea 1'},
        {id: 2, texto: 'Tarea 2'},
        {id: 3, texto: 'Tarea 3'}
    ]
    const [lista, setLista] = useState(estadoInicial);

    return (
        <>
        <hr/>
        <h2>Listas</h2>

        {
            lista.map((item) => (
                <h4 key={item.id}>{item.texto}</h4>
            ))
        }
        </>
        

    )


}