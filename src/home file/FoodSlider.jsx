
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const FoodSlider = () => {

    return (
        <div>
             <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <div>
                <div className=' flex justify-center'>
                    <img className=' w-full h-[700px] ' src="https://res.cloudinary.com/the-infatuation/image/upload/v1657763253/cms/guides/the-winter-onetwo-punch/Izakaya_sandynoto.jpg" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className=' flex justify-center'>
                    <img className=' w-full h-[700px] ' src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1730199639~exp=1730203239~hmac=ab58df3c8cee7f4271d2c67185c15b782abd525f15b21d8278e0dab24273138f&w=740" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className=' flex justify-center'>
                    <img className=' w-full h-[700px] ' src="https://img.freepik.com/free-photo/potato-balls-with-barbecue-sauce_140725-2178.jpg?t=st=1730199668~exp=1730203268~hmac=bea99de70b3c7aa7b02fe69dc3c012fdde64d34111a598c625936ca86b82f768&w=740" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className=' flex justify-center'>
                    <img className=' w-full h-[700px] ' src="https://img.freepik.com/free-photo/front-view-burger-with-french-fries_23-2148234991.jpg?t=st=1730199696~exp=1730203296~hmac=bfa38502bbf223bcd14647c86c5245419095f6eab41b45760fff9ca98f7cd219&w=740" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className=' flex justify-center'>
                    <img className=' w-full h-[700px] ' src="https://img.freepik.com/premium-photo/plum-pie-table-still-life-composition_252977-68.jpg?w=740" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className=' flex justify-center'>
                    <img className=' w-full h-[700px] ' src="https://img.freepik.com/free-photo/flat-lay-salmon-with-veggies_23-2148322812.jpg?t=st=1730199760~exp=1730203360~hmac=6988f1a2ad01a31b6529a1d176613c5de9da93aeb8a7f9f0c39a2e4d8e22ca4d&w=740" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className=' flex justify-center'>
                    <img className=' w-full h-[700px] ' src="https://img.freepik.com/premium-photo/traditional-thali-plate-with-food-offering-incense-stick-with-full-moon-background_1174726-8332.jpg?w=740" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className=' flex justify-center'>
                    <img className=' w-full h-[700px] ' src="https://img.freepik.com/free-photo/healthy-vegetable-soup-cooked-with-fresh-meat-generated-by-ai_188544-35382.jpg?t=st=1730199885~exp=1730203485~hmac=4a4ca29d4e71e62b0826bc5915a6bf22b8a662f9055a10d85f0c3c3ac893fd7f&w=826" alt="" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
            
        </div>
    );
};

export default FoodSlider;