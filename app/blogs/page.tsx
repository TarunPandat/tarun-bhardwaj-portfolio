import React from 'react'
import blogs from '../_constants/blogs'
import BlogCard from '../_components/BlogCard'
import BlogComp from '../_components/Blog'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blogs - Tarun Bhardwaj',
    description: 'Blogs - Tarun Bhardwaj Portfolio',
}

function Blogs() {
    const [latestBlogs, ...restBlogs] = blogs

    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full flex-col items-center">
                <div className="flex flex-col w-full md:w-4/5">
                    <h1 className="text-6xl font-bold mb-10">
                        Writing about design and tech...
                    </h1>
                    <Link href={`/blogs/${latestBlogs.slug}`}>
                        <BlogComp {...latestBlogs} />
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
                        {restBlogs.map((blog) => (
                            <div key={blog.slug}>
                                <BlogCard {...blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
