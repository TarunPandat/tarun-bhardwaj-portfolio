import BlogComp from '@/app/_components/Blog'
import blogs, { Blog as BlogTypes } from '@/app/_constants/blogs'
import { Metadata } from 'next'
import React from 'react'
import './styles.scss'

type Props = {
    params: Promise<{ blog: string }>
}

// 🧠 Set meta title dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { blog } = await params

    return {
        title: `${blog.replace(/-/g, ' ')} | Blog`,
        description: `Read about ${blog.replace(/-/g, ' ')}`,
    }
}

async function Blog({ params }: { params: Promise<{ blog: string }> }) {
    const { blog } = await params

    const selectedBlog: BlogTypes =
        blogs.find((b) => b.slug === blog) || blogs[0]
    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex flex-col w-full md:w-4/5">
                <BlogComp {...selectedBlog} />

                <div className="mt-10 mb-20">
                    {selectedBlog.isHtml ? (
                        <div
                            className="html"
                            dangerouslySetInnerHTML={{
                                __html: selectedBlog.content.replace(
                                    /<\/(p|h[1-6])>/g,
                                    (match) => `${match}<br/>`
                                ),
                            }}
                        />
                    ) : (
                        selectedBlog.content.split('\n').map((line, index) => (
                            <span key={index} className="whitespace-pre-wrap">
                                {line}
                                <br />
                            </span>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Blog
