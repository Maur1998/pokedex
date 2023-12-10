import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Informacion = () => {

    const [datos,setDatos] = useState({});

    const { nombre } = useParams();

    useEffect(()=>{
        consultarPokemon()
    },[])

    const consultarPokemon = async () => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
            const response = await fetch(url);
            const data = await response.json();
            setDatos({
                'hp': data.stats[0].base_stat,
                'attack':data.stats[1].base_stat,
                'defense':data.stats[2].base_stat,
                'special-attack':data.stats[3].base_stat,
                'special-defense':data.stats[4].base_stat,
                'speed':data.stats[5].base_stat,
                'sprite':data.sprites.front_default,
            })
            return data.stats

        } catch (error) {
            console.log("ERROR",error)
        }
    }

    return (
        <>
            <div style={{height:"70vh"}} className="d-flex justify-content-center align-items-center"> 
                <img src={datos['sprite']} alt="pokemon" width={"30%"} />
                <ul>
                    <li>hp: {datos['hp']}</li>
                    <li>attack: {datos['attack']}</li>
                    <li>defense: {datos['defense']}</li>
                    <li>special-attack: {datos['special-attack']}</li>
                    <li>special-defense: {datos['special-defense']}</li>
                    <li>speed: {datos['speed']}</li>
                </ul>
            </div>
        </>
    )
}
