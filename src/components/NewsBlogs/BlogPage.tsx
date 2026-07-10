import React, { FC, useEffect, useState } from "react";
import { X, Facebook, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BlogPic from "../../assets/BlogPic.png";
import RealestateStrategy from "../../assets/RealestateStrategy.png";
import Threcrore from "../../assets/Threcrore.png";
import ModernHome from "../../assets/ModernHome.jpg";
import Invstcul from "../../assets/Invstcul.png";
import BIP from "../../assets/BIP.png";
import BlogService from "../../services/Blog";
import { Blog } from "types/blogs.ts/blog";

const BlogPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [getBlogs, setGetBlogs] = useState<Blog | null>(null);
  const [onOpen, setOnClick] = useState(false);
  const blogService = new BlogService();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogService.getBlogs();
        setBlogs(response.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleBlogClick = async (blogId: string) => {
    try {
      const response = await blogService.getbyId(blogId);
      setGetBlogs(response.blog || null);
      setOnClick(true);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const closePopup = () => setOnClick(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Latest Blog Posts
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all"
              onClick={() => handleBlogClick(blog.id)}
            >
              <img
                src={blog.image || BlogPic}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {onOpen && getBlogs && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>

              <img
                src={getBlogs.image || BlogPic}
                alt={getBlogs.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {getBlogs.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {getBlogs.description}
                </p>
                <div className="flex space-x-3">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
                    <Facebook className="h-5 w-5" /> Share
                  </button>
                  <button className="flex items-center gap-2 text-black hover:text-gray-700 transition">
                    <Twitter className="h-5 w-5" /> Tweet
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;
