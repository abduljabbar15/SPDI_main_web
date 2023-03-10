import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

import UpdateNews from "./UpdateNews";
const Slider = ({ pageData }) => {
    return (
        <>
            <div className="container m-auto  gap-8 grid grid-cols-4 overflow-hidden  ">

                <div className="lg:col-span-3 col-span-4 rounded-lg  h-60 sm:h-80 md:h-96 lg:h-full overflow-hidden select-none">
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper overflow-hidden"
                    >
                        {
                            pageData.media.map(single_img => <SwiperSlide>
                                <img src={process.env.REACT_APP_ROOT_URL + '/' + single_img} alt="" height={'100%'} />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>

                <div className="UpdateNews relative col-span-4 lg:col-span-1 shadow  overflow-x-hidden  rounded-lg bottom-1 ">
                    <UpdateNews></UpdateNews>
                </div>
            </div>
        </>
    );
};

export default Slider;