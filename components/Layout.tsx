import 'tailwindcss/tailwind.css'
import Head from "next/head";
import Image from "next/image";


import {Link as Scroll} from 'react-scroll';
import logo from "../public/logo.png"

export default function Layout({children, title = "自己紹介"}) {
    const navItem = ["about", 'skills', 'values', 'future']
    return (
        <div className="container mx-auto">
            <Head>
                <title>{title}</title>
            </Head>
            <header className="flex flex-col shadow-sm mb-1 md:mb-0 md:flex-row items-center md:justify-between md:px-3">
                <Image src={logo}
                       alt="ロゴ" width={160} height={80} className="object-contain"/>
                <nav>
                    <div className="text-t_green font-lato font-bold space-x-6 md:space-x-8 sm:text-sm md:text-xl">
                        {navItem.map((item,index) => {
                            return (<Scroll to={`${item}`} className=" uppercase" smooth={true}
                                            duration={600} key={index}>{item}</Scroll>)
                        })}
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    )
}

// space-x-6 md:space-x-8