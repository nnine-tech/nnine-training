import React, { useState } from 'react';

const TrainerProfile = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const truncatedDescription = props.description.split('\n').slice(0, 4).join('\n');

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="w-full h-auto cursor-pointer"
        style={{ height: '200px' }}
        onClick={toggleModal}
      />
      {isModalOpen && (
        <div className="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-75" onClick={toggleModal}>
          <div className="max-w-md bg-white rounded-lg p-8">
            <img src={props.imageUrl} alt={props.imageAlt} className="w-full h-auto mb-4" />
            <div className="font-bold text-base mb-4">{props.name}</div>
            <p className="text-blue-900 text-xs">{props.description}</p>
          </div>
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-base mb-2">{props.name}</div>
        <p className="text-blue-900 text-xs text-justify line-clamp-5">{truncatedDescription}</p>
        <button
          onClick={toggleModal}
          className="text-blue-600 hover:text-blue-800 focus:outline-none text-xs"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default TrainerProfile;
