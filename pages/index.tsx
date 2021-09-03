import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import Layout from "../component/Layout";
import dynamic from "next/dynamic";
import hero from "../public/hero.png"
import about_1 from "../public/about-1.png"
import about_2 from "../public/about-2.png"
import about_3 from "../public/about-3.png"

import skill from "../public/skill.png"

const ScrollRevealContainer = dynamic(
    import('../component/utils/ScrollRevealContainer'), {ssr: false,});

export default function Home() {

    return (
        <Layout>
            <div id="main_view"
                 className="flex flex-col md:flex-row md:justify-between py-6 px-8 tracking-widest w-full bg-b-header">
                <div
                    className="flex flex-col items-center md:items-start font-bold text-white my-auto md:ml-20 mx-auto">

                    {/*TODO ここにアニメーション*/}
                    {/*<ScrollRevealContainer move="right">*/}
                    <h1 className="text-2xl md:text-3xl md:text-4xl md:mb-5">メインタイトル</h1>
                    <p className=" opacity-80 md:text-xl md:text-2xl">サブタイトル</p>
                    {/*</ScrollRevealContainer>*/}
                </div>
                <Image src={hero} className="bg-no-repeat object-contain" quality={75}/>
            </div>

            <div id="about" className="md:bg-bg_pc_about bg-cover bg-no-repeat pb-72">

                <div className="flex flex-col md:flex-row items-center justify-center py-5 md:py-14">
                    <h2 className=" text-3xl font-sans font-bold text-t_black">私について</h2>
                    <span className="text-t_green font-lato font-bold ml-2 text-xl">About</span>
                </div>

                <div className="flex flex-col  md:flex-row justify-center md:mx-8 md:mx-32">
                    <div className="flex flex-col items-center md:mx-1">
                        <Image src={about_1} alt="趣味" className="object-contain" quality={75}/>
                        <div className="font-bold text-2xl text-t_green my-3">趣味</div>
                        <p className="items-start px-10 text-xl">
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:mx-1">
                        <Image src={about_2} alt="好きな食べ物" className="object-contain" quality={75}/>
                        <div className="font-bold text-2xl text-t_green md:my-3">好きな食べ物</div>
                        <p className="items-start px-10 text-xl">
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:mx-1">
                        <Image src={about_3} alt="性格" className="object-contain" quality={75}/>
                        <div className="font-bold text-2xl text-t_green md:my-3">性格</div>
                        <p className="items-start px-10 text-xl">
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>
                </div>
            </div>

            <div id="skills" className="md:bg-bg_pc_skills bg-cover bg-no-repeat -my-36">

                <div className="md:mx-32 md:py-32">

                    <div className="flex flex-col md:flex-row justify-center items-center md:ml-16 md:pb-7">
                        <h3 className=" text-3xl font-sans font-bold text-t_black">スキル</h3>
                        <span className="font-lato font-bold text-t_green md:ml-3 text-xl">SKILLS</span>
                    </div>

                    <div className="flex flex-col md:flex-row mx-20 md:mx-0">
                        <div className="md:-mt-16">
                            <Image src={skill} quality={100} alt="スキル" width={2000} height={2000}
                                   className=" object-contain"/>
                        </div>

                        <div className="flex flex-col md:pl-24 md:pr-12 -mt-10 md:-mt-0">
                            <p className="text-xl">
                                テキストテキストテキストテキストテキストテキストテキスト
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            </p>

                            <div className="mt-3 bg-white rounded p-7">

                                {/*TODO ここをmap関数で回す*/}
                                <div className="font-lato font-bold text-xl mb-2 text-t_green">SLILLSKILL</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "70%"}} className="bg-ph_green"></div></div>
                                    <div className="ml-3">70%</div>
                                </div>

                                <div className="font-lato font-bold text-xl mb-2 text-t_green">SLILLSKILL</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "70%"}} className="bg-ph_green"></div></div>
                                    <div className="ml-3">70%</div>
                                </div>

                                <div className="font-lato font-bold text-xl mb-2 text-t_green">SLILLSKILL</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "70%"}} className="bg-ph_green"></div></div>
                                    <div className="ml-3">70%</div>
                                </div>

                                <div className="font-lato font-bold text-xl mb-2 text-t_green">SLILLSKILL</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "70%"}} className="bg-ph_green"></div></div>
                                    <div className="ml-3">70%</div>
                                </div>
                                {/*TODO ここまで*/}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="values" className="pt-48">

                <div className="flex flex-col md:flex-row justify-center items-center md:ml-16 md:pb-7">
                    <h3 className=" text-3xl font-sans font-bold text-t_black">価値観</h3>
                    <span className="font-lato font-bold text-t_green md:ml-3 text-xl">VALUES</span>
                </div>


            </div>

            <div id="future">

            </div>


        </Layout>
    )
}
