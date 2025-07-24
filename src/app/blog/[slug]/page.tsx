"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogPosts } from "@/components/BlogList/bloglist";
import BlogListCart from "@/components/BlogList/page";

const BlogDetail = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const { slug } = useParams();
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return (
      <div className="pt-32 text-center text-lg text-red-500">
        Blog post not found.
      </div>
    );
  }

  return (
    <div className="pt-[92px]">
      {/* Sticky Background Image with Title */}
      <div className="relative sticky top-[92px] z-0 h-[600px] w-full">
        <Image
          src={blogPost.img || "/file.svg"}
          alt={blogPost.title}
          fill
          className="object-cover object-center opacity-30"
          priority
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-black">
        <h1 className="max-w-4xl text-3xl font-bold md:text-5xl">
          {blogPost.title}
        </h1>
        <p className="mt-4 text-sm font-medium md:text-base">
          {blogPost.date || "July 2025"}
        </p>
      </div>
      {/* Blog Content */}
      <div className="max-w-8xl relative z-10 mx-auto -mt-16 bg-white p-6 text-black shadow-lg md:p-12">
        {blogPost.content.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="mb-2 px-60 text-2xl font-semibold">
              {section.title}
            </h2>
            <p className="px-60 text-lg leading-relaxed text-gray-800">
              {section.desc}
            </p>
          </div>
        ))}

        {/* Related Blog Posts */}
        <div className="mt-12">
          <BlogListCart
            searchQuery={searchQuery}
            visibleCount={visibleCount}
            setVisibleCount={setVisibleCount}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
