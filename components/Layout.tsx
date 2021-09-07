import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {Link as Scroll} from 'react-scroll';
import logo from "../public/logo.png"
import logo_white from "../public/logo_white.png"
import twitter from "../public/twitter.svg"
import facebook from "../public/facebook.svg"


export default function Layout({children, title = "自己紹介"}) {
    const navItem = ["about", 'skills', 'values', 'future']
    return (
        <div className="container mx-auto">
            <Head>
                <title>{title}</title>
            </Head>
            <header className="flex flex-col mb-1 md:mb-0 md:flex-row items-center md:justify-between md:px-3">
                <Image src={logo}
                       alt="logo" width={160} height={80} className="object-contain"/>
                <nav>
                    <div className="text-t_green font-lato font-bold space-x-6 md:space-x-8 sm:text-sm md:text-xl">
                        {navItem.map((item, index) => {
                            return (<Scroll to={`${item}`} className=" uppercase" smooth={true}
                                            duration={600} key={index} offset={-30}>{item}</Scroll>)
                        })}
                    </div>
                </nav>
            </header>
            <main>{children}</main>
            <footer className="bg-b-footer text-white flex flex-col items-center">
                <div className="mb-5">
                    <div className="flex flex-col text-xs justify-center visible md:invisible">

                        <div
                            className="pt-9 invisible md:visible flex-row flex justify-center items-center tracking-widest">
                            <span className="text-xs font-lato font-bold">CREATED BY</span>
                            <span className="pl-4 text-xl font-sans ">松戸 誠人</span>
                        </div>

                        <div className="mx-auto -mt-9">
                            <Link href="/"><a>お問い合わせ</a></Link>
                            <Link href="/"><a className="pr-6">助成金</a></Link>
                        </div>
                        <div className="mx-auto mt-2">
                            <Link href="/"><a className="pr-6">特定商品取引法に基づく表記</a></Link>
                            <Link href="/"><a>プライバシーポリシー</a></Link>
                        </div>
                    </div>
                </div>

                <Image src={logo_white} quality={75} width={150} height={150} className="object-contain"/>

                <div className="py-6 flex-row flex">
                    <Image src={twitter} quality={100} alt="twitter" width={30} height={30}
                           className="object-contain"/>
                    <div className="px-2"/>
                    <Image src={facebook} quality={100} alt="facebook" width={30} height={30}
                           className="object-contain"/>
                </div>
                <span className="tracking-widest text-xs inline-block mb-6">&copy;2021 KIKAGAKU</span>
            </footer>
        </div>
    )
}

