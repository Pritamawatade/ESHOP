import React from "react";

const BlogCard = () => {
  const blogs = [
    {
      id: 1,
      image: "https://eshop-tcj.netlify.app/assets/blog-1-5Dxe4tom.jpg", // Replace with your image URL
      date: "Jan 20, 2024",
      author: "Dilshad",
      title: "How to choose perfect smartwatch",
      description: "Learn the key factors to consider when choosing a smartwatch that suits your needs.",
      delay: 100,
    },
    {
      id: 2,
      image: "https://eshop-tcj.netlify.app/assets/blog-2-zkQv0kmP.jpg", // Replace with your image URL
      date: "Jan 20, 2024",
      author: "Satya",
      title: "How to choose perfect gadget",
      description: "Explore tips and tricks for picking the perfect gadgets for your lifestyle.",
      delay: 200,
    },
    {
      id: 3,
      image: "https://eshop-tcj.netlify.app/assets/blog-3-VPuh2Z20.jpg", // Replace with your image URL
      date: "Jan 20, 2024",
      author: "Sabir",
      title: "How to choose perfect VR headset",
      description: "Find out what to look for in a VR headset for an immersive experience.",
      delay: 300,
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Our Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="500"
              data-aos-delay={blog.delay}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {blog.date} by {blog.author}
                </p>
                <h3 className="text-lg font-semibold my-2">{blog.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
