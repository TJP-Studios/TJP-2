import React, { useState } from 'react';
import { categories, lawsData } from '../utils/data';

const LawCard = ({ title, content, image, detail }) => (
  <div className="p-4 bg-white shadow rounded-lg mb-4">
    <img className='object-cover w-full block' src={image} alt="" />
    <h2 className='text-2xl font-bold mt-2'>{content}</h2>
    <button className="text-base border border-[#C6C9CF] px-2 rounded-md mt-2">{title}</button>
    <a className='block text-[#353A43] text-lg underline mt-4' href="#">{ detail }</a>
  </div>
);

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredLaws = lawsData[activeCategory];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLaws = filteredLaws.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredLaws.length / itemsPerPage);

  return (
    <div className="container mx-auto my-8">
      <div className="flex  mb-4">
        {categories.map((category) => (
          <button
            key={category.filter}
            onClick={() => setActiveCategory(category.filter)}
            className={`px-4 py-2 mx-2 rounded ${
              activeCategory === category.filter ? 'bg-[#EFF4FF] text-[#235CEB]' : ' text-lg font-bold text-[#4F5561]'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      <hr />
      <div className='text-4xl font-bold py-7'>
         Showing all articles (40)
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {currentLaws.map((law, index) => (
          <LawCard key={index} title={law.title} content={law.content} image={law.image} detail={law.detail}  />
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-16">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 rounded bg-gray-200 text-gray-800"
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 rounded bg-gray-200 text-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
