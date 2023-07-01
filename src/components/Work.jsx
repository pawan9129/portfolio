import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name='work' className='mt-5 w-full md:h-screen text-gray-600'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-2 text-gray-600 border-[#94A9FB]'>
            Work
          </p>
          <p className='py-6'># Check out some of my recent work</p>
        </div>
        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: "contain" }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {/* {item.name} */}
                  <div className="flex flex-col items-center pb-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name} </h5>
                  </div>
                </span>
                <div className="text-center space-x-3">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button className="m-2 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button className="m-2 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* <p className='p-8'>And many More ...</p> */}

        </div>
      </div>
    </div>
  );
};

export default Work;
