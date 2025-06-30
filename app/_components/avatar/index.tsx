import Image from 'next/image'
import React from 'react'

export interface AvatarProps {
    image: string
    alt: string
    size?: number
}

function Avatar({ image, alt, size = 12 }: AvatarProps) {
    return (
        <div className="avatar">
            <div className={`w-[${size}]`}>
                <Image
                    src={image}
                    width={size}
                    height={size}
                    className="rounded-full"
                    alt={alt || 'profile picture'}
                />
            </div>
        </div>
    )
}

export default Avatar
