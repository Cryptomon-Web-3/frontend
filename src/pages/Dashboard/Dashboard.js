import React from 'react'
import PokemonCardList from '../../components/PokemonCardList/PokemonCardList'
import Profile from '../../components/Profile/Profile'

const Dashboard = () => {
    return (
        <div className='lg:px-20 px-6 md:px-6 py-8 flex flex-col space-y-16'>
            <Profile/>
            <PokemonCardList />
        </div>
    )
}

export default Dashboard
