'use client'

import { useEffect } from 'react'

function LinkedInCard() {
    useEffect(() => {
        // Load LinkedIn badge script dynamically
        const script = document.createElement('script')
        script.src = 'https://platform.linkedin.com/badges/js/profile.js'
        script.async = true
        script.defer = true
        script.type = 'text/javascript'
        document.body.appendChild(script)
    }, [])

    return (
        <>
            <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="dark"
                data-type="VERTICAL"
                data-vanity="tarun-bhardwaj-developer"
                data-version="v1"
            >
                <a
                    className="badge-base__link LI-simple-link"
                    href="https://in.linkedin.com/in/tarun-bhardwaj-developer?trk=profile-badge"
                ></a>
            </div>
        </>
    )
}

export default LinkedInCard
