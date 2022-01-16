import React, { useState } from 'react'
import { classNames } from '../../../utils/classNames'
import { Link, useLocation } from 'react-router-dom'
import {
    HomeIcon,
    ChatIcon,
    XIcon,
    MenuAlt2Icon,
} from '@heroicons/react/outline'

const Navigation = [
    {
        label: 'Home',
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

const Navbar = () => {
    const location = useLocation();
    const [hamMenuOn, setHamMenuOn] = useState(false);
    const [dropDownOn, setDropDownOn] = useState(false);

    const OnProfileClick = () => {

    }
    return (
        <div className="h-screen flex">
            {/* Narrow sidebar */}
            <div className="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
                <div className="w-full py-6 flex flex-col items-center">
                    {/* Logo */}
                    {/* <div className="flex-shrink-0 flex items-center">
                        <img className="h-8 w-auto" src="" alt="logo" />
                    </div> */}
                    {/* Navigation links */}
                    <div className="flex-1 mt-6 w-full px-2 space-y-1">
                        {Navigation.map((nav, index) => (
                            <Link key={index} to={nav.to} className={classNames(location.pathname == nav.to? "bg-indigo-800 text-white group":"text-indigo-300", " hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium")}>
                                {<nav.icon className=' h-6 w-6' />}
                                <span className="mt-2">{nav.label}</span>
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


                    <div className="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
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
                                        <Link key={index} to={nav.to} className="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium">
                                            {<nav.icon className="text-indigo-300 group-hover:text-white mr-3 h-6 w-6"/>}
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
                    <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
                        {/* Hamburger  */}
                        <button type="button" className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon className="h-6 w-6" onClick={() => setHamMenuOn(true)}/>
                        </button>
                        {/* Navbar items  */}
                        <div className="flex-1 flex justify-end px-4 sm:px-6">
                            <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                {/* Profile dropdown */}
                                <div className="relative flex-shrink-0">
                                    <div>
                                        <button onClick={()=> setDropDownOn(prevDropDownOn => !prevDropDownOn)} type="button" className="bg-white space-x-3 rounded-full flex text-sm" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="sr-only">Open user menu</span>
                                            {/* Profile Image  */}
                                            <img className="h-8 w-8 rounded-lg" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                                            <span className="flex p-1 items-center justify-center text-black">Losty</span>
                                        </button>
                                    </div>
                                    <div className={classNames(dropDownOn? "": "hidden","origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none")} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                        {ProfileDropDown.map((item, index)=> (
                                            <Link key={index} to={item.to} className={classNames(location.pathname == item.to? "bg-gray-200": "","block px-4 py-2 text-sm text-gray-700")}>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>

                {/* Main content */}
                <div className="flex-1 flex items-stretch overflow-hidden">
                    <main className="flex-1 overflow-y-auto">
                        {/* Primary column */}
                        <section aria-labelledby="primary-heading" className="min-w-0 flex-1 h-full flex flex-col lg:order-last">
                            Hello guys
                        </section>
                    </main>

                    {/* Secondary column (hidden on smaller screens) */}
                    <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
                        {/* Your content */}
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Navbar
