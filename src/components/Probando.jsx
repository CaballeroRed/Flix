import { useState, useEffect } from "react";

const Bienvenida = (props) => {
  const [counter, setCounter] = useState(0);
  const [semaforo, setSemaforo] = useState(false);

  useEffect(() => {
    console.log(semaforo);
  }, [semaforo]);

  const contar = () => {
    setCounter(counter + 1);
    setSemaforo(!semaforo);
  };
  console.log(semaforo);
  const { message, name } = props;
  return (
    <div>
      <p>hola esto es una prueba</p>;
      <p>
        {message} y renderizo el nombre {name}
      </p>
      <h2>contador de react con hooks </h2>
      <button type="submit" onClick={contar}>
        sumar contador
      </button>
      <h4>el contador es {counter}</h4>
      <p>el semaforo esta en color {semaforo ? "red" : "green"}</p>
    </div>
  );
};

export default Bienvenida;

//========================================================
