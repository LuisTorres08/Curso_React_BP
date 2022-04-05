import React, { useState } from 'react';

export const Formulario = () =>{

    const [fruta, setFruta] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [lista, setLista] = useState([]);

    const guardarDatos = (e) => {
        e.preventDefault();

        setLista([...lista,
            {nombreFruta: fruta, nombreDescripcion: descripcion}
        ])
    }

    return (

        <div>
           <h2>Formulario</h2>

           <form onSubmit={guardarDatos}>
               <input
               type='text'
               placeholder='Ingrese Frutas'
               onChange={ (e) => setFruta(e.target.value)}
               />

               <input
               type='text'
               placeholder='Ingrese Descripcion'
               onChange={ (e) => setDescripcion(e.target.value)}
                />
                <input type="reset" value="Limpiar formulario"></input>

                <button type='submit'> Agregar </button>
           </form>

           <ul>
               {
                   lista.map((item, index) => (
                       <li key={index}><h4>{item.nombreFruta} - {item.nombreDescripcion}</h4></li>
                   ))
               }
           </ul>
        
        </div>

    )
}