import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Instagram, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import { useTranslations } from '../hook/useTranslations'
import { LanguageContext } from '../context/LanguageContext'

const TEXT_CONFIG = [
    { code: 'HOME', default: 'Home' },
    { code: 'ABOUT_US', default: 'About Us' },
    { code: 'CONTACT_US', default: 'Contact' },
    { code: 'STORY_PAGE_TITLE', default: 'Our Journey: A Legacy of Craftsmanship' },
    { code: 'STORY_PAGE_DESCRIPTION', default: 'Discover the story of Gold House, from humble beginnings to a symbol of elegance and quality.' },
    { code: 'STORY_PAGE_VISION_TITLE', default: 'The Vision Begins' },
    { code: 'STORY_PAGE_VISION_DESCRIPTION', default: 'The founding of Gold House with a vision to create timeless jewelry that embodies elegance and craftsmanship.' },
    { code: 'STORY_PAGE_FIRST_STORE_TITLE', default: 'Our First Store' },
    { code: 'STORY_PAGE_FIRST_STORE_DESCRIPTION', default: 'The grand opening of our first flagship store, a landmark moment that brought our creations to the public.' },
    { code: 'STORY_PAGE_EXPANDING_TITLE', default: 'Expanding Horizons' },
    { code: 'STORY_PAGE_EXPANDING_DESCRIPTION', default: 'Our first international boutique opens in Paris, marking a new chapter of global presence and recognition.' },
    { code: 'STORY_PAGE_SUSTAINABILITY_TITLE', default: 'Commitment to Sustainability' },
    { code: 'STORY_PAGE_SUSTAINABILITY_DESCRIPTION', default: 'Introducing our commitment to ethically sourced materials and sustainable practices, ensuring beauty with a conscience.' },
    { code: 'STORY_PAGE_FUTURE_TITLE', default: 'A Golden Future' },
    { code: 'STORY_PAGE_FUTURE_DESCRIPTION', default: 'Continuing our tradition of excellence and looking towards a bright future, innovating while honoring our heritage.' },
    { code: 'STORY_PAGE_TODAY', default: 'Today' },
]

export const seoData = {
    UZ: {
        title: 'Gold House - Bizning Safarimiz va Zargarlik Merosi',
        description: 'Gold House: nozik zargarlik buyumlarining tarixi va merosi. Elegant uzuklar, bilakuzuklar, zanjirlar va premium sifatli zargarlik san’ati.',
        keywords: 'Gold House, tilla zargarlik, uzuk, bilakuzuk, zanjir, handmade zargarlik, elegant zargarlik, premium zargarlik, tarix, meros, brend hikoyasi',
    },
    RU: {
        title: 'Gold House - Наша История и Наследие Ювелирного Искусства',
        description: 'Gold House: история и наследие изысканных ювелирных изделий. Элегантные кольца, браслеты, цепочки и премиальное качество.',
        keywords: 'Gold House, золотые украшения, кольца, браслеты, цепочки, ручная работа, элегантные украшения, премиальные украшения, история, наследие, бренд',
    },
    EN: {
        title: 'Gold House - Our Journey and Legacy of Craftsmanship',
        description: 'Gold House: the history and legacy of exquisite gold jewelry. Elegant rings, bracelets, chains, and premium craftsmanship.',
        keywords: 'Gold House, gold jewelry, rings, bracelets, chains, handmade, elegant jewelry, premium craftsmanship, history, legacy, brand story',
    },
}

