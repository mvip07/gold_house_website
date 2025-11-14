'use client'
import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(null)
    const openModal = (config) => setModal(config)
    const closeModal = () => setModal(null)
    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {modal && <Modal {...modal} closeModal={closeModal} />}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)

const Modal = ({ type, formId, title, btnTitle, content, closeModal }) => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white h-[450px] overflow-y-auto scroll-none rounded-2xl w-full max-w-2xl shadow-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                {content}
                <div className="flex justify-end gap-4 mt-6">
                    <button onClick={closeModal} className="px-4 py-2 bg-gray-200 rounded-lg">
                        Cancel
                    </button>
                    <button type="submit" form={formId} className="px-4 py-2 bg-green-600 text-white rounded-lg">
                        {btnTitle}
                    </button>
                </div>
            </div>
        </div>
    )
}
