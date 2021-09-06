import Image from 'next/image'
import Layout from "../components/Layout";
import dynamic from "next/dynamic";
import hero from "../public/hero.png"
import about_1 from "../public/about-1.png"
import about_2 from "../public/about-2.png"
import about_3 from "../public/about-3.png"

import value_1 from "../public/value1.png"
import value_2 from "../public/value2.png"
import value_3 from "../public/value3.png"

import skill from "../public/skill.png"
import future from "../public/future.png"


const ScrollRevealContainer = dynamic(
    import('../components/utils/ScrollRevealContainer'), {ssr: false,});

export default function Home() {
    const test = false

    return (
        <Layout>
            <div id="main_view"
                 className="flex flex-col md:flex-row md:justify-between py-6 px-8 tracking-widest w-full bg-b-header">
                <div
                    className="flex flex-col items-center md:items-start font-bold text-white my-auto md:ml-20 mx-auto">

                    {/*TODO ここにアニメーション*/}
                    {/*<ScrollRevealContainer move="right">*/}
                    <h1 className="font-note text-2xl md:text-3xl md:text-4xl md:mb-5">メインタイトル</h1>
                    <p className="font-note opacity-80 md:text-xl md:text-2xl">サブタイトル</p>
                    {/*</ScrollRevealContainer>*/}
                </div>
                <Image src={hero} className="bg-no-repeat object-contain" quality={75}/>
            </div>

            <div id="about" className=" md:bg-bg_pc_about bg-cover bg-no-repeat pb-48">

                <div className="flex flex-col md:flex-row items-center justify-center py-5 md:py-14">
                    <h2 className="tracking-widest font-note text-2xl md:text-3xl font-bold text-t_black">私について</h2>
                    <span
                        className="tracking-widest font-lato text-sm md:text-xl font-bold text-t_green md:ml-2">About</span>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:mx-8 md:mx-32 font-note">
                    <div className="flex flex-col items-center md:mx-1 pb-5 md:pb-0">
                        <Image src={about_1} alt="趣味" className="object-contain" quality={75}/>
                        <div className="font-bold text-2xl text-t_green my-3">趣味</div>
                        <p className="md:items-start px-6 md:px-10 text-sm md:text-xl">
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:mx-1 pb-5">
                        <Image src={about_2} alt="好きな食べ物" className="object-contain" quality={75}/>
                        <div className="font-bold text-2xl text-t_green my-3">好きな食べ物</div>
                        <p className="md:items-start px-6 md:px-10 text-sm md:text-xl">
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:mx-1 pb-5">
                        <Image src={about_3} alt="性格" className="object-contain" quality={75}/>
                        <div className="font-bold text-2xl text-t_green my-3">性格</div>
                        <p className="md:items-start px-6 md:px-10 text-sm md:text-xl">
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-bg_pc_skills_sp md:bg-bg_pc_skills bg-cover  bg-no-repeat -my-40 md:-my-36">
                <div className="py-16 md:mx-32 md:py-32">

                    <div id="skills" className="flex flex-col md:flex-row justify-center items-center md:ml-24 md:pb-7">
                        <h3 className="tracking-widest font-note text-2xl md:text-3xl font-bold text-t_black">スキル</h3>
                        <span
                            className="tracking-widest font-lato text-sm md:text-xl font-bold text-t_green md:ml-2">SKILLS</span>
                    </div>

                    <div className="flex flex-col md:flex-row mx-6 md:mx-20 md:mx-0">
                        <div className="-mt-7 md:-mt-16">
                            <Image src={skill} quality={100} alt="スキル" width={2000} height={2000}
                                   className=" object-contain"/>
                        </div>

                        <div className="flex flex-col md:pl-24 md:pr-12 -mt-10 md:-mt-0">
                            <p className="text-sm md:text-xl py-2">
                                テキストテキストテキストテキストテキストテキストテキスト
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            </p>

                            <div className="mt-3 bg-white rounded p-7">

                                {/*TODO ここをmap関数で回す*/}
                                <div className="font-lato font-bold text-xl mb-2 text-t_green">SLILLSKILL</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "70%"}} className="bg-ph_green"></div>
                                    </div>
                                    <div className="ml-3">70%</div>
                                </div>

                                <div className="font-lato font-bold text-xl mb-2 text-t_green">SLILLSKILL</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "70%"}} className="bg-ph_green"></div>
                                    </div>
                                    <div className="ml-3">70%</div>
                                </div>

                                <div className="font-lato font-bold text-xl mb-2 text-t_green">SLILLSKILL</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "70%"}} className="bg-ph_green"></div>
                                    </div>
                                    <div className="ml-3">70%</div>
                                </div>

                                <div className="font-lato font-bold text-xl mb-2 text-t_green">SLILLSKILL</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "70%"}} className="bg-ph_green"></div>
                                    </div>
                                    <div className="ml-3">70%</div>
                                </div>
                                {/*TODO ここまで*/}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-48">

                <div id="values" className="flex flex-col md:flex-row justify-center items-center md:ml-16 md:pb-7">
                    <h4 className="tracking-widest font-note text-2xl md:text-3xl font-bold text-t_black">価値観</h4>
                    <span
                        className="tracking-widest font-lato text-sm md:text-xl font-bold text-t_green md:ml-2">VALUES</span>
                </div>

                <ul className="text-t_black font-note inline-flex bg-white shadow flex-col md:flex-row mx-5 md:mx-32 py-7 md:divide-x-2 divide-d_green justify-center">
                    <li className=" flex flex-col pb-7 md:pb-0">
                        <Image src={value_1} quality={75} alt="価値観01" className="object-contain"/>
                        <div className=" text-center text-t_black font-bold text-xl py-3 md:py-5">価値観01</div>
                        <p className="text-sm md:text-xl px-4">
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </li>

                    <li className="flex flex-col pb-7 md:pb-0">
                        <Image src={value_2} quality={75} alt="価値観02" className="object-contain"/>
                        <div className="text-center text-t_black font-bold text-xl py-3 md:py-5">価値観02</div>
                        <p className="text-sm md:text-xl px-4">
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </li>
                    <li className="flex flex-col">
                        <Image src={value_3} quality={75} alt="価値観03" className="object-contain"/>
                        <div className="">
                            <div className="text-center text-t_black font-bold text-xl py-3 md:py-5">価値観03</div>
                            <p className="text-sm md:text-xl px-4">
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="bg-bg_pc_future_sp md:bg-bg_pc_future bg-cover bg-no-repeat -mt-44 md:-mt-60 font-note">
                <div className="md:mx-32 pt-48 md:pt-72">
                    <div className="flex flex-col md:flex-row md:mx-20 md:mx-0 pt-9">
                        <div className="flex flex-col md:pr-10">
                            <div id="future" className="flex flex-col md:flex-row justify-start items-center  md:pb-7">
                                <h4 className="tracking-widest font-note text-2xl md:text-3xl font-bold text-t_black">3年後にやりたいこと</h4>
                                <span
                                    className="tracking-widest font-lato text-sm md:text-xl font-bold text-t_green md:ml-2 pt-1 md:pt-0">FUTURE</span>
                            </div>
                            <p className="text-sm md:text-xl px-6 md:px-0 pt-3 md:pt-0">
                                テキストテキストテキストテキストテキストテキストテキスト
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            </p>
                        </div>

                        <div className="md:-mt-20">
                            <div className="md:visible">
                                {
                                    screen.width >= 768 ? (
                                        <Image src={future} quality={100} alt="スキル" width={screen.width} height={1500}
                                               className="object-contain"/>
                                    ) : (
                                        <Image src={future} quality={100} alt="スキル" width={screen.width}
                                               className="object-contain"/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
