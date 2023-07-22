import { useEffect, useState } from "react"
import axios from "axios"
import Image from 'next/image'
import sortBy from "sort-by"
import Link from "next/link"


export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const bgColor= {
    normal: "bg-normal",
    fire: "bg-fire",
    water: "bg-water",
    electric: "bg-electric",
    grass: "bg-grass",
    ice: "bg-ice",
    fighting: "bg-ghting",
    poison: "bg-poison",
    ground: "bg-ground",
    flying: "bg-flying",
    psychic: "bg-sychic",
    bug: "bg-bug",
    rock: "bg-rock",
    ghost: "bg-ghost",
    dragon: "bg-dragon",
    dark: "bg-dark",
    steel: "bg-steel",
    fairy: "bg-fairy"
  }

  const getDataPokemon = async() => {
    setIsLoading(true)
    let listPokemon = []
    await axios.get(`${process.env.API}/pokemon?limit=50`)
    .then(data => {
      data.data.results.forEach(async (r,i) => {
        await axios.get(r.url).then(p => {
          let name = r.name;
          let avatar = p.data.sprites.front_default
          let id = p.data.order
          let types = [];

          p.data.types.forEach((pType,key) =>{

            types.push(pType.type.name);
          })
          setPokemons(pokemons => [...pokemons, { id, name, avatar, types}])
          
        }).catch(err =>{
          console.log(err)
        })
      })
      setIsLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    setPokemons([])
     getDataPokemon();
  }, [])
  
  return (
    <div style={{minWidth:360}} className="w-screen overflow-y-auto overflow-x-auto h-screen bg-[url('/images/mainBg.png')] bg-right-top bg-cover bg-no-repeat xs:p-2 p-4 text-xs">
      <h1 className="text-black font-bold text-lg">Pokedex</h1>
      <div className="flex w-full h-full overflow-y-auto flex-wrap justify-start">
        {pokemons == null ? (<p className="text-gray-700">Loading..</p>) :
          pokemons.sort(sortBy('types')).map((pokemon, key) => 
            <Link href={`/detail/${pokemon.name}`} id={key} className={` m-4 xs:my-2 xs:mx-1 sm:mx-4 ${bgColor[pokemon.types[0]]} lg:w-2/12 md:w-3/12 sm:w-5/12 xs:w-5/12 h-[150px] rounded-xl text-white`}>
              <div className="w-full h-full flex bg-[url('/images/bgChild.png')] bg-cover bg-top">
              <div className="w-6/12 break-words h-full p-2">
                <p className="sm:text-xs md:text-base font-bold text-center mb-2">{pokemon.name}</p>
                {
                  pokemon.types.map((type, tKey) => (
                    <p id={tKey} className="rounded-xl bg-white bg-opacity-40 p-1 text-center mb-2">{type}</p>
                  ))
                }
              </div>
              <Image className="w-6/12 h-full" src={pokemon.avatar}  width={0}
                height={0}
                sizes="50vw"
                style={{ width: '50%', height: 'auto' }} 
                alt="oke"
              />
              
            </div>
            </Link>
           )
        }
      </div>
    </div>
  )
}
