import { useEffect, useState } from "react"

const About = (props) => {
    const {detail, upperCase} =props
    const [ability, setAbility] = useState('')
    useEffect(() => {
        let temp = ''
        detail.abilities.map((a,i) => {
            i != detail.abilities.length - 1 ? temp += upperCase(a.ability.name)+", " : temp += upperCase(a.ability.name);
        })
        setAbility(temp)
    }, [])
    
  return (
    <div className="p-4 w-full h-full text-base xs:text-xs font-bold">
        <table>
            <tr>
                <td className="w-24 h-10 text text-gray-600 font-bold">Species</td>
                <td>{upperCase(detail?.species.name)}</td>
            </tr>
            <tr>
                <td className="w-24 h-10 text text-gray-600 font-bold">Height</td>
                <td>{detail?.height} inch</td>
            </tr>
            <tr>
                <td className="w-24 h-10 text text-gray-600 font-bold">Weight</td>
                <td>{detail?.weight} kg</td>
            </tr>
            <tr>
                <td className="w-24 h-10 text text-gray-600 font-bold">Abilities</td>
                <td>{ability}</td>
            </tr>
        </table>
    </div>
  )
}

export default About