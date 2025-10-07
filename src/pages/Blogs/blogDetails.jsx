import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogsData } from "./seperate/index";
import { FaArrowLeft } from "react-icons/fa";

const DetailBlog = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center mt-20 text-red-500">Blog not found</h2>;
  }

  return (
    <div className="mt-[6%] max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-pur mb-6">
        {blog.title}
      </h1>

      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-2xl mb-6"
      />

      <p className="text-gray-400 text-sm mb-4 text-center">
        By <span className="font-semibold text-white">{blog.author}</span> •{" "}
        {blog.date}
      </p>

      <div
        className="prose prose-lg prose-invert max-w-none text-gray-300 mb-12"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Back to Blogs Button */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pur to-pink-500 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <FaArrowLeft className="text-sm" />
            Back to Blogs
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailBlog;
