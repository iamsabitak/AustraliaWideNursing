"use client";

import { useState } from "react";
import BlogListCart from "../BlogList/page";

const BlogSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section id="blogs" className="py-16 md:py-20 lg:py-16">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold text-black">
          Blogs
        </h2>

        <BlogListCart
          searchQuery={searchQuery}
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
        />
      </div>
    </section>
  );
};

export default BlogSection;
