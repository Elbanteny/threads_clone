import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import type { Metadata } from "next";

import '../globals.css';

export const metadata: Metadata = {
    title: 'Threads',
    description: 'Threads clone dengan NextJs 13'
}

const inter = Inter({ subsets: ['latin'] })

export default function rootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <div className="w-full flex justify-center items-center min-h-screen">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}