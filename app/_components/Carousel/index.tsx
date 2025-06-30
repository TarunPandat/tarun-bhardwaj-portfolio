'use client'

import React, { useCallback, useEffect, useState } from 'react'
import './styles.scss'
import { usePathname } from 'next/navigation'

export interface Slide {
    img: string
    label?: string
}

export interface CarouselProps {
    slides: Slide[]
    slideName?: string
    mobile?: boolean
}

function MyCarousel({
    slides,
    slideName = 'slide',
    mobile = false,
}: CarouselProps) {
    const pathname = usePathname()
    const [slideHash, setSlideHash] = useState<string | null>(null)

    useEffect(() => {
        // On mount or pathname change, get current hash
        const updateHash = () => {
            const hash = window.location.hash
            setSlideHash(hash ? hash.replace('#', '') : null)
        }

        updateHash() // set on first load

        window.addEventListener('hashchange', updateHash)

        return () => window.removeEventListener('hashchange', updateHash)
    }, [pathname])

    const nextSlide = useCallback(
        (index: number) => {
            const size = slides.length
            return index + 1 < size ? index + 1 : 0
        },
        [slides]
    )

    const prevSlide = useCallback(
        (index: number) => {
            const size = slides.length
            return index > 0 ? index - 1 : size - 1
        },
        [slides]
    )

    return (
        <div>
            <div className="carousel w-full">
                {slides?.map((slide, _) => (
                    <div
                        key={slide.img}
                        id={`${slideName}${_}`}
                        className="carousel-item relative w-full flex justify-center"
                    >
                        <img
                            src={slide.img}
                            className={`${
                                mobile
                                    ? `h-[500px] w-auto px-2`
                                    : `w-full rounded-3xl px-2`
                            }`}
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a
                                href={`#${slideName}${prevSlide(_)}`}
                                className="btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href={`#${slideName}${nextSlide(_)}`}
                                className="btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex w-full justify-center">
                <div className="indicator-wrapper">
                    {slides?.map((slide, _) => (
                        <a
                            key={slide.img}
                            href={`#${slideName}${_}`}
                            className={`indicator ${
                                slideHash === `${slideName}${_}`
                                    ? '!bg-white'
                                    : ''
                            }`}
                        >
                            {/* {_ + 1} */}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyCarousel
