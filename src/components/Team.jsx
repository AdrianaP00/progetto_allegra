import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";



export const Team = (props) => {
  return (
    <div id="team" className="text-center" style={{ paddingBottom: '0px', marginBottom: '0px' }}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title" style={{ marginBottom: '20px' }}>
          <h2>Colaboraciones</h2>
          <p>
            Cada comensal es único y cada menú también debería serlo.
          </p>
        </div>
      </div>
      <div id="container" style={{ marginBottom: '0px', height: '240px'  }}>
        {props.data ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={{ delay: 800 }}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
            }}
            style={{ paddingBottom: '0px', marginBottom: '0px' }}
          >
            {props.data.map((d, i) => (
              <SwiperSlide key={`${d.name}-${i}`} style={{ marginBottom: '0px', height: '240px' }}>
                <div className="thumbnail">
                  <img src={d.img} alt="..." className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
};
