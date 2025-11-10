export default function Contact() {
    return (
        <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden" style={{fontFamily: '"Newsreader, "Noto Sans", sans-serif;'}}>
            <div class="layout-container flex h-full grow flex-col">
                <div class="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0edea] dark:border-b-[#2a2622] px-4 sm:px-10 py-3">
                            <div class="flex items-center gap-4 text-[#181411] dark:text-white">
                                <div class="size-6">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <h2 class="font-display text-[#181411] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Gold House</h2>
                            </div>
                            <div class="hidden md:flex flex-1 justify-end items-center gap-8">
                                <div class="flex items-center gap-9">
                                    <a class="font-sans text-[#181411] dark:text-white text-sm font-medium leading-normal" href="/">
                                        Home
                                    </a>
                                    <a class="font-sans text-[#181411] dark:text-white text-sm font-medium leading-normal" href="about">
                                        About Us
                                    </a>
                                    <a class="font-sans text-[#181411] dark:text-white text-sm font-medium leading-normal" href="/collection">
                                        Collections
                                    </a>
                                    <a class="font-sans text-primary text-sm font-medium leading-normal" href="/contact">
                                        Contact
                                    </a>
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center gap-2 border-l border-solid border-l-[#f0edea] dark:border-l-[#2a2622] pl-4">
                                        <a class="font-sans text-[#181411] dark:text-white text-sm font-medium leading-normal" href="#">
                                            EN
                                        </a>
                                        <span class="text-[#857360] dark:text-[#a19385]">/</span>
                                        <a class="font-sans text-[#857360] dark:text-[#a19385] text-sm font-normal leading-normal" href="#">
                                            UZ
                                        </a>
                                        <span class="text-[#857360] dark:text-[#a19385]">/</span>
                                        <a class="font-sans text-[#857360] dark:text-[#a19385] text-sm font-normal leading-normal" href="#">
                                            RU
                                        </a>
                                    </div>
                                    <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] font-sans">
                                        <span class="truncate">Login</span>
                                    </button>
                                </div>
                            </div>
                            <div class="md:hidden">
                                <button class="text-[#181411] dark:text-white">
                                    <span class="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                        </header>
                        <main class="flex-1 py-10 md:py-16">
                            <div class="flex flex-wrap justify-between gap-10 p-4">
                                <div class="flex flex-col gap-8 flex-1 min-w-[300px]">
                                    <div class="flex flex-col gap-3">
                                        <p class="font-display text-[#181411] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">Contact Us</p>
                                        <p class="font-sans text-[#857360] dark:text-[#a19385] text-base font-normal leading-normal">We'd love to hear from you. Please fill out the form below or use the contact information provided to get in touch with us.</p>
                                    </div>
                                    <div class="space-y-4">
                                        <div class="grid grid-cols-[auto_1fr] gap-x-6 border-t border-t-[#e1dbd6] dark:border-t-[#2a2622] py-5">
                                            <p class="font-sans text-[#857360] dark:text-[#a19385] text-sm font-normal leading-normal">Address</p>
                                            <p class="font-sans text-[#181411] dark:text-white text-sm font-normal leading-normal">123 Luxury Lane, Gold City, 12345</p>
                                        </div>
                                        <div class="grid grid-cols-[auto_1fr] gap-x-6 border-t border-t-[#e1dbd6] dark:border-t-[#2a2622] py-5">
                                            <p class="font-sans text-[#857360] dark:text-[#a19385] text-sm font-normal leading-normal">Phone</p>
                                            <p class="font-sans text-[#181411] dark:text-white text-sm font-normal leading-normal">+1 (234) 567-890</p>
                                        </div>
                                        <div class="grid grid-cols-[auto_1fr] gap-x-6 border-t border-t-[#e1dbd6] dark:border-t-[#2a2622] py-5">
                                            <p class="font-sans text-[#857360] dark:text-[#a19385] text-sm font-normal leading-normal">Email</p>
                                            <p class="font-sans text-[#181411] dark:text-white text-sm font-normal leading-normal">contact@goldhouse.com</p>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap gap-4">
                                        <div class="flex flex-col items-center gap-2 text-center w-20">
                                            <div class="rounded-full bg-[#f0edea] dark:bg-[#2a2622] p-3">
                                                <span class="material-symbols-outlined text-[#181411] dark:text-white">social_leaderboard</span>
                                            </div>
                                            <p class="font-sans text-[#181411] dark:text-white text-sm font-medium leading-normal">Facebook</p>
                                        </div>
                                        <div class="flex flex-col items-center gap-2 text-center w-20">
                                            <div class="rounded-full bg-[#f0edea] dark:bg-[#2a2622] p-3">
                                                <span class="material-symbols-outlined text-[#181411] dark:text-white">photo_camera</span>
                                            </div>
                                            <p class="font-sans text-[#181411] dark:text-white text-sm font-medium leading-normal">Instagram</p>
                                        </div>
                                        <div class="flex flex-col items-center gap-2 text-center w-20">
                                            <div class="rounded-full bg-[#f0edea] dark:bg-[#2a2622] p-3">
                                                <span class="material-symbols-outlined text-[#181411] dark:text-white">alternate_email</span>
                                            </div>
                                            <p class="font-sans text-[#181411] dark:text-white text-sm font-medium leading-normal">Twitter</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-6 flex-1 min-w-[300px]">
                                    <form class="space-y-6">
                                        <div class="flex flex-col">
                                            <label class="font-sans text-[#181411] dark:text-white text-base font-medium leading-normal pb-2" for="name">
                                                Name
                                            </label>
                                            <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] dark:text-white focus:outline-0 focus:ring-0 border border-[#e1dbd6] dark:border-[#2a2622] bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-[#857360] dark:placeholder:text-[#a19385] p-[15px] text-base font-normal leading-normal font-sans" id="name" placeholder="Enter your name" type="text" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label class="font-sans text-[#181411] dark:text-white text-base font-medium leading-normal pb-2" for="email">
                                                Email
                                            </label>
                                            <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] dark:text-white focus:outline-0 focus:ring-0 border border-[#e1dbd6] dark:border-[#2a2622] bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-[#857360] dark:placeholder:text-[#a19385] p-[15px] text-base font-normal leading-normal font-sans" id="email" placeholder="Enter your email" type="email" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label class="font-sans text-[#181411] dark:text-white text-base font-medium leading-normal pb-2" for="subject">
                                                Subject
                                            </label>
                                            <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] dark:text-white focus:outline-0 focus:ring-0 border border-[#e1dbd6] dark:border-[#2a2622] bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-[#857360] dark:placeholder:text-[#a19385] p-[15px] text-base font-normal leading-normal font-sans" id="subject" placeholder="Enter the subject" type="text" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label class="font-sans text-[#181411] dark:text-white text-base font-medium leading-normal pb-2" for="message">
                                                Message
                                            </label>
                                            <textarea class="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#181411] dark:text-white focus:outline-0 focus:ring-0 border border-[#e1dbd6] dark:border-[#2a2622] bg-background-light dark:bg-background-dark focus:border-primary h-32 placeholder:text-[#857360] dark:placeholder:text-[#a19385] p-[15px] text-base font-normal leading-normal font-sans" id="message" placeholder="Enter your message"></textarea>
                                        </div>
                                        <button class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] font-sans">
                                            <span class="truncate">Submit</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </main>
                        <footer class="border-t border-solid border-t-[#f0edea] dark:border-t-[#2a2622] px-4 sm:px-10 py-6 text-center">
                            <p class="font-sans text-[#857360] dark:text-[#a19385] text-sm">© 2023 Gold House. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}
