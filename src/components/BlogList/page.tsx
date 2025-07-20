"use client";
import React from "react";
import { blogPosts } from "./bloglist";
import Image from "next/image";

type Props = {
  searchQuery: string;
  visibleCount: number;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
};

const BlogListCart = ({
  searchQuery,
  visibleCount,
  setVisibleCount,
}: Props) => {
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div className="mx-auto mt-20 max-w-6xl">
      <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post, index) => (
          <div
            key={index}
            className="dark:bg-dark overflow-hidden rounded-lg shadow transition-shadow duration-300 hover:shadow-md"
          >
            <div className="relative h-52 w-full">
              <Image
                src={post.img}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold dark:text-gray-200">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-4 text-sm dark:text-gray-400">
                {post.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length > 6 && (
        <div className="mt-10 space-x-4 text-center">
          {hasMore ? (
            <button
              onClick={handleShowMore}
              className="hover:bg-primary cursor-pointer bg-blue-800 px-6 py-3 text-white transition hover:text-black"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(6)}
              className="hover:bg-primary cursor-pointer bg-blue-800 px-6 py-3 text-white transition hover:text-black"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogListCart;
