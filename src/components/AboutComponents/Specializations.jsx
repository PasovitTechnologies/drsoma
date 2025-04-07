import React from "react";
// import { specializations } from "../../constants/data";
import { motion } from "framer-motion";

export const specializations = [
  "Операции при опухолях слюнных желез, включая нерво-сберегающие операции при опухолях околоушной слюнной железы",

  "Операции при опухолях щитовидной железы",

  "Операции при опухолях кожи, меланоме и мягких тканей любой локализации и сложности с пластикой",

  "Биопсия сторожевого лимфоузла при меланоме и раке молочной железы",

  "​Реконструктивные операции – онкопластические",

  "Спасательные операции при жизнеугрожающих состояниях у онкологических пациентов",

  "Операции при опухолях гортаноглотки и гортани, в том числе и трахеопищеводное шунтирование",

  "Операции при опухолях основания черепа",

  "Операции при опухолях полости рта и ротоглотки",

  "Все виды лимфодиссекции при метастазах в лимфатические узлы шеи, подмышечных и паховых областей",

  "Операции при опухолях молочной железы и пластика молочной железы",

  "Реконструкция трахеи и других частей головы и шеи, в том числе после травм",
];

const Specializations = () => {
  return (
    <section className="my-10 md:my-16">
      <div className="max-w-7xl px-4 md:px-6 xl:px-20 mx-auto   overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-[2rem] mb-6 md:mb-10 w-fit md:text-6xl mx-auto font-semibold text-[rgb(15,58,97)]  leading-13"
        >
          {" "}
          Специализации
        </motion.h2>{" "}
        <div className=" grid grid-cols-1  lg:grid-cols-[1fr_1.9fr_1fr]">
          <div>
            <ul className="xl:pl-4 leading-8">
              {specializations.slice(0, 6).map((specialization, index) => (
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  key={index}
                  className="text-right"
                >
                  <span className="font-poppins text-[rgb(15,58,97)] font-bold text-xl">
                    {index + 1}
                  </span>
                  <p className="leading-[1.8em]  text-[rgb(59,59,59)]">
                    {specialization}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="lg:px-6 my-6 lg:my-0">
            <img
              src="https://static.wixstatic.com/media/e6f22e_3f715f66ea264eb483f7148e066ebaf7~mv2.jpeg/v1/crop/x_3,y_7,w_570,h_787/fill/w_570,h_783,al_c,q_85,enc_avif,quality_auto/dr1.jpeg"
              alt=""
              className=" md:w-full lg:w-auto h-full md:h-auto lg:h-full "
            />
          </div>
          <div>
            <ul className="xl:pr-4 overflow-hidden leading-8">
              {specializations.slice(6, 12).map((specialization, index) => (
                <motion.li
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  key={index}
                  className="text-left"
                >
                  <span className="font-poppins text-[rgb(15,58,97)] font-bold text-xl">
                    {index + 7}
                  </span>
                  <p className="leading-[1.8em] text-[rgb(59,59,59)]">
                    {specialization}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;
