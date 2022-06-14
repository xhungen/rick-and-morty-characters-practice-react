import React from 'react'
import { useEffect,useState } from 'react'
import Swal from 'sweetalert2'
import CardCharacter from './CardCharacter'
import Loading from './Loading'

const Characters = ({characterName}) => {


    const [showCharacters, setShowCharacters] = useState([])

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        api(characterName);
    },[characterName])

    const api = async (nombre) => {

        setLoading(true);

        try{
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);

            if(!res.ok){
                return Swal.fire({
                    title: "Error",
                    text: "No se encontró el personaje",
                    icon: "error",
                })
            }

            const data = await res.json();
            setShowCharacters(data.results)

        }catch(error){
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

    if(loading){
        return <Loading/>;
    }

  return (
    <>
    <h1 className="text-center mt-20 font-bold text-xl drop-shadow-2xl">Personajes</h1>

    <div className="mt-5 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        {showCharacters.map((item) =>(
            <CardCharacter key={item.id} showCharacters={item}/>
        ))
        }
    </div>

    </>
  )
}

export default Characters