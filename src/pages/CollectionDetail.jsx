import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../hook/useProducts'
import { useTranslations } from '../hook/useTranslations'
import { LanguageContext } from '../context/LanguageContext'

const TEXT_CONFIG = [
    { code: 'HOME', default: 'Home' },
    { code: 'OUR_PRODUCTS', default: 'Collections' },
]

const seoData = {
    UZ: {
        title: 'Gold House - Tilla Zargarlik va Mukammallik',
        description: 'Gold House: nozik tilla zargarlik buyumlari, uzluksiz dizayn va premium sifat. Telegram va Instagram orqali bog‘laning.',
        keywords: 'tilla zargarlik, uzuk, bilakuzuk, zanjir, sovg‘a zargarlik, to‘y uzuklari, premium zargarlik, elegant zargarlik, Gold House, Telegram, Instagram, luks aksessuarlar, nafis zargarlik',
    },
    RU: {
        title: 'Gold House - Золотые Украшения и Роскошь',
        description: 'Gold House: изысканные золотые украшения, вечный дизайн и премиальное качество. Свяжитесь через Telegram и Instagram.',
        keywords: 'золотые украшения, кольца, браслеты, цепочки, подарочные украшения, свадебные кольца, премиальные украшения, элегантные украшения, Gold House, Telegram, Instagram, ручная работа',
    },
    EN: {
        title: 'Gold House - Luxury Gold Jewelry & Craftsmanship',
        description: 'Gold House: exquisite gold jewelry, timeless designs, and premium quality. Connect via Telegram and Instagram.',
        keywords: 'gold jewelry, rings, bracelets, chains, gift jewelry, wedding rings, premium craftsmanship, luxury accessories, Gold House, Telegram, Instagram, handmade jewelry, elegant jewelry',
    },
}

export default function CollectionDetail() {
    const { id } = useParams()
    const { language } = useContext(LanguageContext)
    const textMap = useTranslations(TEXT_CONFIG)
    const { products } = useProducts()

    const product = products.find((p) => p.id === Number(id))

    if (!product) {
        return <p className="text-center mt-10">Product not found.</p>
    }

    const title = `${product.title} | ${seoData[language]?.siteName}`
    const description = `${product.description} - Gold House tilla zargarlik buyumlari, premium sifat va nafis dizayn.`
    const keywords = `${product.title}, ${product.type}, Gold House, tilla uzuk, bilakuzuk, zanjir, premium zargarlik`

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-[#1A1A1A] dark:text-white">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={seoData[language]?.title || title} />
                <meta property="og:description" content={seoData[language]?.description || description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/logo.jpg" />
                <meta property="og:site_name" content="Gold House" />
                <meta property="og:locale" content={language} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:see_also" content="https://t.me/GoldHouse0711" />
                <meta property="og:see_also" content="https://www.instagram.com/goldhouseeee" />
            </Helmet>
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link to="/" className="hover:text-primary transition-colors">
                        {textMap['HOME']}
                    </Link>
                    <span>/</span>
                    <Link to="/collection" className="hover:text-primary transition-colors">
                        {textMap['OUR_PRODUCTS']}
                    </Link>
                    <span>/</span>
                    <span className="text-primary font-medium">{product.title}</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                            <img src={product.image_path} alt={product.title} className="w-full h-80 object-contain rounded-lg" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="space-y-6">
                            <div>
                                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mb-3">{product.type}</span>
                                <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight">{product.title}</h1>
                            </div>

                            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{product.description}</p>

                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                                    <span className="text-lg font-medium text-gray-600 dark:text-gray-400">Proba</span>
                                    <span className="text-4xl font-bold text-primary">{product.proba}</span>
                                </div>

                                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                                    <span className="text-lg font-medium text-gray-600 dark:text-gray-400">Weight</span>
                                    <span className="text-xl font-semibold text-gray-900 dark:text-white">{product.gramm}g</span>
                                </div>

                                <div className="flex justify-between items-center py-3">
                                    <span className="text-lg font-medium text-gray-600 dark:text-gray-400">Category</span>
                                    <span className="text-xl font-semibold text-gray-900 dark:text-white">{product.type}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
