import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import ToastProvider from "@/Providers/ToastProvider";
import {getServerSession} from "next-auth";
import {options} from "@/app/options";
import {NavBar, UserAvatar} from "@/app/components";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Shopik_admin',
    description: 'Admin panel for ShopiK App.',
}

export default async function RootLayout({children,}: {
    children: React.ReactNode
}) {

    const session = await getServerSession(options)
    const userImage = session?.user?.image

    return (
        <html lang="en">
        <body className={inter.className}>
        <ToastProvider/>
        <header>
            {session ? <UserAvatar avatar={userImage || ""}/> : <NavBar/>}
        </header>
        {children}
        </body>
        </html>
    )
}
