import Navbar from "../components/Navbar";

export default function Certification() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <Navbar />
                            <div className="flex flex-wrap justify-between gap-3 p-4 pt-16 items-center">
                                <div className="flex min-w-72 flex-col gap-3">
                                    <p className="text-black dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Certifications &amp; Patents</p>
                                    <p className="text-stone-500 dark:text-stone-400 text-base font-normal leading-normal">Our commitment to quality, innovation, and transparency is demonstrated by these official documents.</p>
                                </div>
                               
                            </div>
                            <div className="px-4 py-3">
                                <label className="flex flex-col min-w-40 h-12 w-full">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                        <div className="text-stone-500 dark:text-stone-400 flex border-none bg-stone-100 dark:bg-stone-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                                            <span className="material-symbols-outlined">search</span>
                                        </div>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-black dark:text-white focus:outline-0 focus:ring-0 border-none bg-stone-100 dark:bg-stone-800 focus:border-none h-full placeholder:text-stone-500 dark:placeholder-stone-400 px-4 pl-2 text-base font-normal leading-normal" placeholder="Search for certifications or patents" value="" />
                                    </div>
                                </label>
                            </div>
                            <div className="flex gap-3 p-3 overflow-x-auto">
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-stone-100 dark:bg-stone-800 pl-4 pr-2">
                                    <p className="text-black dark:text-white text-sm font-medium leading-normal">All</p>
                                    <span className="material-symbols-outlined text-black dark:text-white">expand_more</span>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-stone-100 dark:bg-stone-800 pl-4 pr-2">
                                    <p className="text-black dark:text-white text-sm font-medium leading-normal">Quality Certifications</p>
                                    <span className="material-symbols-outlined text-black dark:text-white">expand_more</span>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-stone-100 dark:bg-stone-800 pl-4 pr-2">
                                    <p className="text-black dark:text-white text-sm font-medium leading-normal">Design Patents</p>
                                    <span className="material-symbols-outlined text-black dark:text-white">expand_more</span>
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                                <div className="flex flex-col gap-4 bg-background-light dark:bg-background-dark p-4 rounded-lg border border-stone-200 dark:border-stone-700">
                                    <div className="flex items-center gap-4">
                                        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                                            <span className="material-symbols-outlined">verified_user</span>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-black dark:text-white text-base font-medium leading-normal line-clamp-1">ISO 9001:2015 Quality Management System</p>
                                            <p className="text-stone-500 dark:text-stone-400 text-sm font-normal leading-normal line-clamp-2">PDF</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-end">
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-stone-100 dark:bg-stone-800 text-black dark:text-white text-sm font-medium leading-normal w-fit">
                                            <span className="truncate">View</span>
                                        </button>
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal w-fit">
                                            <span className="truncate">Download</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 bg-background-light dark:bg-background-dark p-4 rounded-lg border border-stone-200 dark:border-stone-700">
                                    <div className="flex items-center gap-4">
                                        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                                            <span className="material-symbols-outlined">workspace_premium</span>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-black dark:text-white text-base font-medium leading-normal line-clamp-1">Responsible Jewellery Council (RJC) Certification</p>
                                            <p className="text-stone-500 dark:text-stone-400 text-sm font-normal leading-normal line-clamp-2">PDF</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-end">
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-stone-100 dark:bg-stone-800 text-black dark:text-white text-sm font-medium leading-normal w-fit">
                                            <span className="truncate">View</span>
                                        </button>
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal w-fit">
                                            <span className="truncate">Download</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 bg-background-light dark:bg-background-dark p-4 rounded-lg border border-stone-200 dark:border-stone-700">
                                    <div className="flex items-center gap-4">
                                        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                                            <span className="material-symbols-outlined">lightbulb</span>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-black dark:text-white text-base font-medium leading-normal line-clamp-1">Patent for Unique Clasp Design</p>
                                            <p className="text-stone-500 dark:text-stone-400 text-sm font-normal leading-normal line-clamp-2">PDF</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-end">
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-stone-100 dark:bg-stone-800 text-black dark:text-white text-sm font-medium leading-normal w-fit">
                                            <span className="truncate">View</span>
                                        </button>
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal w-fit">
                                            <span className="truncate">Download</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 bg-background-light dark:bg-background-dark p-4 rounded-lg border border-stone-200 dark:border-stone-700">
                                    <div className="flex items-center gap-4">
                                        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                                            <span className="material-symbols-outlined">copyright</span>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-black dark:text-white text-base font-medium leading-normal line-clamp-1">Trademark for Brand Logo</p>
                                            <p className="text-stone-500 dark:text-stone-400 text-sm font-normal leading-normal line-clamp-2">PDF</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-end">
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-stone-100 dark:bg-stone-800 text-black dark:text-white text-sm font-medium leading-normal w-fit">
                                            <span className="truncate">View</span>
                                        </button>
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal w-fit">
                                            <span className="truncate">Download</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
