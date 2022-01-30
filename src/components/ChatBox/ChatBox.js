import React from 'react';

import {
    SearchIcon,
} from '@heroicons/react/outline'

const chat = [
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        message: 'Hello',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        message: 'Hello',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        message: 'Hello',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        message: 'Hello',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        message: 'Hello',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        message: 'Hello',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        name: 'Losty',
        message: 'Hello',
    },

]

const ChatBox = () => {
  return (
    <div className='bg-dark rounded-t-3xl drop-shadow-xl max-h-full flex flex-col max-w-full mx-6 md:mx-8 relative'>
            <div className='bg-dark py-5 px-6 text-white font-bold text-2xl flex space-x-4 items-center rounded-t-3xl sticky top-0 left-0 shadow-xl'>
                <span>#</span>
                <h1 className='grow'>Global</h1>
                <h1 className='text-lighter'>{chat.length}</h1>
            </div>
            <ul role="list" className="overflow-auto grow">
                {chat.map((user, index) => (
                    <li key={index} className="py-6 px-4 border-b border-lighter">
                        <div className="flex space-x-3">
                            <img className="h-12 w-12 rounded-xl" src={user.imgUrl} alt={user.name} />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm text-lighter">{user.name}</p>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-md font-medium text-white">{user.message}</h3>
                                </div>
                            </div>
                            <button type="button" className="inline-flex items-center px-4 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <img src="/svgs/battle.svg" alt="battle"></img>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='bg-light py-5 px-4 text-white font-bold text-lg flex space-x-4 items-center sticky bottom-0 left-0 w-full'>
                <input className='rounded-xl w-full text-gray-500' placeholder='Enter message ...' type="text" name="search-online-users" />
                <button>
                   <img src='/svgs/sendbutton.svg' alt='sendbutton'/>
                </button>
            </div>
        </div>
  )
};

export default ChatBox;
