import { Blog } from '@/app/_constants/blogs'
import Link from 'next/link'
import React from 'react'

function BlogCard({ slug, title, date }: Blog) {
    return (
        <Link href={`/blogs/${slug}`}>
            <div className="flex hover:border transition-all border-gray-400 rounded-2xl cursor-pointer p-3 flex-col h-[100px]">
                <p className="text-xl font-bold">{title}</p>
                <p className="text-sm font-gray-500">{date}</p>
            </div>
        </Link>
    )
}

export default BlogCard
