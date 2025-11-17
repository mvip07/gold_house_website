import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Instagram, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import { useProducts } from '../hook/useProducts'
import { useCertificates } from '../hook/useCertificates'
import { useTranslations } from '../hook/useTranslations'
import { LanguageContext } from '../context/LanguageContext'
import Img1 from "../assets/img/home.png"
import Img2 from "../assets/img/home_about.png"

const HOME_TEXT_CONFIG = [
    { code: 'HOME_PAGE_MAIN_TITLE', default: 'Elegance in Every Detail' },
    { code: 'HOME_PAGE_MAIN_DESCRIPTION', default: 'Discover the timeless beauty of handcrafted gold jewelry, where tradition meets modern luxury.' },
    { code: 'HOME_PAGE_MAIN_BTN', default: 'Explore Our Collections' },
    { code: 'HOME_PAGE_ABOUT_TITLE', default: 'A Legacy of Craftsmanship' },
    { code: 'HOME_PAGE_ABOUT_DESCRIPTION', default: 'For over three decades, Gold House has been synonymous with exceptional quality and artistry. We are a family-owned business dedicated to preserving the ancient craft of goldsmithing while embracing contemporary design.' },
    { code: 'HOME_PAGE_ABOUT_BTN', default: 'Learn More About Us' },
    { code: 'HOME_PAGE_PRODUCT_TITLE', default: 'Featured Collections' },
    { code: 'HOME_PAGE_PRODUCT_DESCRIPTION', default: 'Each piece is a testament to our commitment to excellence, designed to be cherished for generations.' },
    { code: 'OUR_CERTIFICATE', default: 'Certified Excellence' },
    { code: 'OUR_STORY', default: 'Our Journey Through Time' },
    { code: 'HOME_PAGE_STORY_1_TITLE', default: 'The Beginning' },
    { code: 'HOME_PAGE_STORY_1_DESCRIPTION', default: 'Our founder opens a small workshop with a vision to create extraordinary jewelry.' },
    { code: 'HOME_PAGE_STORY_2_TITLE', default: 'First International Award' },
    { code: 'HOME_PAGE_STORY_2_DESCRIPTION', default: 'Recognition for "Best Design" at the Paris International Jewelry Fair.' },
    { code: 'HOME_PAGE_STORY_3_TITLE', default: 'Embracing the Future' },
    { code: 'HOME_PAGE_STORY_3_DESCRIPTION', default: 'Launch of our e-commerce platform, bringing Gold House to the world.' },
    { code: 'HOME_PAGE_FOOTER_TEXT', default: 'Crafting timeless elegance since 1988.' },
    { code: 'HOME_PAGE_FOOTER_LINK_1', default: 'Quick Links' },
    { code: 'HOME_PAGE_FOOTER_LINK_2', default: 'Follow Us' },
    { code: 'ABOUT_US', default: 'About Us' },
    { code: 'CONTACT_US', default: 'Contact' },
    { code: 'OUR_PRODUCTS', default: 'Collections' },
]

export const seoData = {
    EN: {
        title: 'Gold House — Timeless Gold Jewelry & Premium Accessories',
        description: 'Gold House crafts premium gold jewelry and luxury accessories — wedding rings, chains, bracelets. Handcrafted quality, certified materials and lifetime care.',
        keywords: 'gold jewelry, luxury gold accessories, handcrafted gold rings, gold wedding bands, 18k gold chains, premium gold bracelets, bespoke gold jewelry, gift gold jewelry, bridal gold rings, delicate gold necklaces, solid gold chain for men, gold bracelet for women, custom wedding rings, heirloom gold pieces, certified gold jewelry, artisan goldsmith, luxury gift jewelry, gold pendant designs, everyday gold jewelry, gold jewelry care, classic gold chains, modern gold bracelets, minimalist gold rings, gold craftsmanship, high-end gold accessories',
    },
    RU: {
        title: 'Gold House — Вечная золотая ювелирия и премиум аксессуары',
        description: 'Gold House создает премиальную золотую ювелирку: обручальные кольца, цепи, браслеты. Ручная работа, сертифицированные материалы и пожизненный уход.',
        keywords: 'золотые украшения, ювелирные изделия из золота, обручальные кольца из золота, золотые цепочки 18k, премиум браслеты, подарочные ювелирные изделия, ручная работа ювелир, золотые подвески, сертификат на золото, кастомные кольца, ювелирный подарок на годовщину, золотые серьги, уход за золотом, золото 18к vs 14к, украшения на каждый день, мужские золотые цепи, женские золотые браслеты, минималистичные золотые кольца, дизайнерские золотые украшения, качественная ювелирная работа, антикварные золотые мотивы, матчинг кольца и цепи, персонализация украшений, надёжные застёжки, ювелирная мастерская',
    },
    UZ: {
        title: 'Gold House — Oltin zargarlik va premium aksessuarlar',
        description: 'Gold House — nikoh uzuklari, zanjirlar, bilaguzuklar va premium oltin aksessuarlar. Hunarmandchilik, sertifikat va umrboqiy xizmat.',
        keywords: "oltin zargarlik, premium oltin uzuklar, nikoh uzuklari, 18k oltin zanjir, bilaguzuklar, sovg‘a uchun oltin, qo‘lda ishlangan zargarlik, sertifikatli oltin, erkaklar uchun zanjir, ayollar uchun bilaguzuk, minimalist oltin uzuk, zargarlik parvarishi, qimmatbaho zargarlik, oilaviy meros, maxsus buyurtma uzuklar, haqiqiy oltin, bezakli bilaguzuk, zamonaviy oltin dizaynlari, juft uzuklar, zanjir qatlamlash, g‘ilofli sovg‘a qadoqlash, gravirovka xizmati, tiklash va parvarish, ishonchli zargarlik do'koni",
    },
}

