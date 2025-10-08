import React, { memo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";
import { blogsData } from "./seperate/index";
import { FaReact } from "react-icons/fa";

const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.15, duration: 0.6 },
  },
};

const svgPlaceholder =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'/>";

const BlogCard = memo(function BlogCard({ blog }) {
  const imgSrc = blog.img || svgPlaceholder;
  const srcSet = blog.srcSet ? blog.srcSet : undefined;

  return (
    <motion.article
      className="group rounded-2xl overflow-hidden shadow-lg will-change-transform"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.18 }}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.995 }}
      aria-labelledby={`blog-${blog.id}-title`}
      role="article"
    >
      <div className="relative w-full h-56 bg-gradient-to-br from-gray-800/30 to-black/40">
        <picture>
          {blog.srcWebp && <source srcSet={blog.srcWebp} type="image/webp" />}
          {blog.srcSet && <source srcSet={blog.srcSet} />}
          <img
            src={imgSrc}
            alt={blog.title}
            loading="lazy"
            decoding="async"
            fetchPriority={blog.priority ? "high" : "auto"}
            className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              filter: blog.blurDataURL ? "none" : undefined,
            }}
          />
        </picture>

        {blog.tag && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-sm text-pur">
            {blog.tag}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3
          id={`blog-${blog.id}-title`}
          className="text-lg font-semibold mb-2 text-pur leading-tight"
        >
          {blog.title}
        </h3>

        <p className="text-sm text-gray-400 mb-4 line-clamp-3">
          {blog.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          <Link
            to={`/blog/${blog.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-pur focus:outline-none focus-visible:ring-2 focus-visible:ring-pur/40 rounded"
            aria-label={`Read more about ${blog.title}`}
          >
            Read More →
          </Link>

          <time className="text-xs text-gray-500" dateTime={blog.date || ""}>
            {blog.date || "—"}
          </time>
        </div>
      </div>
    </motion.article>
  );
});

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    img: PropTypes.string,
    srcSet: PropTypes.string,
    srcWebp: PropTypes.string,
    blurDataURL: PropTypes.string,
    tag: PropTypes.string,
    date: PropTypes.string,
    priority: PropTypes.bool,
  }).isRequired,
};

const Blogs = memo(function Blogs() {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      const height = window.innerHeight;

      if (top < height && top > 0) {
        controls.start({
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 0.9, 1],
          transition: { duration: 1, ease: "easeInOut" },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      <header className="mt-[25%] md:mt-[8%] mb-10 text-center flex flex-col items-center justify-center space-y-4">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ rotate: -180, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-pur to-pink-500 rounded-full shadow-lg"
          aria-hidden
        >
          <FaReact className="text-white text-3xl animate-spin-slow" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl px-4 md:text-4xl font-extrabold bg-gradient-to-r from-pur to-pink-500 bg-clip-text text-transparent tracking-wide"
        >
          The Thinking Grid — Voices of Intelligent Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-base text-gray-400  px-6 max-w-md mx-auto"
        >
          Hand-picked reads — <span className="text-pur font-semibold">optimized</span>{" "}
          and <span className="text-pink-500 font-semibold">accessible</span>.
        </motion.p>
      </header>

      {/* cards grid */}
      <section className="mt-6 max-w-6xl mx-auto py-12 px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(blogsData) && blogsData.length > 0
            ? blogsData.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            : // graceful empty state
              <div className="col-span-full text-center text-gray-400 py-12">
                No posts yet — come back soon.
              </div>}
        </div>
      </section>
    </>
  );
});

export default Blogs;
