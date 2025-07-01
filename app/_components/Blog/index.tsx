import { Blog } from '@/app/_constants/blogs'
import React from 'react'
import Avatar from '../avatar'

function BlogComp({ title, date, image }: Blog) {
    return (
        <div className="flex w-full flex-col hover:border border-gray-500 rounded-2xl cursor-pointer">
            <div className="flex w-full">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto rounded-2xl"
                />
            </div>
            <div className="flex w-full flex-col sm:mx-10">
                <p className="text-xl font-bold my-5">{title}</p>
                <div className="flex w-full">
                    <p className="text-sm text-gray-500 mb-5 items-center">
                        {date}{' '}
                    </p>
                    <div className="ml-2">
                        <Avatar
                            image="/assets/images/pp.png"
                            alt="Tarun Bhardwaj"
                            size={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogComp
