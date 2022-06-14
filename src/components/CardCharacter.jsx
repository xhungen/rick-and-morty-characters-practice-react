import React from "react";

const CardCharacter = ({ showCharacters }) => {
  const { name, image, status, species } = showCharacters;

  let alive = false;

  if (status === "Alive") {
    alive = true;
  }

  return (
    <>
      
        <section className="shadow-xl rounded-xl border-2 border-blue-500">
          <img src={image} alt={`imagen-${name}`} className="rounded-t-lg w-full" />
          <div className="flex flex-col gap-3  p-3">
            <h1 className="font-semibold">{name}</h1>
            <div className="flex  gap-5 items-center">
              <p className="text-blue-600">{species}</p>
              {alive ? (
                <span className="text-green-600">Alive</span>
              ) : (
                <span className="text-red-600">Dead</span>
              )}
            </div>
           
          </div>
        </section>
      
    </>
  );
};

export default CardCharacter;
