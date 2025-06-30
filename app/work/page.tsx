import React from 'react'
import work from '../_constants/work'
import ProjectCard from '../_components/ProjectCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Work - Tarun Bhardwaj',
    description: 'Work - Tarun Bhardwaj Portfolio',
}

function Work() {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex w-full md:w-4/5 flex-col px-2">
                {work.map((proj, _) => (
                    <div
                        className="flex flex-col w-full"
                        key={proj.projectName}
                    >
                        <p className="text-4xl font-bold">{proj.projectName}</p>
                        <ProjectCard {...proj} />
                        {_ < work.length - 1 && (
                            <div className="divider divider-secondary" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
