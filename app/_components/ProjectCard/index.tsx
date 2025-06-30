import React from 'react'
import MyCarousel from '../Carousel'
import { WorkTypes } from '@/app/_constants/work'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface props {
    title?: boolean
}

function ProjectCard(proj: WorkTypes) {
    return (
        <div className="flex my-10 flex-col">
            <MyCarousel
                slideName={proj.projectName.split(' ').join('-')}
                mobile={proj.mobile}
                slides={proj.images.map((img) => ({ img }))}
            />
            <div className="flex mt-5 flex-wrap gap-10">
                <div className="flex w-full md:flex-1">
                    <p className="text-4xl font-bold">{proj.title}</p>
                </div>
                <div className="flex w-full md:flex-1 flex-col">
                    <p className="text-xl text-gray-500">{proj.thoughts}</p>
                    {proj?.url && (
                        <Link
                            href={proj.url}
                            target="_blank"
                            className="text-blue-400 text-md inline-flex items-center"
                        >
                            Checkout <ArrowRightIcon className="icon ml-2" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
