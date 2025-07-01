import React from 'react'
import './styles.scss'
import Link, { LinkProps } from 'next/link'

type LinkNoHref = Omit<LinkProps, 'href'>

interface CapsuleProps extends LinkNoHref {
    label: string
    icon?: React.JSX.Element | React.ReactNode
    url?: string
    download?: string | boolean
    target?: React.HTMLAttributeAnchorTarget
    className?: string
}

function Capsule({
    label,
    icon,
    download,
    url,
    className,
    ...linkProps
}: CapsuleProps) {
    if (url) {
        if (download) {
            return (
                <a {...linkProps} href={url} download={download}>
                    <div className={`capsule ${className}`}>
                        {icon} {label}
                    </div>
                </a>
            )
        }

        return (
            <Link {...linkProps} href={url}>
                <div className={`capsule ${className}`}>
                    {icon} {label}
                </div>
            </Link>
        )
    }

    return (
        <div className={`capsule cursor-pointer ${className}`}>
            {icon} {label}
        </div>
    )
}

export default Capsule
