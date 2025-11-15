import Navbar from '../components/Navbar'
import { useCertificates } from '../hook/useCertificates'

export default function Certification() {
    const { certificates } = useCertificates()
    return (
        <div className="bg-background-light dark:bg-background-dark">
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <Navbar />
                            <div className="flex flex-wrap justify-between gap-3 p-4 mt-16 items-center">
                                <div className="flex flex-col gap-3">
                                    <p className="font-display text-[#181411] dark:text-white text-4xl lg:text-5xl font-black  tracking-[-0.033em]">Certifications</p>
                                    <p className="font-sans text-[#857360] dark:text-[#a19385] text-base font-normal leading-normal">Our commitment to quality, innovation, and transparency is demonstrated by these official documents.</p>
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
                                                    <span className="truncate">View</span>
                                                </a>
                                                <a href={`#${c.file_path}`} download={c.title} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal w-fit">
                                                    <span className="truncate">Download</span>
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
