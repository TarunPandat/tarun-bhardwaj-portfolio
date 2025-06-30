import Capsule from '@/app/_components/capsule'
import { WorkExperience } from '@/app/_constants/experience'
import React from 'react'

function ExperienceCard({
    companyName,
    from,
    to,
    present,
    description,
    designation,
    image,
    skills,
}: WorkExperience) {
    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full justify-between">
                <p className="text-xl font-bold">{companyName}</p>
                <p className="text-md text-gray-500">{`${from} - ${
                    to || (present && 'Present')
                }`}</p>
            </div>
            <div className="flex w-full">
                <p className="text-sm text-blue-400">{designation}</p>
            </div>
            <div className="flex w-full mt-5">
                <p className="text-md">{description}</p>
            </div>
            {image && (
                <div className="flex w-full mt-5">
                    <img src={image} alt={companyName} className="w-[250px] h-auto" />
                </div>
            )}
            <div className="flex w-full mt-5 gap-3 !flex-wrap">
                {skills?.map((skill) => (
                    <Capsule key={skill} label={skill} url="" />
                ))}
            </div>
        </div>
    )
}

export default ExperienceCard
