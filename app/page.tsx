import React from 'react'
import Button from './_components/button'
import work from './_constants/work'
import blogs from './_constants/blogs'
import ProjectCard from './_components/ProjectCard'
import BlogCard from './_components/BlogCard'
import { Metadata } from 'next'

const latestProject = work[0]

const latestBlogs = blogs.reverse().slice(0, 2)

export const metadata: Metadata = {
    title: 'Tarun Bhardwaj - Portfolio',
    description: 'Home - Tarun Bhardwaj Portfolio',
}

function Home() {
    return (
        <div className="flex w-full flex-col">
            <div className="flex flex-col">
                <h1 className="text-7xl font-bold md:w-8/12">
                    Bringing ideas to life through code and design
                </h1>
                <p className="mt-10 text-md text-gray-400 md:w-8/12">
                    I&apos;m Tarun, a full-stack developer building scalable web and
                    mobile apps with React, Node.js, and Next.js. I lead
                    product-driven projects by day — and craft my own ideas
                    after hours.
                </p>
            </div>
            <div className="flex my-10">
                <Button
                    image="/assets/images/pp.png"
                    alt="Tarun Bhardwaj"
                    size={35}
                    url="/about"
                >
                    About me
                </Button>
            </div>
            <ProjectCard {...latestProject} />
            <div className="flex my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex">
                        <p className="text-4xl font-bold">
                            Latest from the blog
                        </p>
                    </div>
                    {latestBlogs.map((blog) => (
                        <BlogCard key={blog.slug} {...blog} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