export default function Story() {
    const textMap = useTranslations(TEXT_CONFIG)
    const { language } = useContext(LanguageContext)

    return (
        <div className="bg-background-light dark:bg-background-dark">
            <Helmet>
                <title>{seoData[language]?.title}</title>
                <meta name="description" content={seoData[language]?.description} />
                <meta name="keywords" content={seoData[language]?.keywords} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={seoData[language]?.title} />
                <meta property="og:description" content={seoData[language]?.description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/logo.jpg" />
                <meta property="og:site_name" content="Gold House" />
                <meta property="og:locale" content={language} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:see_also" content="https://t.me/GoldHouse0711" />
                <meta property="og:see_also" content="https://www.instagram.com/goldhouseeee" />
            </Helmet>
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <Navbar />
                            <main className="flex-1">
                                <div className="py-12 md:py-20">
                                    <div className="flex min-h-[360px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4" data-alt="Abstract gold texture background" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlqe6AXfKb2LRCMTSInofgPy0w0hV5sbzWiQxaSIfcKMAcqjgA6W7IRrYOwiabs-SjkUwaSBHNN8lLZWAeX4wZ0fvt1JSSriIP21QXG7Bm3bRaoKS0uHzC9jbYaUwQRW5G0PIf6ETA8m99oWVLzgR8YVKkjf3Xhg14vpd2a2xwDTrQ6JEI1Vs_pKSSLtyw9qLzmxqPPpvA_atMwVojfyuJvJXRgHNm1KRcBDOef7L1lsuyeJd5nQIdJDitSjVZdHRcM1qT4blDyA")' }}>
                                        <div className="flex flex-col gap-4 text-center">
                                            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight font-display">{textMap['STORY_PAGE_TITLE']}</h1>
                                            <h2 className="text-white text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto font-sans">{textMap['STORY_PAGE_DESCRIPTION']}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative px-4 sm:px-6 md:px-10 py-16">
                                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>
                                    <div className="space-y-16">
                                        <div className="relative flex items-center group">
                                            <div className="hidden md:block w-1/2 pr-8">
                                                <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 className="text-primary text-2xl font-bold font-display">1975</h3>
                                                    <h4 className="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">{textMap['STORY_PAGE_VISION_TITLE']}</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-sans">{textMap['STORY_PAGE_VISION_DESCRIPTION']}</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white">auto_awesome</span>
                                            </div>
                                            <div className="w-full md:w-1/2 md:pl-8">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img className="w-full h-64 object-cover" alt="Founder's vintage workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBilVUQ9s7u_9tTZ6Vz4J__VSGke0vaQizjXWKNDHksRKhfztWmg-qAmeisE8L2rpc26NNOKsHRHK83-zy6EQzDA_d8WTnVnmjn_vFOJ8a6-ImxFKIaEOMpdohrclPXqKciS3MChPFAAjhGf3UrS3R3UoS82KG4iCYdXEKgFIh5sN8l9oyaisNTU2YZ1MVO15TXH8zzMbIc6zwrQvArpPh5KomHHZ-HFVTTOihiNE3CYqed84w1zT80kilYyltgl7k324P-EOh7wQ" />
                                                    <div className="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 className="text-primary text-xl font-bold font-display">1975</h3>
                                                        <h4 className="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">{textMap['STORY_PAGE_VISION_TITLE']}</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">{textMap['STORY_PAGE_VISION_DESCRIPTION']}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative flex items-center flex-row-reverse group">
                                            <div className="hidden md:block w-1/2 pl-8">
                                                <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 className="text-primary text-2xl font-bold font-display">1990</h3>
                                                    <h4 className="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">{textMap['STORY_PAGE_FIRST_STORE_TITLE']}</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-sans">{textMap['STORY_PAGE_FIRST_STORE_DESCRIPTION']}</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white">store</span>
                                            </div>
                                            <div className="w-full md:w-1/2 md:pr-8">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img className="w-full h-64 object-cover" alt="First flagship store exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH9M2k_Ect__TxX61y3WKP3UzGSfu9xjdMUvRyZeozUDXKg1BNtjt_f6a0EtcY-pbuRW6iUoLE-Cnabx27EupEuRkyePVnzEKYENr7KWT6pZTAlSXpGtoPkxA3ZGDKPFb-BGobpGe872y_JcXf9WIOROq-mOum_YWqW_Y-CQciHjUsZwIvEogVKvkFTH4va2modnQ-yz_KsP_x_0sijoiEErPPSrmVnB1EfbIO1j4iKbqVf3lU712L95g9AJYEa8Z3PkUjIIjSqQ" />
                                                    <div className="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 className="text-primary text-xl font-bold font-display">1990</h3>
                                                        <h4 className="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">{textMap['STORY_PAGE_FIRST_STORE_TITLE']}</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">{textMap['STORY_PAGE_FIRST_STORE_DESCRIPTION']}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative flex items-center group">
                                            <div className="hidden md:block w-1/2 pr-8">
                                                <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 className="text-primary text-2xl font-bold font-display">2005</h3>
                                                    <h4 className="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">{textMap['STORY_PAGE_EXPANDING_TITLE']}</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-sans">{textMap['STORY_PAGE_EXPANDING_DESCRIPTION']}</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white">public</span>
                                            </div>
                                            <div className="w-full md:w-1/2 md:pl-8">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img className="w-full h-64 object-cover" alt="Eiffel Tower in Paris" data-location="Paris" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPpxJUhSmbcPNPQRpwlx-nV4MI94H9u-qLoebc7syrJ_nsUlFwpGlxNL-mvU3KwJb6dDb6izeuOESKOZzc4Nt-YdtC7SPDEghv7zqtxPyGVsg9l_bpc9fbxvnGZ-UPofqtmuctB3STnzbuOllcAPWEckiHgiRo6oD1feKC6gN3Ds07WYaIkCQP0a-XcS6aA2ZRUFNTo29pgejsl6wntkUX-61gBJJCht6wwb086w9sp9g8En8ynPOH_F1YAZoV4n29NvKsL749jQ" />
                                                    <div className="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 className="text-primary text-xl font-bold font-display">2005</h3>
                                                        <h4 className="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">{textMap['STORY_PAGE_EXPANDING_TITLE']}</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">{textMap['STORY_PAGE_EXPANDING_DESCRIPTION']}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative flex items-center flex-row-reverse group">
                                            <div className="hidden md:block w-1/2 pl-8">
                                                <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 className="text-primary text-2xl font-bold font-display">2015</h3>
                                                    <h4 className="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">{textMap['STORY_PAGE_SUSTAINABILITY_TITLE']}</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-sans">{textMap['STORY_PAGE_SUSTAINABILITY_DESCRIPTION']}</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white">eco</span>
                                            </div>
                                            <div className="w-full md:w-1/2 md:pr-8">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img className="w-full h-64 object-cover" alt="Ethically sourced gold nugget in hands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcf4_br-LO-OM4RNnkKKlO1SslNenVnO5J64U5j9bGcEqQM2l2OmrvPN46-bHP2DNb8MUrBDiDXFrBbhMsPQiZ1ZYVYsvV8Y10TraZipMF21l0deuwcqdx8_ESLuEZWP1f1NleV-hS5gMKY66HUdxRENXH9X186uM74IhzOO1G5rsyoUPmTmZoGbhHzF5bmV5dWJ-jSZpm8ScWj_ZLNTsAlIBFu0yeygBLwEjq80XzxG3DZx78a3_7iC7G4sH3eJ_z_ELSpM1L8g" />
                                                    <div className="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 className="text-primary text-xl font-bold font-display">2015</h3>
                                                        <h4 className="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">{textMap['STORY_PAGE_SUSTAINABILITY_TITLE']}</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">{textMap['STORY_PAGE_SUSTAINABILITY_DESCRIPTION']}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative flex items-center group">
                                            <div className="hidden md:block w-1/2 pr-8">
                                                <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 className="text-primary text-2xl font-bold font-display">{textMap['STORY_PAGE_TODAY']}</h3>
                                                    <h4 className="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">{textMap['STORY_PAGE_FUTURE_TITLE']}</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-sans">{textMap['STORY_PAGE_FUTURE_DESCRIPTION']}</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white">rocket_launch</span>
                                            </div>
                                            <div className="w-full md:w-1/2 md:pl-8">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img className="w-full h-64 object-cover" alt="Modern jewelry design on Link gold background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-WhXhgb0AutrIyWMInjfPTmdW_KA9-r_6sbPNkBpUS-0WLY1KbEcjkd-Q7JShtC5ZsxzZ-clmoUPqa-G4Npo6CC7x2Zd1d1TtQsqAiBdKGc6nnHP6hfAVzRjzg1jlEtPNka-NNgRj4WUjh1sOlrRY4LmR7NS9TXrLQKJqew3TZ5T8bACRb8u89IyskXLlL9B24AE7U0_lIvboe2CgGzhFvSlVCNDsHKSCBcuHxjtS0r7oVgS3fLJFmtQa82PjuotwpOVcwH3iIQ" />
                                                    <div className="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 className="text-primary text-xl font-bold font-display">{textMap['STORY_PAGE_TODAY']}</h3>
                                                        <h4 className="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">{textMap['STORY_PAGE_FUTURE_TITLE']}</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">{textMap['STORY_PAGE_FUTURE_DESCRIPTION']}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-solid border-t-[#f0edea] dark:border-t-[#2a2622] mt-16">
                                <div className="flex flex-wrap items-center justify-center gap-6">
                                    <Link className="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal min-w-40 font-sans" to="/">
                                        {textMap['HOME']}
                                    </Link>
                                    <Link className="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal min-w-40 font-sans" to="/about">
                                        {textMap['ABOUT_US']}
                                    </Link>
                                    <Link className="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal min-w-40 font-sans" to="/contact">
                                        {textMap['CONTACT_US']}
                                    </Link>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <Link to="https://t.me/GoldHouse0711" className="flex flex-col items-center gap-2 text-center">
                                        <div className="rounded-full bg-[#f0edea] dark:bg-[#2a2622] p-3 w-10 h-10 flex items-center justify-center">
                                            <Send className="text-[#181411] dark:text-white w-4 h-4" />
                                        </div>
                                    </Link>

                                    <Link to="https://www.instagram.com/goldhouseeee" className="flex flex-col items-center gap-2 text-center">
                                        <div className="rounded-full bg-[#f0edea] dark:bg-[#2a2622] p-3 w-10 h-10 flex items-center justify-center">
                                            <Instagram className="text-[#181411] dark:text-white w-4 h-4" />
                                        </div>
                                    </Link>
                                </div>
                                <p className="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal font-sans">© 2025 MYB Team. All Rights Reserved.</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
