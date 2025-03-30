import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import useEmblaCarousel from "embla-carousel-react";

const logos = [
  "https://static.wixstatic.com/media/e6f22e_361e9465a3014ed1a8098ddac3a8febc~mv2.png",
  "https://static.wixstatic.com/media/e6f22e_30e2510e27a84677a82bf3c8ca91f2aa~mv2.png/v1/fill/w_189,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ECRC.png",
  "https://static.wixstatic.com/media/e6f22e_3e000f82d80b4c61a07548791189a765~mv2.png",
  "https://static.wixstatic.com/media/e6f22e_42259c251d1f408f834d78a7978c196a~mv2.png/v1/fill/w_144,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EGPM_Logo_Var_003.png",
  "https://static.wixstatic.com/media/e6f22e_c4415a102b83479b90226ed3de9e7b1e~mv2.png/v1/fill/w_318,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%20%D0%BF%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9.png",
  "https://static.wixstatic.com/media/e6f22e_df68cf687b194af8a6848c8870c768e3~mv2.png/v1/fill/w_366,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%D0%BB%D0%BE%D0%B3%D0%BE_HD_%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82.png",
  "https://static.wixstatic.com/media/e6f22e_8efc946ce3e44ee3aac0ae8ac50024b4~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EASHNO_Logo.png",
  "https://static.wixstatic.com/media/e6f22e_2c208aba4029489db115cd9c7805ee8b~mv2.png/v1/fill/w_174,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EACF.png",
];

const logoSizes = [
  "h-9 md:h-24",
  "h-13 md:h-18",
  "h-20",
  "h-28 md:h-30",
  "h-10 md:h-24",
  "h-5 md:h-12",
  "h-30",
  "h-24",
];

export default function Introduction() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="relative bg-gray-100 pb-16 md:pb-20 oveflow-hidden">
      {/* Top Section */}
      <div className="relative pb-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 py-10 md:py-16 px-4 md:px-6">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="md:w-2/3 md:px-20 md:pr-36 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-[3.5rem] font-bold text-[rgb(15,58,97)] leading-tight md:leading-[1.2em]">
              СУБРАМАНИАН Сомасундарам
            </h1>
            <h2 className="text-lg md:text-2xl text-[rgb(59,59,59)] mt-2 md:mt-1">
              хирург-онколог и онкологический пациент
            </h2>
            <p className="text-[rgb(59,59,59)] leading-relaxed md:leading-[1.8em] font-roboto font-light mt-3 text-sm md:text-base">
              В 1997 г. я закончил лечебный факультет Московского
              медико-стоматологического университета. В прошлом я и сам был
              онкологическим пациентом. Я знаю, с какими трудностями
              сталкиваются, как пациенты, так и доктора.Это подтолкнуло меня к
              учреждению и со-финансированию стажировок и стипендий для
              подготовки молодых талантов из странс переходной экономикой.Также
              я являюсь членом редакционной коллегии/совета 5 международных
              научных журналов по онкологии иоториноларингологии.Главный
              исследователь или исследователь более 10 международных клинических
              исследований.На данный момент было издано более 110 моих
              публикаций.​​По собственной инициативе, пожертвовав лично и с
              помощью других меценатов и друзей, а также пациентов и их
              родственников, я провел более 200 научных, образовательных и
              социально-ориентированных программ и мероприятий в восьми странах
              Евразии.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="md:w-fit"
          >
            <img
              src="https://static.wixstatic.com/media/e6f22e_ec0df83195fd4dd7b3d5503bf8e4dbfa~mv2.jpg/v1/crop/x_0,y_0,w_4912,h_6159/fill/w_460,h_661,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_6089_JPG.jpg"
              alt="Profile"
              className="shadow-lg h-96 md:h-[72vh]"
            />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-repeat-x  md:bg-[length:60%_auto]  bg-center h-40 my-svg-background"></div>
      </div>

      {/* Logo Carousel */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mt-6 max-w-4xl relative mx-auto overflow-hidden px-4"
      >
        <button
          className="prev absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 text-4xl md:text-7xl text-white cursor-pointer"
          style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.8)" }}
        >
          ❮
        </button>

        <Swiper
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: "auto" },
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay, Navigation]}
          navigation={{ prevEl: ".prev", nextEl: ".next" }}
          spaceBetween={10}
          className="max-w-4xl"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="flex items-center justify-center h-24 md:h-32 px-2 md:px-4">
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className={`object-contain ${logoSizes[index]}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="next absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 text-4xl md:text-7xl text-white"
          style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.8)" }}
        >
          ❯
        </button>
      </motion.div>
    </div>
  );
}
