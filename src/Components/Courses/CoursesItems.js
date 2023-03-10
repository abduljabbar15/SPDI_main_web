
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './../../globalComponents/Loading';

const CoursesItems = ({ item }) => { 
    
    return (
        <div >
            {
                item?<div className="max-w-sm   border mx-auto bg-white rounded-lg shadow-md     dark:border-gray-700">
                <img className="rounded-t-lg h-64 mx-auto" src={process.env.REACT_APP_ROOT_URL + "/" + item.img} alt="" />
                <div className="p-5 dark:bg-gray-800 my rounded-b-md">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">{item.description.slice(0, 80) + '...'}</p>
                    <Link to={`/course/${item._id}`} className="inline-flex items-center w-full px-3 py-2 mb-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Course
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>:<Loading></Loading>
            }
        </div >
    );
};

export default CoursesItems;