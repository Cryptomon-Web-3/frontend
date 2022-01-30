import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { classNames } from '../../utils/classNames';
import {
  UserCircleIcon,
  EyeIcon,
  EyeOffIcon,
} from '@heroicons/react/outline'

const SignupLayout = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const password = useRef();
  const handlePasswordClick = () => {
    if (passwordVisible) {
      password.current.type = 'password';
      setPasswordVisible(false)
    } else {
      password.current.type = 'text';
      setPasswordVisible(true);
    }
  }
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const confirmPassword = useRef();
  const handleConfirmPasswordClick = () => {
    if (confirmPasswordVisible) {
      confirmPassword.current.type = 'password';
      setConfirmPasswordVisible(false)
    } else {
      confirmPassword.current.type = 'text';
      setConfirmPasswordVisible(true);
    }
  }
  const location = useLocation();
  return (
    <>

      <div className="flex flex-col justify-center items-center h-screen mx-4 md:mx-0">
        <div className='grid grid-cols-1 items-center bg-light rounded-3xl overflow-hidden'>
          <nav className="-mb-px grid grid-cols-2 lg:grid-cols-4 items-center justify-start space-x-2 bg-primary" aria-label="Tabs">
            <Link to='/login' className={classNames(location.pathname === '/login' ? 'bg-gradient-to-r from-myblue to-mypink' : 'bg-light', "text-center rounded-t-3xl text-white cursor-pointer whitespace-nowrap py-6 lg:px-32 font-bold text-lg")}>
              Log In
            </Link>
            <Link to='/signup' className={classNames(location.pathname === '/signup'  ? 'bg-gradient-to-r from-myblue to-mypink' : 'bg-light', "text-center rounded-t-3xl text-white cursor-pointer whitespace-nowrap py-6 lg:px-32 font-bold text-lg")}>
              Sign Up
            </Link>
          </nav>
          <div className='grid lg:grid-cols-2 grid-cols-1  items-center rounded-3xl overflow-hidden'>

            <div className="p-10 md:py-20 md:px-20 lg:flex-none lg:px-20 xl:px-24">
              <div className="mx-auto">
                <div>
                  {/* <img className="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" /> */}
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                    Create a new account<span className='text-mypink'>.</span>
                  </h2>
                  <p className="mt-2 text-sm text-lighter">
                    Aleady a player?{' '}
                    <Link to="/login" className="font-medium text-mypink hover:text-myblue">
                      <a>Log In</a>
                    </Link>
                  </p>
                </div>

                <div className="mt-8">
                  {/* Form  */}
                  <div className="mt-6">
                    <form action="#" method="POST" className="space-y-6">
                      <div className="flex items-center border-4 border-lighter bg-lighter rounded-2xl px-3 py-2 shadow-sm focus-within:ring-4  focus-within:ring-lighter/75 focus-within:bg-dark focus-within:text-white focus-within:border-myblue">
                        <div className='grow'>
                          <label htmlFor="name" className="block text-xs font-medium">Name</label>
                          <input type="text" name="name" id="name" className="focus:bg-transparent bg-transparent block w-full border-0 p-0 text-white placeholder-dark focus:placeholder-lighter font-bold focus:ring-0 sm:text-md" placeholder="Enter name" />
                        </div>
                        <UserCircleIcon className='w-8 h-8 text-light' />
                      </div>
                      <div className="flex items-center border-4 border-lighter bg-lighter rounded-2xl px-3 py-2 shadow-sm focus-within:ring-4  focus-within:ring-lighter/75 focus-within:bg-dark focus-within:text-white focus-within:border-myblue">
                        <div className='grow'>
                          <label htmlFor="password" className="block text-xs font-medium">Password</label>
                          <input ref={password} type="password" name="password" id="password" className="focus:bg-transparent bg-transparent block w-full border-0 p-0 text-white placeholder-dark focus:placeholder-lighter font-bold focus:ring-0 sm:text-md" placeholder="Enter password" />
                        </div>
                        {
                          passwordVisible ?
                            (<EyeOffIcon onClick={handlePasswordClick} className='w-8 h-8 text-light' />)
                            : (<EyeIcon onClick={handlePasswordClick} className='w-8 h-8 text-light' />)

                        }

                      </div>
                      <div className="flex items-center border-4 border-lighter bg-lighter rounded-2xl px-3 py-2 shadow-sm focus-within:ring-4  focus-within:ring-lighter/75 focus-within:bg-dark focus-within:text-white focus-within:border-myblue">
                        <div className='grow'>
                          <label htmlFor="confirmPassword" className="block text-xs font-medium">Confirm Password</label>
                          <input ref={confirmPassword} type="password" name="confirmPassword" id="confirmPassword" className="focus:bg-transparent bg-transparent block w-full border-0 p-0 text-white placeholder-dark focus:placeholder-lighter font-bold focus:ring-0 sm:text-md" placeholder="Enter password again" />
                        </div>
                        {
                          confirmPasswordVisible ?
                            (<EyeOffIcon onClick={handlePasswordClick} className='w-8 h-8 text-light' />)
                            : (<EyeIcon onClick={handlePasswordClick} className='w-8 h-8 text-light' />)

                        }

                      </div>


                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-white">
                            Remember me
                          </label>
                        </div>

                        <div className="text-xs sm:text-sm">
                          <a href="#" className="font-medium  text-mypink hover:text-myblue">
                            Forgot your password?
                          </a>
                        </div>
                      </div>

                      <div>
                        <button type="submit" className="w-full flex justify-center py-4 px-4 border-4 border-transparent rounded-2xl shadow-sm text-md font-bold text-white bg-myblue hover:bg-light hover:border-myblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Log In
                          <img className='w-6 h-6 ml-2' src='/svgs/battle.svg' alt='battle' />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-fit h-auto">
              <img className="animate-float hover:animate-wiggle duration-300 h-full w-auto object-cover" src="/pokemons/Charlizard.png" alt="Charlizard" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default SignupLayout;