import React from 'react';

const blogData = [
  {
    id: 1,
    title: "Bespoke software solutions for your unique business needs",
    description: "Lorem ipsum dolor sit amet consectetur. Dignissim sit sagittis id ullamcorper lectus ac ac.",
    image: "blog.png", 
    link: "https://example.com/blog1",
  },
  {
    id: 2,
    title: "Another interesting blog title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "blog.png",
    link: "https://example.com/blog2", 
  },
  {
    id: 3,
    title: "Exploring new technologies in software development",
    description: "Curabitur tincidunt nisi vitae turpis bibendum vehicula.",
    image: "blog.png",
    link: "https://example.com/blog3", 
  },
  {
    id: 4,
    title: "Best practices for web development",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "blog.png",
    link: "https://example.com/blog4", 
  },
  {
    id: 5,
    title: "How to improve your coding skills",
    description: "Aliquam erat volutpat. Sed id magna vitae libero fermentum facilisis.",
    image: "blog.png",
    link: "https://example.com/blog5", 
  },
  {
    id: 6,
    title: "Understanding the importance of UX design",
    description: "Nam a libero vitae ligula cursus commodo.",
    image: "blog.png",
    link: "https://example.com/blog6",
  },

];

const Blog2 = ({ title, description, image, link }) => {
  return (
    <div className="bg-[#D8E1FA] rounded-3xl gap-[10px] mt-4 shadow-">
      <div className="flex items-center justify-center mt-3">
        <img src={image} alt="" className='mt-8' />
      </div>
      <div className='gap-[8px] p-4'>
        <h1 className="text-2xl font-poppins font-semibold bg-gradient-to-r from-[#071144] to-[#738FF2] bg-clip-text text-transparent">
          {title}
        </h1>
        <h3 className='font-poppins text-sm'>{description}</h3>
      </div>
      <div className='flex items-center justify-center'>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#0C07F9] text-white font-poppins py-2 px-4 rounded-3xl transition-colors mb-10 font-bold"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 pt-24">
      {blogData.map(blog => (
        <Blog2 
          key={blog.id} 
          title={blog.title} 
          description={blog.description} 
          image={blog.image} 
          link={blog.link} 
        />
      ))}
    </div>
  );
};

export default BlogList;
