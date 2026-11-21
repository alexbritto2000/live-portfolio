import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
            <Layout className="py-8 flex items-center justify-between dark:text-light dark:border-light lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center lg:py-2">
                    Built with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;
                    <Link href="/" className='underline underline-offset-2 font-semibold'>Alex Britto</Link>
                </div>
                <Link href="mailto:alexbritto099@gmail.com" target="_blank" className='underline underline-offset-2 text-primary dark:text-primaryDark font-medium'>
                    Say hello 👋
                </Link>
            </Layout>
        </footer>
    )
}

export default Footer
