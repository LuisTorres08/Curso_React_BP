import { useState } from "react"

export const Contador = () => {

  const [contador, setContador] = useState(0);
  const aumentar = () => setContador( contador + 1 );
  const decrementar = () => setContador( contador - 1 );

  return(
    <>
    <hr/>
    <h1>Contador</h1>
    <h1>El valor de la variable es: {contador}</h1>
    
    <button onClick={aumentar}>Aumentar</button>
    <button onClick={decrementar}>Decrementar</button>
    
    </>
  )
}