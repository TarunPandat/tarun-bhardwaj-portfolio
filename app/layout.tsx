import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.scss'
import Header from './_components/Header'
import { cookies } from 'next/headers'
import themes from './_constants/themes'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const cookieStore = await cookies()
    const theme = cookieStore.get('theme')

    return (
        <html lang="en" data-theme={theme || themes.dark} className="h-full">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-full `}
            >
                <Header />
                <div className="container mx-auto mt-40">{children}</div>
            </body>
        </html>
    )
}
