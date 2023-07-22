import {useState, useEffect} from 'react'

const BaseStats = (props) => {
    const {upperCase, detail} = props
  return (
    <div className="p-4 w-full h-full text-base xs:text-xs font-bold">
        <table>
            <tr>
                <td className="w-24 h-8 text text-gray-600 font-bold">HP</td>
                <td>{detail[0].base_stat}</td>
                <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                       <div className={`${detail[0].base_stat >=80 ? 'bg-blue-600' : detail[0].base_stat >= 60 ? 'bg-green-600' : 'bg-red-600'} h-2.5 rounded-full`} style={{width: detail[0].base_stat}}></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="w-24 h-8 text text-gray-600 font-bold">Attack</td>
                <td>{detail[1].base_stat}</td>
                <td>
                    <div className="w-full  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className={`${detail[1].base_stat >=80 ? 'bg-blue-600' : detail[1].base_stat >= 60 ? 'bg-green-600' : 'bg-red-600'} h-2.5 rounded-full`} style={{width: detail[1].base_stat}}></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="w-24 h-8 text text-gray-600 font-bold">Defense</td>
                <td>{detail[2].base_stat}</td>
                <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className={`${detail[2].base_stat >=80 ? 'bg-blue-600' : detail[2].base_stat >= 60 ? 'bg-green-600' : 'bg-red-600'} h-2.5 rounded-full`} style={{width: detail[2].base_stat}}></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="w-24 h-8 text text-gray-600 font-bold">Sp. Atk</td>
                <td>{detail[3].base_stat}</td>
                <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className={`${detail[3].base_stat >=80 ? 'bg-blue-600' : detail[3].base_stat >= 60 ? 'bg-green-600' : 'bg-red-600'} h-2.5 rounded-full`} style={{width: detail[3].base_stat}}></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="w-24 h-8 text text-gray-600 font-bold">Sp. Def</td>
                <td className='w-12'>{detail[4].base_stat}</td>
                <td className='w-32'>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className={`${detail[4].base_stat >=80 ? 'bg-blue-600' : detail[4].base_stat >= 60 ? 'bg-green-600' : 'bg-red-600'} h-2.5 rounded-full`} style={{width: detail[4].base_stat}}></div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default BaseStats