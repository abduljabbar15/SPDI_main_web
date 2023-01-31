import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './../../globalComponents/Navbar';
import Footer from './../../globalComponents/Footer';
import { MdHelp } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import { BsCalendarDateFill } from 'react-icons/bs';
import { GrUpdate } from 'react-icons/gr';
import { ImTrophy } from 'react-icons/im';
import { GiDuration } from 'react-icons/gi';
import { TbCertificate } from 'react-icons/tb';
import { MdAccessTimeFilled } from 'react-icons/md';
import { useEffect } from 'react';
import { useState } from 'react';
import MentorDetails from './MentorDetails';

function SingleCourse() {
    
    const perams = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(process.env.REACT_APP_ROOT_URL + '/courses')
            .then(res => res.json())
            .then(res => setData(res.find(perCourse => perCourse._id === perams.courseid)))
    }, [perams.courseid])

    console.log(data)
    return (
        <div >
            <Navbar></Navbar>

            <div className="container py-16 bg-gray-100 mx-auto ">

                <section className="relative bg-blueGray-50">
                    <div className="flex flex-wrap items-center ">
                        <div className="w-full md:w-5/12 px-12 md:px-4 mx-auto -mt-78">
                            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                                <img alt="..." src={`${process.env.REACT_APP_ROOT_URL}/${data.img}`} height={'400px'} className="w-full align-middle rounded-t-lg" />

                                <blockquote className="relative p-8 mb-4">
                                    <div className='flex justify-between'>
                                        <h4 className="text-xl font-bold text-white">
                                            {data?.title}
                                        </h4>
                                        <h4 className="text-xl font-semibold text-orange-500">
                                            {data?.price}<span>&#2547;</span>
                                        </h4>
                                    </div>
                                    <div className='flex'>
                                        {/* {Array((data?.rating)*1).fill(1).map((st, si) => <GoStar className='text-orange-500' key={si}></GoStar>)} */}
                                    </div>
                                    <p className="text-md font-light mt-2 text-white">
                                        {data?.description}
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-7/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full flex md:flex-col md:w-6/12 px-4 ">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                < TbCertificate className=' text-gray-800 ' style={{ fontSize: '1.5rem' }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">CSS Components</h6>
                                            <p className="mb-4  text-gray-500 capitalize  ">
                                                {
                                                    data?.completion
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <MdHelp className=' text-gray-800 ' style={{ fontSize: '1.5rem' }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                JavaScript Components
                                            </h6>
                                            <p className="mb-4  text-gray-500 capitalize  ">
                                                {
                                                    data?.benefit
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex md:flex-col md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <FaPaperPlane className=' text-gray-800 ' style={{ fontSize: '1.5rem' }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                                            <p className=" mb-4  text-gray-500 capitalize   ">
                                                {
                                                    data?.eligibility
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <GrUpdate className=' text-gray-800 ' style={{ fontSize: '1.5rem' }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                                            <p className="mb-4  text-gray-500 capitalize  ">
                                                {
                                                    data?.eligibility
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div >
                    <div className=" w-[98%] flex flex-col md:flex-row mx-auto rounded-xl bg-white p-4 shadow-lg">
                        <div className='flex w-full md:w-8/12 md:mx-6'>
                            <div className="w-full">
                                <h3 className=' mb-3 font-bold text-gray-800 text-xl'>Course Schedule</h3>
                                {data?.date && <div className='flex items-center'>
                                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                        <BsCalendarDateFill className="h-4 w-4 text-red-400" ></BsCalendarDateFill>
                                    </div>
                                    <div className='w-full '>
                                        <h4 className='text-sm text-gray-600'>{data?.date}</h4>
                                    </div>
                                </div>}
                                {data?.time && <div className='flex items-center my-2'>
                                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                        <MdAccessTimeFilled className="h-4 w-4 text-blue-400" ></MdAccessTimeFilled>
                                    </div>
                                    <div className='w-full '>
                                        <h4 className='text-sm text-gray-600'>{data?.time}</h4>
                                    </div>
                                </div>}
                                {data?.duration && <div className='flex items-center my-2'>
                                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                        <GiDuration className="h-4 w-4 text-orange-400" ></GiDuration>
                                    </div>
                                    <div className='w-full '>
                                        <h4 className='text-sm text-gray-600'>Total Duration: {data?.duration}</h4>
                                    </div>
                                </div>}
                            </div>



                            <div className="w-full ">
                                <h3 className=' mb-3 font-bold text-gray-800 text-xl'>After Completion</h3>
                                <div className='flex items-center'>
                                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-green-100 bg-green-50">
                                        <ImTrophy className="h-4 w-4 text-green-400" />
                                    </div>
                                    <div className='w-full'>
                                        <h4 className='text-sm text-gray-600'> Certificate of completion</h4>
                                    </div>
                                </div>
                            </div>






                        </div>
                        <div className="w-full md:w-4/12 mt-6 md:mt-0 ">
                            <MentorDetails data={data.mentor} />
                        </div>
                    </div>
                </div>

















                {/* <div className="flex flex-col">
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                
                                <MdOutlineAssignment className="h-6 w-6 text-blue-400" />
                            </div>

                            <div className="ml-4">
                                <h2 className="font-semibold">Total Assignment {data.totalAssignmet}</h2>
                            </div>
                        </div>

                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                <GiDuration className="h-6 w-6 text-orange-400" />
                            </div>

                            <div className="ml-4">
                                <h2 className="font-semibold">Total {data.duration}</h2>
                            </div>
                        </div>
                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                <BsFillPeopleFill className="h-6 w-6 text-red-400" />
                            </div>

                            <div className="ml-4">
                                <h2 className="font-semibold">Total Student {data.totalStudens}</h2>
                            </div>
                        </div>
                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                                <BsListCheck className="h-6 w-6 text-indigo-400" >
                                </BsListCheck>
                            </div>

                            <div className="ml-4">
                                <h2 className="font-semibold">Total Clasess {data.totalClasses}</h2>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            <Footer ></Footer>
        </div>
    )
}

export default SingleCourse