import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../hook/useProducts'
import { useTranslations } from '../hook/useTranslations'

const TEXT_CONFIG = [
    { code: 'HOME', default: 'Home' },
    { code: 'OUR_PRODUCTS', default: 'Collections' },
]

export default function CollectionDetail() {
    const { id } = useParams()
    const textMap = useTranslations(TEXT_CONFIG)
    const { products } = useProducts()

    const product = products.find((p) => p.id === Number(id))

    if (!product) {
        return <p className="text-center mt-10">Product not found.</p>
    }

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-[#1A1A1A] dark:text-white">
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
                    {/* Product Image */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                            <img src={product.image_path} alt={product.title} className="w-full h-80 object-contain rounded-lg" />
                        </div>
                    </div>

                    {/* Product Info */}
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
