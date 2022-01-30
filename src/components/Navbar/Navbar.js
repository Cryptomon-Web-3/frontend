import React, { useState } from 'react'
import { classNames } from '../../utils/classNames'
import { Link, useLocation } from 'react-router-dom'
// Icons 
import {
    HomeIcon
} from '@heroicons/react/solid'
import {
    ChatIcon,
    XIcon,
    MenuAlt2Icon,
} from '@heroicons/react/outline'

const Navigation = [
    {
        label: 'Dashboard',
        icon: HomeIcon,
        to: '/'
    },
    {
        label: 'Chat',
        icon: ChatIcon,
        to: '/chat'
    },
]

const ProfileDropDown = [
    {
        label: 'Your Dashboard',
        to: '/',
    },
    {
        label: 'Sign out',
        to: '/login',
    },
]

const Navbar = ({children}) => {
    const location = useLocation();
    const [hamMenuOn, setHamMenuOn] = useState(false);
    const [dropDownOn, setDropDownOn] = useState(false);

    const OnProfileClick = () => {

    }
    return (
        <div className="h-screen flex">
            {/* Narrow sidebar */}
            <div className="hidden w-28 rounded-r-lg drop-shadow-xl bg-dark overflow-y-auto md:block">
                <div className="w-full py-6 flex flex-col items-center">
                    {/* Logo */}
                    {/* <div className="flex-shrink-0 flex items-center">
                        <img className="h-8 w-auto" src="" alt="logo" />
                    </div> */}
                    {/* Navigation links */}
                    <div className="flex-1 mt-28 w-full px-2 space-y-1">
                        {Navigation.map((nav, index) => (
                            <Link key={index} to={nav.to} className={"group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"}>
                                {<nav.icon className={classNames(location.pathname == nav.to? "border-myblue border-b-4 text-white group":"text-lighter border-b-4 border-transparent",'pb-3 h-10 w-7 hover:border-myblue hover:text-white')} />}
                                {/* <span className="mt-2">{nav.label}</span> */}
                            </Link>
                        )
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile view  */}
            <div className={classNames(hamMenuOn? "md:hidden" : "hidden")} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-40 flex">
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>


                    <div className="relative max-w-xs w-full bg-light pt-5 pb-4 flex-1 flex flex-col">
                        {/* Close button  */}
                        <div className="absolute top-1 right-0 -mr-14 p-1">
                            <button onClick={() => setHamMenuOn(false)} type="button" className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
                                <XIcon className="h-6 w-6 text-white" />
                                <span className="sr-only">Close sidebar</span>
                            </button>
                        </div>
                        {/* Logo  */}
                        {/* <div className="flex-shrink-0 px-4 flex items-center">
                            <img className="h-8 w-auto" src="" alt="logo" />
                        </div> */}
                        <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                            <nav className="h-full flex flex-col">
                                <div className="space-y-1">
                                    {Navigation.map((nav, index) => (
                                        <Link key={index} to={nav.to} className="text-lightest hover:bg-dark hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                                            {<nav.icon className="text-lightest group-hover:text-white mr-3 h-6 w-6"/>}
                                            <span>{nav.label}</span>
                                        </Link>
                                    )
                                    )}
                                   
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </div>
            </div>

            {/* Content area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="w-full">
                    <div className="relative z-10 flex-shrink-0 items-center h-20 bg-primary flex">
                        {/* Hamburger  */}
                        <button type="button" className="border-r px-4 border-gray-200 text-gray-500  md:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon className="h-6 w-6" onClick={() => setHamMenuOn(true)}/>
                        </button>
                        {/* Navbar items  */}
                        <div className='px-4 lg:ml-28'>
                            {
                                Navigation.map((nav, index) => {
                                    if(location.pathname === nav.to){
                                        return(
                                            <div key={index} className='text-white sm:text-4xl text-2xl flex items-center space-x-4'>
                                                <nav.icon className='sm:h-10 sm:w-10'/>
                                                <h1 className='font-bold'>{nav.label}</h1>
                                            </div>
                                        )
                                    }
                                })

                            }
                        </div>
                        <div className="flex-1 flex justify-end px-4 sm:px-6">
                            <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                {/* Profile dropdown */}
                                <div className="relative flex-shrink-0">
                                    <div>
                                        <button onClick={()=> setDropDownOn(prevDropDownOn => !prevDropDownOn)} type="button" className="bg-transparent space-x-3 flex text-sm" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="sr-only">Open user menu</span>
                                            {/* Profile Image  */}
                                            <img className="h-8 w-8 rounded-lg" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                                            <span className="hidden sm:flex p-1 items-center justify-center text-white">Losty</span>
                                        </button>
                                    </div>
                                    <div className={classNames(dropDownOn? "": "hidden","origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-lighter ring-1 ring-black ring-opacity-5 focus:outline-none")} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                        {ProfileDropDown.map((item, index)=> (
                                            <Link key={index} to={item.to} className={classNames(location.pathname == item.to? "bg-dark m-2 rounded-md text-white": "text-dark","block px-4 py-2 text-sm")}>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>

               {children}
            </div>
        </div>
    )
}

export default Navbar
