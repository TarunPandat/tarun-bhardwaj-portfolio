import React from 'react'
import Avatar from '../_components/avatar'
import {
    ArrowRightIcon,
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
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import certificates from '../_constants/certificates'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'About - Tarun Bhardwaj',
    description: 'About - Tarun Bhardwaj Portfolio',
}

function About() {
    return (
        <div className="flex w-full flex-col md:flex-row flex-wrap gap-2.5">
            <div className="flex w-full flex-1 items-center flex-col">
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
                        <li>
                            <Link href="#intro">Introduction</Link>
                        </li>
                        <li>
                            <Link href="#work">Work Experience</Link>
                        </li>
                        <li>
                            <Link href="#studies">Studies</Link>
                        </li>
                        <li>
                            <Link href="#skills">Technical skills</Link>
                        </li>
                        <li>
                            <Link href="#certificates">Certificates</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex w-full flex-2 flex-col">
                <div className="flex mt-20 flex-col" id="intro">
                    <h1 className="text-4xl sm:text-8xl font-bold">
                        Tarun Bhardwaj
                    </h1>
                    <p className="text-2xl sm:text-4xl text-gray-500">
                        Full-Stack Software Engineer
                    </p>
                </div>
                <div className="inline-flex gap-2 w-full mt-10 flex-wrap">
                    <Capsule
                        target="_blank"
                        label="GitHub"
                        url="https://github.com/TarunPandat"
                        icon={<FaGithub />}
                    />
                    <Capsule
                        target="_blank"
                        label="LinkedIn"
                        url="https://www.linkedin.com/in/tarun-bhardwaj-developer"
                        icon={<ImLinkedin />}
                    />
                    <Capsule
                        target="_blank"
                        label="Email"
                        url="mailto:tarun.bhardwaj.developer@gmail.com"
                        icon={<MdEmail />}
                    />
                    <Capsule
                        download
                        label="Resume"
                        url="/assets/docs/Tarun-Bhardwaj-CV.pdf"
                        icon={<ArrowDownTrayIcon className="icon" />}
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
                                    {skill.icon &&
                                        (typeof skill.icon === 'function'
                                            ? React.createElement(
                                                  skill.icon as React.ComponentType<{
                                                      size: number
                                                  }>,
                                                  { size: 50 }
                                              )
                                            : skill.icon)}
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
                <div className="flex flex-col mt-10" id="certificates">
                    <p className="text-3xl font-bold">Certificates</p>

                    <div className="flex mt-5 mb-20 flex-col gap-5">
                        {certificates.map((cert, _) => (
                            <div key={cert.title + cert.issuedOn}>
                                <div className="flex w-full flex-col">
                                    <div className="flex w-full justify-between mb-2">
                                        <p className="text-xl font-bold">
                                            {cert.title}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {cert.provider}
                                        </p>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <div className="flex flex-col justify-between">
                                            <p className="text-sm">
                                                Issued on {cert.issuedOn}
                                            </p>
                                            {cert.code && (
                                                <p className="text-sm">
                                                    Certification code{' '}
                                                    {cert.code}
                                                </p>
                                            )}
                                            {cert?.url && (
                                                <Link
                                                    href={cert.url}
                                                    target="_blank"
                                                    className="text-blue-400 text-md inline-flex items-center"
                                                >
                                                    Checkout{' '}
                                                    <ArrowRightIcon className="icon ml-2" />
                                                </Link>
                                            )}
                                        </div>
                                        {cert.image && (
                                            <Link
                                                href={cert.image}
                                                target="_blank"
                                            >
                                                <Image
                                                    src={cert.image}
                                                    width={200}
                                                    height={150}
                                                    alt={cert.title}
                                                    className="rounded-lg"
                                                />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                                {_ < certificates.length - 1 && (
                                    <div className="divider divider-secondary" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
