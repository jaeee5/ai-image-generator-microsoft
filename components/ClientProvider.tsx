'use client'

import { Toaster } from "react-hot-toast";
import PromptInput from '@/components/PromptInput'


export default function RootLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <>
            <Toaster position="bottom-center" />
            {children}
        </>
    )
}
