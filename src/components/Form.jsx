import React from "react";
import useForm from "../hooks/useForm";
import Swal from "sweetalert2";

const Form = ({setCharacterName}) => {
  const [inputs, handleChange, reset] = useForm({
    nombre: "",
  });

  const resetCharacter = (e) =>{
    e.preventDefault();
    setCharacterName("");
    reset();
   
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!nombre.trim()){
        Swal.fire({
            title: "Error",
            text: "Ingrese un personaje",
            icon: "error",
        });
        return;
    }

    setCharacterName(nombre.trim().toLowerCase());
    reset();
  };

  const { nombre } = inputs;

  return (
    <>
      <div>
        <h2 className="text-center mt-5  mb-5 drop-shadow-xl">
          Busque un personaje
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Ingrese un personaje"
            className="w-full lg:w-3/5 p-1 rounded-lg mx-auto shadow-xl border-2 border-blue-600"
            value={nombre}
            onChange={handleChange}
            name="nombre"
          />
        <div className="flex items-center gap-10 mx-auto mt-5">
        <button
            className=" bg-blue-600 w-20  p-2 rounded-xl text-white transition-colors duration-200 hover:bg-blue-700 shadow-xl"
            type="submit"
          >
            Buscar
          </button>
          <button className=" bg-blue-600 w-20  p-2 rounded-xl text-white transition-colors duration-200 hover:bg-blue-700 shadow-xl" onClick={ resetCharacter }>Reiniciar</button>
        </div>
        </form>
      </div>
    </>
  );
};

export default Form;