export default function Home() {
    const { products } = useProducts()
    const { certificates } = useCertificates()
    const { language } = useContext(LanguageContext)
    const textMap = useTranslations(HOME_TEXT_CONFIG)

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light">
            <Helmet>
                <title>{seoData[language].title}</title>
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

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <Navbar />
                <main className="flex-grow">
                    <section className="relative h-screen w-full">
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                        <img className='absolute inset-0 w-full h-full ' src={Img1} alt="Home Page Main Img" />
                        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4">{textMap['HOME_PAGE_MAIN_TITLE']}</h1>
                            <p className="font-sans text-xl md:text-2xl max-w-2xl mb-8">{textMap['HOME_PAGE_MAIN_DESCRIPTION']}</p>
                            <Link className="px-8 py-3 bg-accent text-white font-bold text-lg rounded-full hover:bg-opacity-80 transition-all duration-300" to="/collection">
                                {textMap['HOME_PAGE_MAIN_BTN']}
                            </Link>
                        </div>
                    </section>
                    <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark" id="about">
                        <div className="container mx-auto px-4 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-center lg:text-left">
                                <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-text-dark dark:text-text-light">{textMap['HOME_PAGE_ABOUT_TITLE']}</h2>
                                <p className="font-sans text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8">{textMap['HOME_PAGE_ABOUT_DESCRIPTION']}</p>
                                <Link className="inline-block px-8 py-3 border border-accent text-accent font-bold text-lg rounded-full hover:bg-accent hover:text-white transition-all duration-300" to="/about">
                                    {textMap['HOME_PAGE_ABOUT_BTN']}
                                </Link>
                            </div>
                            <div>
                                <img alt="Goldsmith at work" className="rounded-xl shadow-2xl w-full mx-auto max-w-[512px] h-auto" src={Img2} />
                            </div>
                        </div>
                    </section>
                    <section className="py-20 bg-white dark:bg-gray-900" id="products">
                        <div className="container mx-auto px-4 lg:px-20">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{textMap['HOME_PAGE_PRODUCT_TITLE']}</h2>
                                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">{textMap['HOME_PAGE_PRODUCT_DESCRIPTION']}</p>
                            </div>

                            <div className="relative">
                                <div className="overflow-hidden">
                                    <div className="flex overflow-x-auto scroll-none scrollbar-hide gap-6 pb-6" style={{ scrollBehavior: 'smooth' }}>
                                        {products &&
                                            products.map((p) => (
                                                <div key={p.id} className="flex-shrink-0 w-80">
                                                    <Link to={`/collection/${p.id}`}>
                                                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
                                                            <div className="overflow-hidden">
                                                                <img alt={p.title} className="w-full h-64 object-cover" src={p.image_path} />
                                                            </div>
                                                            <div className="p-6">
                                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{p.title}</h3>
                                                                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">{p.description}</p>
                                                                <div className="flex justify-between items-center">
                                                                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{p.proba}*</span>
                                                                    <span className="text-sm text-gray-500 dark:text-gray-400">{p.gramm}g</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                    </div>
                                </div>

                                <button
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600 p-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                    onClick={() => {
                                        const container = document.querySelector('.overflow-x-auto')
                                        container.scrollBy({ left: -960, behavior: 'smooth' })
                                    }}
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                </button>
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600 p-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                    onClick={() => {
                                        const container = document.querySelector('.overflow-x-auto')
                                        container.scrollBy({ left: 960, behavior: 'smooth' })
                                    }}
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="py-10" id="certificates">
                        <div className="mx-auto px-4 lg:px-20 text-center">
                            <h2 className="font-display text-4xl lg:text-5xl mb-16 font-bold text-dark">{textMap['OUR_CERTIFICATE']}</h2>
                            <div className="grid md:grid-cols-2  justify-center items-center gap-6 lg:gap-10">
                                {certificates &&
                                    certificates?.slice(0, 2).map((c) => (
                                        <div key={c.id} className="flex flex-col items-center">
                                            <iframe src={`${c.file_path}#toolbar=0`} className="h-72 opacity-80 hover:opacity-100 transition-opacity border-none" title={c.title} loading="lazy"></iframe>
                                            <p className="font-sans text-lg mt-2 text-gray-600 dark:text-gray-400">{c.title}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </section>
                    <section className="pt-10 pb-20 bg-gray-50 dark:bg-gray-900" id="story">
                        <div className="container mx-auto px-4 lg:px-20">
                            <div className="text-center mb-16">
                                <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-dark dark:text-text-light">{textMap['OUR_STORY']}</h2>
                            </div>
                            <div className="relative">
                                <div className="absolute left-1/2 h-full w-0.5 bg-accent/30 hidden md:block"></div>
                                <div className="relative flex flex-col gap-12">
                                    <div className="md:flex items-center md:gap-8 w-full">
                                        <div className="md:w-1/2 md:text-right md:pr-8">
                                            <p className="font-display text-3xl font-bold text-accent">1975–1995</p>
                                            <h3 className="font-display text-2xl font-semibold my-2 text-text-dark dark:text-text-light">{textMap['HOME_PAGE_STORY_1_TITLE']}</h3>
                                            <p className="font-sans text-lg text-gray-700 dark:text-gray-300">{textMap['HOME_PAGE_STORY_1_DESCRIPTION']}</p>
                                        </div>
                                        <div className="hidden md:block w-8 h-8 rounded-full bg-accent ring-8 ring-gray-50 dark:ring-gray-900 z-10"></div>
                                        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
                                    </div>
                                    <div className="md:flex flex-row-reverse items-center md:gap-8 w-full">
                                        <div className="md:w-1/2 md:text-left md:pl-8">
                                            <p className="font-display text-3xl font-bold text-accent">2005–2015</p>
                                            <h3 className="font-display text-2xl font-semibold my-2 text-text-dark dark:text-text-light">{textMap['HOME_PAGE_STORY_2_TITLE']}</h3>
                                            <p className="font-sans text-lg text-gray-700 dark:text-gray-300">{textMap['HOME_PAGE_STORY_2_DESCRIPTION']}</p>
                                        </div>
                                        <div className="hidden md:block w-8 h-8 rounded-full bg-accent ring-8 ring-gray-50 dark:ring-gray-900 z-10"></div>
                                        <div className="md:w-1/2 md:pr-8 mt-4 md:mt-0"></div>
                                    </div>
                                    <div className="md:flex items-center md:gap-8 w-full">
                                        <div className="md:w-1/2 md:text-right md:pr-8">
                                            <p className="font-display text-3xl font-bold text-accent">2025</p>
                                            <h3 className="font-display text-2xl font-semibold my-2 text-text-dark dark:text-text-light">{textMap['HOME_PAGE_STORY_3_TITLE']}</h3>
                                            <p className="font-sans text-lg text-gray-700 dark:text-gray-300">{textMap['HOME_PAGE_STORY_3_DESCRIPTION']}</p>
                                        </div>
                                        <div className="hidden md:block w-8 h-8 rounded-full bg-accent ring-8 ring-gray-50 dark:ring-gray-900 z-10"></div>
                                        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="bg-gradient-to-r from-[#2c2016] to-[#1d1915] text-white">
                    <div className="container mx-auto px-4 lg:px-20 py-12">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center gap-8">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Gold House</h3>
                                <p className="font-sans text-gray-400">{textMap['HOME_PAGE_FOOTER_TEXT']}</p>
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-semibold mb-4">{textMap['HOME_PAGE_FOOTER_LINK_1']}</h3>
                                <ul className="font-sans space-y-2 text-gray-400">
                                    <li>
                                        <Link className="hover:text-white" to="/about">
                                            {textMap['ABOUT_US']}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-white" to="/collection">
                                            {textMap['OUR_PRODUCTS']}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-white" to="/contact">
                                            {textMap['CONTACT_US']}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-semibold mb-4">{textMap['HOME_PAGE_FOOTER_LINK_2']}</h3>
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
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500 font-sans">
                            <p>© 2025 MYB Team. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
