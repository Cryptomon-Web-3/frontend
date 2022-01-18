import React from 'react'
import {
    SearchIcon,
} from '@heroicons/react/outline'

const OnlineUsersList = [
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        level: 5,
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        level: 5,
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        level: 5,
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        level: 5,
    },
]

const OnlineUsers = () => {
    return (
        <div className='bg-dark rounded-l-xl w-96 drop-shadow-xl h-full flex flex-col pb-6'>
            <div className='border-b border-lighter py-5 px-6 text-white font-bold text-lg flex space-x-4 items-center'>
                <img src="/svgs/online.svg" alt="online" />
                <h1 className='grow'>Online Users</h1>
                <h1 className='text-lighter'>3</h1>
            </div>
            <ul role="list" className="grow">
                {OnlineUsersList.map((user) => (
                    <li className="py-6 px-4 border-b border-lighter">
                        <div className="flex space-x-3">
                            <img className="h-12 w-12 rounded-xl" src={user.imgUrl} alt={user.name} />
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-md font-medium text-white">{user.name}</h3>
                                </div>
                                <p className="text-sm text-lighter">Lv. {user.level}</p>
                            </div>
                            <button type="button" className="inline-flex items-center px-4 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <img src="/svgs/battle.svg" alt="battle"></img>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='bg-light py-5 px-4 text-white font-bold text-lg flex space-x-4 items-center rounded-bl-xl'>
                <input className='rounded-xl w-full text-gray-500' placeholder='Search ...' type="text" name="search-online-users" />
                <button>
                   <SearchIcon className='text-mypink h-6 w-6'/> 
                </button>
            </div>
        </div>
    )
}

export default OnlineUsers
