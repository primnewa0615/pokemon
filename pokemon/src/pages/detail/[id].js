import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import About from '@/components/About';
import BaseStats from '@/components/BaseStats';

const Detail = () => {
    const [pokemon, setPokemon] = useState(null)
    const [tab, setTab] = useState(1)
    const {id} =useRouter().query;

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

    const getDetail = async() =>{
        await axios.get(`${process.env.API}/pokemon/${id}`)
            .then(res => {
                setPokemon(res.data);
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getDetail();
    }, [])
    
    const upperCase = (word) =>{
        return  word.charAt(0).toUpperCase() + word.slice(1);
    }

    const numberForm = (number) => {
        let num = number.toString();
        let code= ''
        for(let i=0; i<3; i++){
            switch (num.length) {
                case 1:
                    code = '#00'+num
                    break;
                case 2:
                    code = '#0'+num
                    break;
                case 3:
                    code = '#'+num
                    break;
                default:
                    break;
            }
        }
        return code;
    }

    const normalTab = 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300';
    const selectedTab= 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500';

    const handleTab = (num) => {
        setTab(num);
    }
  return (
    <>
        {
            pokemon &&
            <div className={`w-screen h-screen overflow-y-auto ${bgColor[pokemon?.types[0].type.name]}`}>
                <div className="bg-[url('/images/bgChild.png')] bg-cover bg-top">
                 <div className='flex justify-between w-full h-[300px]  p-4 pb-0 text-white'>
                    <div className='w=9/12'>
                        <h1 className='text-xl z-20 w-full font-bold'>{upperCase(pokemon.name)}</h1>
                        <div className='w-full flex justify-start my-4'>
                            {
                                pokemon.types.map((type, tKey) => (
                                    <p id={tKey} className="rounded-xl bg-white bg-opacity-40 mr-4 p-2 text-center text-white ">{upperCase(type.type.name)}</p>
                                ))
                            }
                        </div>
                    </div>
                    <p className='text-lg text-right text-white font-bold w-3/12'>{numberForm(pokemon.order)}</p>
                </div>
                <div className='flex justify-center w-full'>
                    <Image className="absolute xs:top-[60px] md:top-[70px] lg:top-[50px] z-10 xs:w-6/12 md:w-3/12 lg:w-3/12  h-auto" src={pokemon.sprites.front_default}  width={0}
                        height={0}
                        sizes="10vw"
                        quality={100}
                        alt="oke"
                    />
                </div>
                
                <div className='absolute bottom-0 w-full h-[300px] rounded-t-3xl bg-white p-4'>
                    <div className="text-sm xs:text-xs font-medium text-center text-gray-500 border-b border-gray-200 xs:mt-4 dark:text-gray-400 dark:border-gray-700">
                        <ul className="flex flex-wrap ">
                            <li className="mr-2">
                                <button onClick={() => handleTab(1)} className={tab == 1 ? selectedTab : normalTab}>About</button>
                            </li>
                            <li className="mr-2">
                                <button onClick={() => handleTab(2)} className={tab == 2 ? selectedTab : normalTab} aria-current="page">Base Stats</button>
                            </li>
                            <li className="mr-2">
                                <button onClick={() => handleTab(3)} className={tab == 3 ? selectedTab : normalTab}>Evolution</button>
                            </li>
                            <li className="mr-2">
                                <button onClick={() => handleTab(4)} className={tab == 4 ? selectedTab : normalTab}>Moves</button>
                            </li>
                        </ul>
                    </div>
                    {tab == 1 && <About upperCase={upperCase} detail={pokemon} />}
                    {tab == 2 && <BaseStats upperCase={upperCase} detail={pokemon.stats} />}
                </div>
                </div>
            </div>
        }
    </>
  )
}

export default Detail