import Nadpis from "./Nadpis";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import umelec1 from "./images/umelec1.png";
import umelec2 from "./images/umelec2.png";
import umelec3 from "./images/umelec3.png";

import "swiper/css";
import "swiper/css/navigation";

const umelci = [
  {
    id: "annan",
    fotka: umelec1,
    meno: "ANNAN AFFOTEY",
  },
  {
    id: "juwon",
    fotka: umelec2,
    meno: "JUWON ADEREMI",
  },
  {
    id: "cornelius",
    fotka: umelec3,
    meno: "CORNELIUS ANNOR",
  },
];

function Umelci() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Nadpis nadpis="Umelci" color="black" />
      <div className="w-full flex justify-center items-center mb-5">
        <Swiper
          style={{
            "--swiper-navigation-color": "black",
            "--swiper-navigation-size": "1.2rem",
          }}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          loop={true}
          scrollbar={{ draggable: true }}
          modules={[Navigation]}
        >
          {umelci.map((umelec) => (
            <SwiperSlide key={umelec.id}>
              <Link to="/artist">
                <div className="w-1/2 w-full flex justify-center items-center flex-col">
                  <img className="w-36 grayscale" src={umelec.fotka}></img>
                  <p className="text-black text-xs font-julius pt-2">
                    {umelec.meno}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Umelci;
