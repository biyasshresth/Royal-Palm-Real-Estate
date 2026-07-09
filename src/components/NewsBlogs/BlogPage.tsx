import React, { FC, useEffect } from "react";
import BlogPic from "../../assets/BlogPic.png";
 

const BlogPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Nunc Volutpat Venenatis",
      author: "Nick Roach",
      date: "May 9, 2014",
      image: BlogPic,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sit amet dolor facilisis.",
    },
    {
      title: "Vestibulum Nisl Felis",
      author: "Nick Roach",
      date: "May 9, 2014",
      image: BlogPic,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sit amet dolor facilisis.",
    },
    {
      title: "Proin Eu Augue Effictur",
      author: "Nick Roach",
      date: "May 9, 2014",
      image: BlogPic,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sit amet dolor facilisis.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="bg-pink-100 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 md:px-12 py-16 gap-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-serif font-bold mb-4 text-pink-700">
            News & Blogs
          </h1>
          <p className="text-lg text-gray-600">
            Quis autem vel eum iure reprehenderit, qui in ea voluptate velit
            esse, quam nihil molestiae.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={BlogPic}
            alt="News & Events"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="bg-white max-w-7xl mx-auto px-4 md:px-12 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-gray-800">
            Our Blog
          </h2>
          <p className="text-gray-600">
            Vestibulum mattis consectetur ligula, id suscipit quam dapibus vel.
            Maecenas molestie, enim sit amet suscipit imperdiet, justo diam
            semper leo.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {post.author} | {post.date}
                </p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sit amet dolor facilisis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;