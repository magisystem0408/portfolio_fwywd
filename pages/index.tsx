import Image from 'next/image'
import Layout from "../components/Layout";

import future from "../public/future.png"


export default function Home() {
    return (
        <Layout>
            <div id="main_view"
                 className="flex flex-col md:flex-row md:justify-between py-6 px-3 tracking-widest w-full bg-b-header">
                <div
                    className="flex flex-col items-center md:items-start font-bold text-white my-auto md:ml-20 mx-auto">

                    <h1 className="font-note text-2xl md:text-3xl md:text-4xl md:mb-5">ポートフォリオサイト</h1>
                    <p className="font-note opacity-80 md:text-xl md:text-2xl">明治大学総合数理学部4年 松戸 誠人</p>
                </div>
                <Image src="https://res.cloudinary.com/do3sqyd6d/image/upload/v1630951958/fwywd/lp/hero_b8xxob.png"
                       width={800}
                       height={500}
                       className="bg-no-repeat object-contain" quality={75}/>
            </div>

            <div id="about" className=" md:bg-bg_pc_about bg-cover bg-no-repeat pb-48">

                <div className="flex flex-col md:flex-row items-center justify-center py-5 md:py-14">
                    <h2 className="tracking-widest font-note text-2xl md:text-3xl font-bold text-t_black">私について</h2>
                    <span
                        className="tracking-widest font-lato text-sm md:text-xl font-bold text-t_green md:ml-2">About</span>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:mx-8 md:mx-32 font-note">
                    <div className="flex flex-col items-center md:mx-1 pb-5 md:pb-0">
                        <Image
                            src="https://res.cloudinary.com/do3sqyd6d/image/upload/v1630951557/fwywd/lp/about-1_zicsmt.png"
                            width={200} height={200}
                            alt="趣味" className="object-contain" quality={75}/>
                        <div className="font-bold text-2xl text-t_green my-3">趣味</div>
                        <p className="md:items-start px-6 md:px-10 text-sm md:text-xl">
                            DeNAの運営するサービスAnycawを利用してスポーツカーをレンタルすることです。最近はトヨタのスープラをレンタルして宇都宮までドライブしてきました。シェアサービスを最近利用しています。
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:mx-1 pb-5">
                        <Image
                            src="https://res.cloudinary.com/do3sqyd6d/image/upload/v1630951557/fwywd/lp/about-2_tsjpcx.png"
                            width={200} height={200}
                            alt="好きな食べ物" className="object-contain" quality={75}/>
                        <div className="font-bold text-2xl text-t_green my-3">好きな食べ物</div>
                        <p className="md:items-start px-6 md:px-10 text-sm md:text-xl">
                            ガムボトルを一週間に1つ消費します。一日中デスクに向かうので口に何かを入れていることが多い事から、口にずっと残ってガムを採用しました。最近は1週間で2つ消費しています。
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:mx-1 pb-5">
                        <Image
                            src="https://res.cloudinary.com/do3sqyd6d/image/upload/v1630951557/fwywd/lp/about-3_urztjr.png"
                            width={240} height={200}
                            alt="性格" className="object-contain" quality={75}/>
                        <div className="font-bold text-2xl text-t_green my-3">性格</div>
                        <p className="md:items-start px-6 md:px-10 text-sm md:text-xl">
                            マズローの心理学よりENTJです。無情なほど合理的なことが多いのが特徴で、持ち前の意欲や強い意志、切れ味の良い頭脳を活かして、自分自身に課した目標はどんなものでも達成します。
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
                            <Image
                                src="https://res.cloudinary.com/do3sqyd6d/image/upload/v1630952534/fwywd/lp/skill_chdoyu.png"
                                quality={100} alt="スキル" width={2000} height={2000}
                                className=" object-contain"/>
                        </div>

                        <div className="flex flex-col md:pl-24 md:pr-12 -mt-10 md:-mt-0">
                            <p className="font-note text-sm md:text-xl py-2">
                                大学ではComputerVisionの分野を中心として勉強していました。研究では3次元骨格推定技術openposeを用いてドローンをジェスチャーによって遠隔操作をするといった技術を研究していました。また、中学3年から映像制作をしていたのでAfterEffect、Blenderといった映像系など幅広く使えます。
                            </p>

                            <div className="mt-3 bg-white rounded p-7">

                                {/*TODO ここをmap関数で回す*/}
                                <div className="font-lato font-bold text-xl mb-2 text-t_green">Python</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "70%"}} className="bg-ph_green"></div>
                                    </div>
                                    <div className="ml-3">70%</div>
                                </div>

                                <div className="font-lato font-bold text-xl mb-2 text-t_green">Go lang</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "20%"}} className="bg-ph_green"></div>
                                    </div>
                                    <div className="ml-3">20%</div>
                                </div>

                                <div className="font-lato font-bold text-xl mb-2 text-t_green">NEXT-NUXT</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "40%"}} className="bg-ph_green"></div>
                                    </div>
                                    <div className="ml-3">40%</div>
                                </div>

                                <div className="font-lato font-bold text-xl mb-2 text-t_green">AfterEffect</div>

                                <div className="flex flex-row items-center">
                                    <div className="inline-block h-4 flex w-full rounded bg-p_green">
                                        <div style={{width: "80%"}} className="bg-ph_green"></div>
                                    </div>
                                    <div className="ml-3">80%</div>
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
                        <Image
                            src="https://res.cloudinary.com/do3sqyd6d/image/upload/v1630951028/fwywd/lp/value1_k7jpre.png"
                            quality={75} alt="価値観01"
                            width={200}
                            height={200}
                            className="object-contain"/>
                        <div className=" text-center text-t_black font-bold text-xl py-3 md:py-5">高い目標に挑戦することが好き</div>
                        <p className="text-sm md:text-xl px-4">
                            戦略的に物事を考え、長期にわたり集中しながら、強い決意と精度へのこだわりをもち、計画の各過程を遂行できる能力により、パワフルに活躍します。
                        </p>
                    </li>

                    <li className="flex flex-col pb-7 md:pb-0">
                        <Image
                            src="https://res.cloudinary.com/do3sqyd6d/image/upload/v1630951028/fwywd/lp/value2_wpjffn.png"
                            quality={75} alt="価値観02"
                            width={200} height={200}
                            className="object-contain"/>
                        <div className="text-center text-t_black font-bold text-xl py-3 md:py-5">感情表現が得意ではありません</div>
                        <p className="text-sm md:text-xl px-4">
                            指揮官型の人達にとって、感情を表すことは弱さを示すことで、この考え方がもとで、敵を作りやすい一面もあります。検証やフィードバックに対して非常に敏感です。
                        </p>
                    </li>
                    <li className="flex flex-col">
                        <Image
                            src="https://res.cloudinary.com/do3sqyd6d/image/upload/v1630951028/fwywd/lp/value3_hvgxd8.png"
                            quality={75} alt="価値観03"
                            width={200} height={200}
                            className="object-contain"/>
                        <div className="">
                            <div className="text-center text-t_black font-bold text-xl py-3 md:py-5">原動力</div>
                            <p className="text-sm md:text-xl px-4">
                                想像力やイノベーションを駆使し課題に取り組み、細かい部分だけでなく、全体の状況を俯瞰して解決策を見つけるのが得意。変化を恐れず自分の直観を信じます。
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
                                まずは、バックエンド(GoやPython)を中心としたフルスタックエンジニアを目指したいと思います。直近3年は何事にも恐れずに開発や企画を挑戦し続けたいと思います。失敗もありますが諦めずに努力し続ける永久機関であると
                            </p>
                        </div>

                        <div className="md:-mt-20">
                            <Image src={future} quality={100} alt="スキル" width={1500} height={1500}
                                   className="object-contain"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
