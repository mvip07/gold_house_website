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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full">
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
