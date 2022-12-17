import React from 'react';
// import { Helmet } from 'react-helmet';
// import { NavLink } from 'react-router-dom';
// import AdminList from '../Components/News/AdminList';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
// import mannan from '../resource/member/mannan.jpg';
import { members } from './../Api/members';


const AdminInfo = () => {

return (
<>
    <Navbar></Navbar>
    <div className='container mx-auto'>
        {/* president */}
        <section className="bg-white ">
            <div className="px-6 mx-auto py-8">
                {
                <div className="flex flex-col sm:flex-row justify-around items-center">
                    <div className="lg:w-7/12 lg:ml-14 lg:p-0 p-7 order-2 sm:order-1">
                        <h1 className="sm:text-5xl text-4xl text-gray-700 font-medium leading-tight mb-5 capitalize">
                            {members.find(data => data.designation === 'president').name}</h1>
                        <p className="text-xl text-gray-500">
                            {members.find(data => data.designation === 'president')?.name}
                        </p>
                    </div>
                    <div className="lg:w-4/12 rounded-full scale-100   order-1 sm:order-2">
                        <img className=" rounded-full ring-4 mx-auto ring-gray-300 object-cover" alt="sahil logo"
                            width="250" height="250" src={members.find(data=> data.designation ===
                        'president').img} />
                    </div>
                </div>
                }
            </div>
        </section>
    </div>
    <br />
    <div className='container mx-auto'>
        {/* team member */}
        <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                    Our Executive Team</h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia
                    error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    {
                    members.filter(data => data.role !== 'president').map((user, i) => <div key={i}
                        className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={user.img}
                            alt="" />

                        <h1
                            className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                            {user.name}</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                            {user.designation}</p>

                        <div className="flex mt-3 -mx-2">




                            <a href="/"
                                className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Github">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 30 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M 11 7 C 6.027344 7 2 11.027344 2 16 C 2 20.972656 6.027344 25 11 25 C 15.972656 25 20 20.972656 20 16 C 20 15.382813 19.933594 14.78125 19.8125 14.199219 L 19.765625 14 L 11 14 L 11 17 L 17 17 C 16.523438 19.835938 13.972656 22 11 22 C 7.6875 22 5 19.3125 5 16 C 5 12.6875 7.6875 10 11 10 C 12.5 10 13.867188 10.554688 14.921875 11.464844 L 17.070313 9.359375 C 15.46875 7.894531 13.339844 7 11 7 Z M 25 11 L 25 14 L 22 14 L 22 16 L 25 16 L 25 19 L 27 19 L 27 16 L 30 16 L 30 14 L 27 14 L 27 11 Z" />
                                </svg>
                            </a>
                            <a href="/"
                                className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Github">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>)
                    }

                </div>
            </div>
        </section>
    </div>
    <Footer></Footer>
</>
);
};

export default AdminInfo;