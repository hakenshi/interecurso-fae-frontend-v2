import React, { ReactNode } from 'react'

import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Intercuso Unifae",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body cz-shortcut-listen="true" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <main className='bg-zinc-600 w-screen h-screen flex-center'>
                    {children}
                </main>
            </body>
        </html>
    )
}
