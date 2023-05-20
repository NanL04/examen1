import React from 'react';

const Carousel = ({ repositories }) => {
  const redirectToRepository = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex overflow-x-auto">
      {repositories.map((repository) => (
        <div key={repository.id} className="max-w-xs mx-4">
          <div className="bg-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-bold">{repository.name}</h2>
            <p className="text-gray-600">{repository.description}</p>
            <button
              className="mt-2 inline-block bg-gray-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={() => redirectToRepository(`https://github.com/${repository.owner.login}/${repository.name}`)}
            >
              Ver repositorio
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
