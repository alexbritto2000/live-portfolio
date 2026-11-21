import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:hidden z-20">
            <div className='w-36 h-auto items-center justify-center relative'>
                <CircularText className={"fill-dark animate-spin-slow dark:fill-light opacity-80"} />

                <Link 
                    href="mailto:alexbritto099@gmail.com" 
                    className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-16 h-16 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-center text-xs transition-all"
                >
                    Hire me
                </Link>
            </div>
        </div>
    )
}

export default HireMe
