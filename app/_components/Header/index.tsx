'use client'

import React, { useCallback, useMemo, useState } from 'react'
import './styles.scss'
import {
    BookmarkSquareIcon,
    HomeIcon,
    MoonIcon,
    Squares2X2Icon,
    SunIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getThemeFromCookie, setThemeInCookie } from '@/app/_utils/funs'
import themes from '@/app/_constants/themes'

function Header() {
    const [theme, setTheme] = useState(getThemeFromCookie())
    const path = usePathname()

    const switchTheme = useCallback(() => {
        const themeSelected =
            theme === themes.dark ? themes.cupcake : themes.dark
        setTheme(themeSelected)
        setThemeInCookie(themeSelected)
        document.documentElement.setAttribute('data-theme', themeSelected)
    }, [theme])

    const isActive = useCallback(
        (url: string) => {
            if (url === '/') {
                return path === '/' ? 'active' : ''
            }
            return path === url || path.includes(url) ? 'active' : ''
        },
        [path]
    )

    return (
        <div className="header">
            <ul>
                <li className={`${isActive('/')}`}>
                    <Link className="link" href="/">
                        <HomeIcon className="icon" />
                    </Link>
                </li>
                <div className="divider"></div>
                <li className={`${isActive('/about')}`}>
                    <Link className="link" href="/about">
                        <UserCircleIcon className="icon mx-2" /> About
                    </Link>
                </li>
                <li className={`${isActive('/work')}`}>
                    <Link className="link" href="/work">
                        <Squares2X2Icon className="icon mx-2" />
                        Work
                    </Link>
                </li>
                <li className={`${isActive('/blogs')}`}>
                    <Link className="link mr-2" href="/blogs">
                        <BookmarkSquareIcon className="icon mx-2" />
                        Blog
                    </Link>
                </li>
                <div className="divider"></div>
                <li className={`cursor-pointer`} onClick={switchTheme}>
                    {theme === themes.dark ? (
                        <SunIcon className="icon" />
                    ) : (
                        <MoonIcon className="icon" />
                    )}
                </li>
            </ul>
        </div>
    )
}

export default Header
