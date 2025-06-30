import React from 'react'
import Avatar from '../_components/avatar'
import {
    GlobeAltIcon,
    GlobeAsiaAustraliaIcon,
} from '@heroicons/react/24/outline'
import Capsule from '../_components/capsule'
import { FaGithub } from 'react-icons/fa6'
import { ImLinkedin } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import experience from '../_constants/experience'
import ExperienceCard from './_components/ExperienceCard'
import LinkedInCard from '../_components/LinkedInCard'
import educations from '../_constants/education'
import skills from '../_constants/technicalSkills'
import './styles.scss'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About - Tarun Bhardwaj',
    description: 'About - Tarun Bhardwaj Portfolio',
}

function About() {
    return (
        <div className="flex w-full flex-col md:flex-row flex-wrap">
            <div className="flex w-full md:w-2/5 items-center flex-col">
                <Avatar
                    image="/assets/images/pp.png"
                    alt="Tarun Bhardwaj"
                    size={200}
                />
                <div className="flex mt-5 items-center ">
                    <GlobeAsiaAustraliaIcon className="w-6 h-6 text-red-500" />
                    <p className="text-md font-bold">Asia/India </p>
                </div>
                <div className="flex mt-5 items-center ">
                    <GlobeAltIcon className="w-6 h-6 text-green-500" />
                    <p className="text-md font-bold">
                        Open for US/UK | Required visa sponsorship{' '}
                    </p>
                </div>
                <div className="flex mt-10 items-center gap-5">
                    <Capsule label="English" url="" />
                    <Capsule label="Hindi" url="" />
                </div>
                <div className="flex w-full mt-10 justify-center">
                    <LinkedInCard />
                </div>
                <div className="flex w-full mt-10 justify-center">
                    <ul className="section-list">
                        <Link href="#intro">
                            <li>Introduction</li>
                        </Link>
                        <Link href="#work">
                            <li>Work Experience</li>
                        </Link>
                        <Link href="#studies">
                            <li>Studies</li>
                        </Link>
                        <Link href="#skills">
                            <li>Technical skills</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="flex w-full md:w-3/5 flex-col">
                <div className="flex mt-20 flex-col" id="intro">
                    <h1 className="text-8xl font-bold">Tarun Bhardwaj</h1>
                    <p className="text-4xl text-gray-500">
                        Full-Stack Software Engineer
                    </p>
                </div>
                <div className="inline-flex gap-2 w-full mt-10">
                    <Capsule
                        label="GitHub"
                        url="https://github.com/TarunPandat"
                        icon={<FaGithub />}
                    />
                    <Capsule
                        label="LinkedIn"
                        url="https://www.linkedin.com/in/tarun-bhardwaj-developer/"
                        icon={<ImLinkedin />}
                    />
                    <Capsule
                        label="Email"
                        url="mailto:tarun.bhardwaj.developer"
                        icon={<MdEmail />}
                    />
                </div>
                <div className="flex mt-10">
                    <p className="text-lg">
                        Tarun is a Faridabad-based full-stack developer
                        passionate about crafting impactful digital experiences.
                        His work bridges mobile and web platforms, combining
                        thoughtful interfaces with scalable backend systems to
                        bring real-world solutions to life.
                    </p>
                </div>
                <div className="flex flex-col mt-10" id="work">
                    <p className="text-3xl font-bold">Work Experience</p>

                    <div className="flex mt-5 mb-20 flex-col gap-5">
                        {experience.map((exp, _) => (
                            <div key={exp.companyName}>
                                <ExperienceCard {...exp} />
                                {_ < experience.length - 1 && (
                                    <div className="divider divider-secondary" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col mt-10" id="studies">
                    <p className="text-3xl font-bold">Studies</p>

                    <div className="flex mt-5 mb-20 flex-col gap-5">
                        {educations.map((edu, _) => (
                            <div key={edu.completed}>
                                <div className="flex w-full flex-col">
                                    <div className="flex w-full flex-row justify-between">
                                        <p className="text-2xl font-bold">
                                            {edu.course}
                                        </p>
                                        <p className="text-md text-gray-400">
                                            {edu.university}
                                        </p>
                                    </div>
                                    <div className="flex w-full flex-col">
                                        <p className="text-md">
                                            {edu.college},{' '}
                                            <span className="font-bold">
                                                {edu.completed}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                {_ < educations.length - 1 && (
                                    <div className="divider divider-secondary" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col mt-10" id="skills">
                    <p className="text-3xl font-bold">Technical skills</p>

                    <div className="inline mt-5 mb-20 flex-col gap-5">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="inline-flex flex-col border border-gray-500 rounded-xl p-3 m-2"
                            >
                                <div className="flex w-full item-center">
                                    {/* {skill.icon && (
                                        typeof skill.icon === 'function' ?
                                            React.createElement(skill.icon as React.ComponentType<{ size: number }>, { size: 50 }) :
                                            skill.icon
                                    )} */}
                                </div>
                                <p className="text-xl font-bold">
                                    {skill.name}
                                </p>
                                <p className="text-sm text-gray-400">
                                    Exp: {skill.exp}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
