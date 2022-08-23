import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link'
import { useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image';
import { HiOutlineMenuAlt3 } from 'react-icons/Hi';
import { MdClose } from 'react-icons/Md';

const Navbar = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white sticky top-0 z-50 shadow-lg font-eng px-5 ">
            <div className="justify-between  mx-auto md:items-center md:flex ">
                <div>
                    <div className="flex items-center justify-between py-3  md:block">
                        <Link href={'/'}>
                            <Image className='cursor-pointer' src="/gif_logo.gif" width={60} height={50} />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >


                                {/* 3 line */}

                                {navbar ? (
                                    <MdClose className='text-3xl text-darken' />
                                ) : (
                                    <HiOutlineMenuAlt3 className='text-3xl text-darken' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <Link href="/"><li className="cursor-pointer text-darken hover:text-[#32a6e0]">
                                <a>Home</a>
                            </li></Link>
                            <Link href="/blog"><li className="cursor-pointer text-darken hover:text-[#32a6e0]">
                                <a >Blog</a>
                            </li></Link>
                            <Link href="/about"><li className="cursor-pointer text-darken hover:text-[#32a6e0]">
                                <a >About US</a>
                            </li></Link>
                            <Link href="/contact"><li className="cursor-pointer text-darken hover:text-[#32a6e0]">
                                <a >Contact US</a>
                            </li></Link>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:hidden">
                            <a
                                href="javascript:void(0)"
                                className="inline-block w-full px-4 py-2 text-center text-white bg-darken rounded-md shadow-md hover:bg-light"
                            >
                                Sign in
                            </a>
                            <a
                                href="javascript:void(0)"
                                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow-md hover:bg-gray-100"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-white bg-darken rounded-md shadow-md hover:bg-light"
                    >
                        Sign in
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow-md hover:bg-gray-100"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar