import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useContactsUser } from '../hook/useContacts'
import { Instagram, Send } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Contact() {
    const [formData, setFormData] = useState({ full_name: '', message: '', phone_number: '', subject: '' })
    const { handleCreate } = useContactsUser()
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Newsreader, "Noto Sans", sans-serif;' }}>
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <Navbar />
                        <main className="flex-1 py-10 md:py-16">
                            <div className="flex flex-wrap justify-between gap-10 p-4">
                                <div className="flex flex-col gap-8 flex-1 min-w-[300px]">
                                    <div className="flex flex-col gap-3">
                                        <p className="font-display text-[#181411] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">Contact Us</p>
                                        <p className="font-sans text-[#857360] dark:text-[#a19385] text-base font-normal leading-normal">We'd love to hear from you. Please fill out the form below or use the contact information provided to get in touch with us.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-t-[#e1dbd6] dark:border-t-[#2a2622] py-5">
                                            <p className="font-sans text-[#857360] dark:text-[#a19385] text-sm font-normal leading-normal">Address</p>
                                            <p className="font-sans text-[#181411] dark:text-white text-sm font-normal leading-normal">
                                                Chorsu Gold Center, 2 qavat, 22chi do'kon <br /> Zavod: Ko'kcha darvoza, 489D
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-t-[#e1dbd6] dark:border-t-[#2a2622] py-5">
                                            <p className="font-sans text-[#857360] dark:text-[#a19385] text-sm font-normal leading-normal">Phone</p>
                                            <p className="font-sans text-[#181411] dark:text-white text-sm font-normal leading-normal"> +998(99)144-44-88 +998(97)338-66-66</p>
                                        </div>
                                        <div className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-t-[#e1dbd6] dark:border-t-[#2a2622] py-5">
                                            <p className="font-sans text-[#857360] dark:text-[#a19385] text-sm font-normal leading-normal">Email</p>
                                            <p className="font-sans text-[#181411] dark:text-white text-sm font-normal leading-normal">contact@goldhouse.com</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <NavLink to="https://t.me/GoldHouse0711" className="flex flex-col items-center gap-2 text-center w-20">
                                            <div className="rounded-full bg-[#f0edea] dark:bg-[#2a2622] p-3 w-12 h-12 flex items-center justify-center">
                                                <Send className="text-[#181411] dark:text-white w-6 h-6" />
                                            </div>
                                            <p className="font-sans text-[#181411] dark:text-white text-sm font-medium leading-normal">Telegram</p>
                                        </NavLink>

                                        <NavLink to="https://www.instagram.com/goldhouseeee" className="flex flex-col items-center gap-2 text-center w-20">
                                            <div className="rounded-full bg-[#f0edea] dark:bg-[#2a2622] p-3 w-12 h-12 flex items-center justify-center">
                                                <Instagram className="text-[#181411] dark:text-white w-6 h-6" />
                                            </div>
                                            <p className="font-sans text-[#181411] dark:text-white text-sm font-medium leading-normal">Instagram</p>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 flex-1 min-w-[300px]">
                                    <form
                                        className="space-y-6"
                                        onSubmit={async (e) => {
                                            e.preventDefault()
                                            await handleCreate(formData)
                                            setFormData({ full_name: '', message: '', phone_number: '', subject: '' })
                                        }}
                                    >
                                        <div className="flex flex-col">
                                            <label className="font-sans text-[#181411] dark:text-white text-base font-medium leading-normal pb-2" for="name">
                                                Full Name
                                            </label>
                                            <input value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} required className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] dark:text-white focus:outline-0 focus:ring-0 border border-[#e1dbd6] dark:border-[#2a2622] bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-[#857360] dark:placeholder:text-[#a19385] p-[15px] text-base font-normal leading-normal font-sans" id="name" placeholder="Enter your name" type="text" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="font-sans text-[#181411] dark:text-white text-base font-medium leading-normal pb-2" for="email">
                                                Telephone
                                            </label>
                                            <input required value={formData.phone_number} onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] dark:text-white focus:outline-0 focus:ring-0 border border-[#e1dbd6] dark:border-[#2a2622] bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-[#857360] dark:placeholder:text-[#a19385] p-[15px] text-base font-normal leading-normal font-sans" id="tel" placeholder="Enter your phone number" type="text" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="font-sans text-[#181411] dark:text-white text-base font-medium leading-normal pb-2" for="subject">
                                                Subject
                                            </label>
                                            <input required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] dark:text-white focus:outline-0 focus:ring-0 border border-[#e1dbd6] dark:border-[#2a2622] bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-[#857360] dark:placeholder:text-[#a19385] p-[15px] text-base font-normal leading-normal font-sans" id="subject" placeholder="Enter the subject" type="text" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="font-sans text-[#181411] dark:text-white text-base font-medium leading-normal pb-2" for="message">
                                                Message
                                            </label>
                                            <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#181411] dark:text-white focus:outline-0 focus:ring-0 border border-[#e1dbd6] dark:border-[#2a2622] bg-background-light dark:bg-background-dark focus:border-primary h-32 placeholder:text-[#857360] dark:placeholder:text-[#a19385] p-[15px] text-base font-normal leading-normal font-sans" id="message" placeholder="Enter your message"></textarea>
                                        </div>
                                        <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] font-sans">
                                            <span className="truncate">Submit</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </main>
                        <footer className="border-t border-solid border-t-[#f0edea] dark:border-t-[#2a2622] px-4 sm:px-10 py-6 text-center">
                            <p className="font-sans text-[#857360] dark:text-[#a19385] text-sm">© 2025 MYB Team. All Rights Reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}
