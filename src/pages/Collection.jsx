import { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Instagram, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import { useProducts } from '../hook/useProducts'
import { useTranslations } from '../hook/useTranslations'
import { LanguageContext } from '../context/LanguageContext'

const TEXT_CONFIG = [
    { code: 'PRODUCT_SELECT_TYPE', default: 'Select Type' },
    { code: 'PRODUCT_SELECT_TYPE', default: 'Выберите тип' },
    { code: 'PRODUCT_SELECT_TYPE', default: 'Turini tanlang' },
    { code: 'HOME_PAGE_FOOTER_TEXT', default: 'Crafting timeless elegance since 1988.' },
    { code: 'HOME_PAGE_FOOTER_LINK_1', default: 'Quick Links' },
    { code: 'HOME_PAGE_FOOTER_LINK_2', default: 'Follow Us' },
    { code: 'ABOUT_US', default: 'About Us' },
    { code: 'CONTACT_US', default: 'Contact' },
    { code: 'OUR_PRODUCTS', default: 'Our Exquisite Collection' },
]

const seoData = {
    UZ: {
        title: 'Gold House - Bizning Tilla Zargarlik Koleksiyamiz',
        description: 'Gold House: nozik tilla uzuklar, bilakuzuklar va zanjirlar. Har bir mahsulotimiz premium sifat va nafis dizayn bilan yaratilgan.',
        keywords: 'Gold House, tilla zargarlik, uzuk, bilakuzuk, zanjir, premium zargarlik, elegant zargarlik, fashion jewelry, handmade jewelry, gift jewelry, exclusive jewelry',
    },
    RU: {
        title: 'Gold House - Наша Коллекция Золотых Украшений',
        description: 'Gold House: изысканные золотые кольца, браслеты и цепочки. Каждый продукт изготовлен с премиальным качеством и элегантным дизайном.',
        keywords: 'Gold House, золотые украшения, кольца, браслеты, цепочки, премиальные украшения, элегантные украшения, ювелирное искусство, ручная работа, подарочные украшения',
    },
    EN: {
        title: 'Gold House - Our Exquisite Gold Jewelry Collection',
        description: 'Gold House: delicate gold rings, bracelets, and chains. Each product crafted with premium quality and elegant design.',
        keywords: 'Gold House, gold jewelry, rings, bracelets, chains, premium craftsmanship, elegant jewelry, fashion jewelry, handmade jewelry, gift jewelry, exclusive jewelry',
    },
}

export default function Collection() {
    const { products } = useProducts()
    const { language } = useContext(LanguageContext)
    const textMap = useTranslations(TEXT_CONFIG)

    const [page, setPage] = useState(1)
    const [selectTypes, setSelectedTypes] = useState('')

    const typesCategory = [...new Set(products.map((p) => p.type))]

    const filteredProducts = products.filter((f) => !selectTypes || f.type === selectTypes)
    const totalPages = Math.ceil(filteredProducts.length / 6)
    const paginatedProducts = filteredProducts.slice((page - 1) * 6, page * 6)
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const productTitles = products.map((p) => p.title).join(', ')
    const productDescriptions = products.map((p) => p.description).join('. ')

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#1A1A1A] dark:text-white">
            <Helmet>
                <title>{seoData[language]?.title}</title>
                <meta name="description" content={`${seoData[language]?.description} | Products: ${productTitles}`} />
                <meta name="keywords" content={`${seoData[language]?.keywords}, ${productTitles}`} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={seoData[language]?.title} />
                <meta property="og:description" content={`${seoData[language]?.description} | Products: ${productDescriptions}`} />
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
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <Navbar />
                            <main className="flex-1">
                                <div className="flex flex-wrap justify-between gap-3 p-4 mt-12 mb-4">
                                    <p className="text-[#1A1A1A] dark:text-white text-5xl font-bold leading-tight tracking-[-0.033em] min-w-72">{textMap['OUR_PRODUCTS']}</p>
                                </div>
                                <div className="flex gap-3 p-3 overflow-x-auto">
                                    <select
                                        onChange={(e) => {
                                            setSelectedTypes(e.target.value)
                                            setPage(1)
                                        }}
                                        id="collection"
                                        className="rounded-lg bg-background-light dark:bg-background-dark border dark:border-gray-700 py-3 px-6"
                                    >
                                        <option value="">{textMap['PRODUCT_SELECT_TYPE']}</option>
                                        {typesCategory.map((t) => (
                                            <option key={t} value={t}>
                                                {t}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                                    {paginatedProducts.map((item) => (
                                        <Link to={`/collection/${item.id}`} key={item.id} className="group block">
                                            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md transform group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url(${item.image_path})` }}></div>

                                            <p className="text-primary text-xl font-bold mt-2">{item.title}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-2 mt-10">
                                    {pages.map((num) => (
                                        <button key={num} onClick={() => setPage(num)} className={`px-4 py-2 rounded-full ${num === page ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}>
                                            {num}
                                        </button>
                                    ))}
                                </div>
                                <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8 px-4">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        <div>
                                            <h3 className="font-display text-2xl font-bold mb-4">Gold House</h3>
                                            <p className="font-sans text-gray-400">{textMap['HOME_PAGE_FOOTER_TEXT']}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-display text-xl font-semibold mb-4">{textMap['HOME_PAGE_FOOTER_LINK_1']}</h3>
                                            <ul className="font-sans space-y-2 text-gray-400">
                                                <li>
                                                    <Link className="text-gray-500 dark:text-gray-400" to="/about">
                                                        {textMap['ABOUT_US']}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="text-gray-500 dark:text-gray-400" to="/collection">
                                                        {textMap['OUR_PRODUCTS']}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="text-gray-500 dark:text-gray-400" to="/contact">
                                                        {textMap['CONTACT_US']}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-display text-xl font-semibold mb-4">{textMap['HOME_PAGE_FOOTER_LINK_2']}</h3>
                                            <div className="flex space-x-4">
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
                                    <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">© 2025 MYB Team. All Rights Reserved.</div>
                                </footer>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
