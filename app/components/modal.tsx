"use client"
import {useState} from "react"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({isOpen, onClose, children}:ModalProps) {

    if (!isOpen) return null;

   return (
        <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 backdrop-blur-md"
            onClick={onClose} // Close when clicking background
        >
            <div 
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}>
                <button 
                    className="cursor-pointer absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
                    onClick={onClose}
                >
                    ✕ Close
                </button>
                {children}
            </div>
        </div>
    );
}