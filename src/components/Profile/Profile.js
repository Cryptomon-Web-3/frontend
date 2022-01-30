import React from 'react'

const Profile = () => {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            <div className='flex items-center justify-center'>
                <div className='rounded-full bg-gradient-to-t p-1 from-mypink to-myblue w-fit'>
                    <div className='bg-primary rounded-full p-2'>
                        <img className="w-40 h-40 object-cover rounded-full" src="/images/my.jpeg" alt="user"/>
                    </div>
                </div>
            </div>
            <div className=' w-full flex flex-col justify-center text-sm text-white font-semibold space-y-4'>
                <h2 className='w-fit text-lighter'>
                    <span>User Information</span>
                    <div className='bg-gradient-to-r from-mypink to-myblue h-1 w-10 mt-2 rounded-lg'/>
                </h2>
                <h2>Losty</h2>
                <h2>Addtional Data</h2>
                <h2>Addtional Data</h2>
            </div> 
            <div className=' w-full flex flex-row items-center text-sm text-white font-semibold space-x-10'>
                <div>
                    <h1 className='text-5xl mb-4'>10</h1>
                    <span className='text-lighter'>Won</span>
                </div>
                <div>
                    <h1 className='text-5xl mb-4'>9</h1>
                    <span className='text-lighter'>Lost</span>
                </div>
                <div>
                    <h1 className='text-5xl mb-4'>5</h1>
                    <span className='text-lighter'>Cards</span>
                </div>
            </div> 
            <div className=' w-full flex justify-center items-center text-sm text-white font-semibold space-x-10'>
                <h2 className='text-2xl'>Lv <span className='text-myblue'>{'>>'}</span> 10</h2>
            </div> 
            <div className=' w-full flex items-center text-sm text-white font-semibold space-x-10'>
                <button type="button" className="w-full bg-gradient-to-r from-mypink to-myblue inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white ">
                    Master
                </button>
            </div> 
            <div className=' w-full flex items-center text-sm text-white font-semibold space-x-10'>
                <button type="button" className="w-full inline-flex justify-center items-center px-6 py-3 border-2 border-myblue hover:bg-myblue text-base font-medium rounded-xl shadow-sm text-white ">
                    Battle
                    <img src="/svgs/battle.svg" alt="battle" className='w-6 h-6' />
                </button>
            </div> 
            
        </div>
    )
}

export default Profile
