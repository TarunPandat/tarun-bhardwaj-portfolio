import React from 'react'
import './styles.scss'
import Link from 'next/link'

interface CapsuleProps {
    label: string
    icon?: React.JSX.Element | React.ReactNode
    url: string
}

function Capsule({ label, icon, url }: CapsuleProps) {
    return (
        <Link href={url} target="_blank">
            <div className="capsule">
                {icon} {label}
            </div>
        </Link>
    )
}

export default Capsule
