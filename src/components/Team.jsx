import ProfileCard from "../components/ProfileCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import {teamMember} from '../content/team'

const Team = () => {
  return (
    <div className="mt-16" id="team">
     
      <p className="text-center text-3xl text-black font-semibold mb-10 dark:text-white">
        Our Team
      </p>

      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {teamMember.map((member, index) => (
             <SwiperSlide>
             {" "}
             <ProfileCard member={member} key={index}/>
           </SwiperSlide>
        ))}
     
       
      </Swiper>

    </div>
  );
};

export default Team;
