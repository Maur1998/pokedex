import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState("");
    const [nombre, setNombre] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {
        try {
            const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0';
            const response = await fetch(url);
            const data = await response.json();
            setPokemon(data.results)
            return data.results

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = () => {
        event.preventDefault();
        if(nombre.length > 1){
            navigate(`/pokedex/:${nombre}`)
        }

    }

    return (
        <>
            <form style={{height:"70vh"}} onSubmit={handleSubmit} className="mt-4 d-flex flex-column justify-content-center align-items-center">
                <select style={{borderRadius:"5px"}} className="mb-3" onChange={(e)=>setNombre(e.target.value)}>
                    <option value={0}>Seleccione un Pokémon</option>
                    {
                        pokemon.length > 0 ?(
                            pokemon.map(({name}) => (
                            <option key={name} value={name}>{name}</option>
                        ))
                        ):(
                        <option value="" disabled>
                            No hay Pókemon disponible
                        </option>
                    )}
                </select>
                <button className="btn btn-dark">Ver Detalle</button>
            </form>
        </>
    )
}
