import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Instagram, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import { useTranslations } from '../hook/useTranslations'
import { LanguageContext } from '../context/LanguageContext'
import Img1 from "../assets/img/store.png"


const TEXT_CONFIG = [
    { code: 'ABOUT_PAGE_TITLE', default: 'A Legacy of Craftsmanship' },
    { code: 'ABOUT_PAGE_DESCRIPTION', default: 'Discover the story behind our timeless jewelry.' },
    { code: 'ABOUT_PAGE_HISTORY', default: 'Founded in 1923 by artisan jewelers, Gold House has grown from a small family workshop...' },
    { code: 'ABOUT_PAGE_MISSION', default: 'To create exquisite jewelry that celebrates the most meaningful moments of life...' },
    { code: 'ABOUT_PAGE_VALUES', default: 'Craftsmanship, integrity, and customer devotion define our philosophy.' },
    { code: 'ABOUT_PAGE_QUOTE', default: 'Jewelry is more than adornment...' },
    { code: 'ABOUT_PAGE_FOUNDERS', default: 'The Founders' },
    { code: 'ABOUT_PAGE_OUR_VALUES', default: 'Our Values' },
    { code: 'ABOUT_PAGE_OUR_MISSION', default: 'Our Mission' },
    { code: 'ABOUT_PAGE_OUR_HISTORY', default: 'Our History' },
]

const seoData = {
    UZ: {
        title: 'Gold House - Tilla Zargarlik va Mukammallik',
        description: 'Gold House: nozik zargarlik buyumlari, uzluksiz dizayn va premium sifat. Tilla uzuklar, bilakuzuklar va zanjirlar.',
        keywords: 'tilla zargarlik, uzuk, bilakuzuk, zanjir, sovg‘a zargarlik, to‘y uzuklari, premium zargarlik, elegant zargarlik, Gold House, luks aksessuarlar, zargarlik san’ati, nafis zargarlik',
    },
    RU: {
        title: 'Gold House - Золотые Украшения и Роскошь',
        description: 'Gold House: изысканные ювелирные изделия, вечный дизайн и премиальное качество. Золотые кольца, браслеты и цепочки.',
        keywords: 'золотые украшения, кольца, браслеты, цепочки, подарочные украшения, свадебные кольца, премиальные украшения, элегантные украшения, Gold House, ювелирное искусство, ручная работа',
    },
    EN: {
        title: 'Gold House - Luxury Gold Jewelry & Craftsmanship',
        description: 'Gold House: exquisite gold jewelry, timeless designs, and premium quality. Gold rings, bracelets, and chains for every occasion.',
        keywords: 'gold jewelry, rings, bracelets, chains, gift jewelry, wedding rings, premium craftsmanship, luxury accessories, Gold House, handmade jewelry, elegant jewelry',
    },
}

export default function About() {
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
                            <main className="flex-grow">
                                <div className="px-4 py-16">
                                    <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-4" data-alt="A vintage photograph of the original Gold House workshop, with jewelers at their benches." style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYkNblqGCkxy3PDYpS9jTWFdWkua4LcLA4SR9GBXx715ANt_L9Z0gONMFwsz4mXehsl5hdeLtfxJG6Q7-bxS78zyT_hkZHQEbSqC0qaLdvBd_l0PirZcrAX4iGu50K-T_85hQqLZ5F9R3XQIqYTgtJtOJNanoAgouJA_hhmdAdW0oX7_gmvRM4CfLOMiV95ZT3ApfgJ0MBhTUzmBmExogspnTFiLRRk8QVUV9pmML6JnqPJy3mhm_H2GwV9Ukevka_Pr050z1Lng")' }}>
                                        <div className="flex flex-col gap-2 text-center">
                                            <h1 className="text-white text-5xl font-black leading-tight  font-display">{textMap['ABOUT_PAGE_TITLE']}</h1>
                                            <p className="text-white text-lg font-normal leading-normal">{textMap['ABOUT_PAGE_DESCRIPTION']}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-10 py-12">
                                    <h2 className="text-[#181411] dark:text-white tracking-light text-4xl font-bold leading-tight text-center pb-6 font-display">{textMap['ABOUT_PAGE_OUR_HISTORY']}</h2>
                                    <p className="text-[#181411] dark:text-gray-300 text-lg font-normal leading-relaxed text-center max-w-3xl mx-auto">{textMap['ABOUT_PAGE_HISTORY']}</p>
                                </div>
                                <div className="px-4 py-8">
                                    <div className="flex w-full grow @container">
                                        <div className="w-full gap-4 overflow-hidden aspect-[1/2] md:aspect-[2/1] grid md:grid-cols-2 grid-cols-1">
                                            <div className="w-full bg-center bg-no-repeat bg-cover rounded-lg" data-alt="A close-up shot of an artisan meticulously setting a diamond into a gold ring." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTX3e-9D6U3L3dFVNCUFcJs4mYdpfweystdM_olypjoVrTJVfZxE4YWGw5M527AV3dGlcH2NpXh_5dXL1h_wVGgzitqcjWXmbeqcj0TGr1L_gt9AknPOAlGuc1O1FcMHwecaZWCmtCh99CPhkzrHtCsSY4GL7GoY5aqbhox0F2jewPl0MXkkg6DXs6nP38RqeCPQTBeLrrjb0p-xAQXEsSssG5_tR0iIXeTXQfdBfrApv_BTbIW_MslRoxU_Br3AICJxOHVLckww")' }}></div>
                                            <div className="w-full bg-center bg-no-repeat bg-cover rounded-lg" data-alt="An elegant, modern Gold House storefront with large glass windows." style={{ backgroundImage: `url(${Img1})` }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-10 py-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                                        <div>
                                            <h2 className="text-primary dark:text-primary text-3xl font-bold leading-tight pb-4 font-display">{textMap['ABOUT_PAGE_OUR_MISSION']}</h2>
                                            <p className="text-[#181411] dark:text-gray-300 text-lg font-normal leading-relaxed">{textMap['ABOUT_PAGE_MISSION']}</p>
                                        </div>
                                        <div className="text-right">
                                            <h2 className="text-primary dark:text-primary text-3xl font-bold leading-tight pb-4 font-display">{textMap['ABOUT_PAGE_OUR_VALUES']}</h2>
                                            <p className="text-[#181411] dark:text-gray-300 text-lg font-normal leading-relaxed">{textMap['ABOUT_PAGE_VALUES']}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-10 py-12 text-center">
                                    <blockquote className="text-[#181411] dark:text-white text-3xl italic font-light leading-snug max-w-4xl mx-auto border-l-4 border-primary pl-6 font-display">{textMap['ABOUT_PAGE_QUOTE']}</blockquote>
                                    <p className="mt-4 text-primary dark:text-primary text-lg font-medium">{textMap['ABOUT_PAGE_FOUNDERS']}</p>
                                </div>
                            </main>
                            <footer className="text-[#181411] dark:text-white body-font">
                                <div className="container px-5 py-8 mx-auto flex items-center justify-between sm:flex-row flex-col">
                                    <Link to="" className="flex title-font font-medium items-center md:justify-start justify-center text-[#181411] dark:text-white">
                                        <span className="ml-3 text-xl font-display">Gold House</span>
                                    </Link>
                                    <p className="text-sm text-gray-500 dark:text-gray-400  sm:py-2 sm:mt-0 mt-4">© 2025 MYB Team. All Rights Reserved.</p>
                                    <div className="flex justify-end space-x-4">
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
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
