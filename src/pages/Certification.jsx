import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import { useCertificates } from '../hook/useCertificates'
import { useTranslations } from '../hook/useTranslations'
import { LanguageContext } from '../context/LanguageContext'

const TEXT_CONFIG = [
    { code: 'CERTIFICATIONS_TITLE', default: 'Certifications' },
    { code: 'CERTIFICATIONS_DESCRIPTION', default: 'Our commitment to quality, innovation, and transparency is demonstrated by these official documents.' },
    { code: 'CERTIFICATIONS_VIEW', default: 'View' },
    { code: 'CERTIFICATIONS_DOWNLOAD', default: 'Download' },
]

const seoData = {
    UZ: {
        title: 'Gold House - Sertifikatlar va Sifat Kafolati',
        description: 'Gold House sertifikatlari: sifat, innovatsiya va shaffoflikni tasdiqlovchi rasmiy hujjatlar. Bizning zargarlik buyumlarimiz sifatini kafolatlaydi.',
        keywords: 'Gold House, sertifikatlar, zargarlik sifat kafolati, PDF hujjatlar, tilla zargarlik, uzuklar, bilakuzuklar, zanjirlar, premium zargarlik, elegant zargarlik',
    },
    RU: {
        title: 'Gold House - Сертификаты и Гарантия Качества',
        description: 'Сертификаты Gold House: официальные документы, подтверждающие качество, инновации и прозрачность. Гарантия подлинности наших ювелирных изделий.',
        keywords: 'Gold House, сертификаты, гарантия качества, ювелирные изделия, PDF документы, золотые украшения, кольца, браслеты, цепочки, премиальные украшения, элегантные украшения',
    },
    EN: {
        title: 'Gold House - Certifications & Quality Assurance',
        description: 'Gold House Certifications: official documents demonstrating our commitment to quality, innovation, and transparency. Ensuring authenticity of our jewelry.',
        keywords: 'Gold House, certifications, quality assurance, jewelry authenticity, PDF documents, gold jewelry, rings, bracelets, chains, premium jewelry, elegant jewelry',
    },
}

export default function Certification() {
    const { certificates } = useCertificates()
    const textMap = useTranslations(TEXT_CONFIG)
    const { language } = useContext(LanguageContext)
    return (
        <div className="bg-background-light dark:bg-background-dark">
            <Helmet>
                <title>{seoData[language].title}</title>
                <meta name="description" content={seoData[language].description} />
                <meta name="keywords" content={seoData[language].keywords} />

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
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <Navbar />
                            <div className="flex flex-wrap justify-between gap-3 p-4 mt-16 items-center">
                                <div className="flex flex-col gap-3">
                                    <h1 className="font-display text-[#181411] dark:text-white text-4xl lg:text-5xl font-black  tracking-[-0.033em]">{textMap['CERTIFICATIONS_TITLE']}</h1>
                                    <p className="font-sans text-[#857360] dark:text-[#a19385] text-base font-normal leading-normal">{textMap['CERTIFICATIONS_DESCRIPTION']}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                                {certificates &&
                                    certificates.map((c) => (
                                        <div key={c.id} className="flex flex-col gap-4 bg-background-light dark:bg-background-dark p-4 rounded-lg border border-stone-200 dark:border-stone-700">
                                            <div className="flex items-center gap-4">
                                                <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                                                    <span className="material-symbols-outlined">verified_user</span>
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <p className="text-black dark:text-white text-base font-medium leading-normal line-clamp-1">{c.title}</p>
                                                    <p className="text-stone-500 dark:text-stone-400 text-sm font-normal leading-normal line-clamp-2">PDF</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 justify-end">
                                                <a href={c.file_path} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-stone-100 dark:bg-stone-800 text-black dark:text-white text-sm font-medium leading-normal w-fit">
                                                    <span className="truncate">{textMap['CERTIFICATIONS_VIEW']}</span>
                                                </a>
                                                <a href={`#${c.file_path}`} download={c.title} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal w-fit">
                                                    <span className="truncate">{textMap['CERTIFICATIONS_DOWNLOAD']}</span>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
