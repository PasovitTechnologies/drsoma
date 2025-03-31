import React from "react";
import { motion } from "framer-motion";

const positions = [
  "<b>Онколог – хирург,</b> [специальности: онкология, хирургия, челюстно-лицевая хирургия, оториноларингология, пластическая хирургия, общественное здоровье и организация здравоохранения, хирургическая онкология (Евросоюз)]",
  'Основатель и директор, <br/> <b> АНО "Научно-образовательный центр "Евразийская онкологическая программа "ЕАФО" (АНО «ЕАФО»), </b> <br/> Москва, Российская Федерация',
  "Основатель и директор, <br/> <b> Евразийская федерация онкологии (EAFO) </b> <br/> Шотландия, Объединенное Королевство",
  "Основатель и председатель, <br/> <b> Евразийская глобальная миротворчеcкая миссия (EGPM) </b> <br/> Москва, Российская Федерация",
  "Основатель и председатель Совета директоров, <br/> <b> Евразийский совет по онкологическим исследованиям (ECRC) </b> <br/> Мумбай, Индия",
  "Основатель, <br/> <b> Евразийский противораковый фонд (EACF) </b> <br/> Москва, Российская Федерация",
  "Основатель и генеральный секретарь, <br/> <b> Евразийское общество по онкологии головы и шеи (EASHNO)</b>",
  "Со-основатель, <br/> <b> Противораковый фонд «Ребенок может» (ChildCan) </b> <br/> Горахпур, Индия",
];

const Positions = () => {
  return (
    <section className="bg-[#3b3b3b] text-white py-8">
      <div className="max-w-7xl px-4 md:px-10 mx-auto flex flex-col md:flex-row overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-[40%]"
        >
          <h2 className="text-5xl pl-0 md:pl-10 md:text-[3.5rem] font-semibold mb-8 md:mb-0 leading-13">
            Должности
          </h2>
        </motion.div>
        <ul className="space-y-8 md:w-[60%] md:px-0 md:pl-2 leading-8">
          {positions.map((position, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              key={index}
            >
              <p
                className="leading-[1.8em] font-roboto"
                dangerouslySetInnerHTML={{ __html: position }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Positions;
