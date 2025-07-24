"use client";
import React, { useState } from "react";
import BlogListCart from "@/components/BlogList/page";
import Image from "next/image";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(6); // Reset visible count on new search
  };

  return (
    <section className="pt-[92px] pb-[120px]">
      <div className="bg-opacity-80 relative h-100 overflow-hidden bg-black text-white">
        <Image
          src="/Images/27-1920w.webp"
          alt="CTA Background"
          fill
          className="absolute inset-0 z-0 h-100 object-cover object-center opacity-20"
        />
        <h3 className="mt-15 p-20 text-center text-2xl font-bold md:text-5xl">
          Blogs
        </h3>
      </div>
      <div className="container">
        {/* Search Bar */}
        <div className="mt-12 text-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search the Blog"
            className="w-full max-w-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Pass props here */}
        <BlogListCart
          searchQuery={searchQuery}
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
        />
      </div>
    </section>
  );
};

export default Blog;
