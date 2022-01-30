import React, { useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';

const PokemonCard = ({ pokemonData }) => {
  // let bgColorString;
  // useEffect(async () => {
  //     bgColorString = await `bg-[${pokemonData.bgColor}]`
  // }, []);

  const [nav, setNav] = useState('abilities');
  const handleNavChange = () => {
    nav === 'abilities' ? setNav('skills') :  setNav('abilities');
  }
  

  return (
    <li className={classNames(`col-span-1 flex flex-col text-center rounded-3xl shadow divide-y divide-gray-200 lg:mx-8 min-w-fit`)} style={{ backgroundColor: pokemonData.bgColor }}>
      <div className="flex-1 flex flex-col px-8 py-3">
        <h3 className="text-xl font-bold text-left text-white drop-shadow-xl">{pokemonData.name}</h3>
        <ul className="px-2 py-1 w-fit text-xs text-white  font-medium bg-white/50 rounded-full flex list-disc">
          {/* <img className='text-yellow-400' src="/svgs/ellipse.svg" alt="bullet" /> */}
          {pokemonData.type}
        </ul>
        <img className="w-32 h-32 flex-shrink-0 mx-auto -mt-14 rounded-full object-cover translate-y-16" src={pokemonData.imageUrl} alt="pokemon" />
      </div>
      <div className="mt-1 flex-grow flex flex-col justify-between bg-white px-8 py-3 rounded-3xl">
        <div className='mt-8'>
          <div className="block">
            <div className="border-b border-transparent mb-4">
              <nav className="-mb-px flex space-x-2 text-left" aria-label="Tabs">
                <a onClick={handleNavChange} className={classNames(nav==='abilities'?'border-black text-black':'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-700',"cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 font-bold text-sm")}>
                  Abilities
                </a>
                <a onClick={handleNavChange} className={classNames(nav==='skills'?'border-black text-black':'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-700',"cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 font-bold text-sm")}>
                  Skills
                </a>
              </nav>
            </div>
          </div>
        </div>
        <ul className={classNames(nav==='abilities'?'block':'hidden','space-y-1 abilities list-disc text-left font-semibold mb-8 text-gray-500 text-tiny')}>
          <li>Fireball</li>
          <li>Fireblast</li>
          <li>Quick Attack</li>
          <li>Heat Blast</li>
          <li>Cannon Bolt</li>
        </ul>
        <ul className={classNames(nav==='skills'?'block':'hidden','space-y-1 skills list-disc text-left font-semibold mb-8 text-gray-500 text-tiny')}>
          <li>Skill1</li>
          <li>Skill2</li>
          <li>Skill3</li>
          <li>Skill4</li>
          <li>Skill5</li>
        </ul>
      </div>

    </li>
  )
}

export default PokemonCard;
