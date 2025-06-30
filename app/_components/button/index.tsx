import React from 'react'
import Avatar, { AvatarProps } from '../avatar'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import './styles.scss'
import Link from 'next/link'

export interface ButtonProps extends AvatarProps {
    children: string
    url?: string
}

function Button({ image, alt, size, children, url = '/' }: ButtonProps) {
    return (
        <div>
            <Link href={url} className="button">
                <Avatar image={image} alt={alt} size={size} />
                {children}
                <ArrowRightCircleIcon className="w-4 h-4 mx-3" />
            </Link>
        </div>
    )
}

export default Button
