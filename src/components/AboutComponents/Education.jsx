import { motion } from "framer-motion";

const education = [
  {
    year: "1997",
    description:
      "<b> С отличием окончил лечебный факультет </b> Московского медицинского стоматологического института (ныне Московский государственный медико-стоматологический университет им. А. И. Евдокимова), Москва, РФ",
  },
  {
    year: "1997–1998",
    description:
      "<b> Ротационная интернатура (по международному образцу, без привязки к специальности) </b> в Московском медицинском стоматологическом институте (ныне Московский государственный медико-стоматологический университет им. А. И. Евдокимова), Москва, РФ",
  },
  {
    year: "1998–2007",
    description:
      "Ординатуры по трем специальностям <b> «онкология», «хирургия», «челюстно-лицевая хирургия» </b> в Московской медицинской академии им. И. М. Сеченова [ныне Первый Московский государственный медицинский университет им. И. М. Сеченова (Сеченовский Университет)], Москва, РФ",
  },
  {
    year: "2003",
    description:
      "<b> НМО </b> «Современные концепции в хирургии и онкологии головы и шеи», <b> Мемориальный онкологический центр им. Слоуна-Кеттеринга, Нью-Йорк, США </b>",
  },
  {
    year: "2007",
    description:
      "Краткосрочное повышение квалификации <b> «Диагностика и лечение злокачественных опухолей головы и шеи» </b> на базе Российской медицинской академии последипломного образования, Москва, РФ",
  },
  {
    year: "2010–2011",
    description:
      "Интернатура по специальности «оториноларингология» в Российском университете дружбы народов, Москва, РФ",
  },
  {
    year: "2011",
    description:
      "Европейский квалификационный экзамен по специальности <b> «хирургическая онкология» </b> – Европейский совет по хирургии (EBS), Европейский союз медицинских специализации (UEMS)",
  },
  {
    year: "2013",
    description:
      "Профессиональная переподготовка по специальности <b> «организация здравоохранения и общественное здоровье» </b> в Московском медицинском стоматологическом институте (ныне Московский государственный медико–стоматологический университет им. А. И. Евдокимова), Москва, РФ",
  },
  {
    year: "2015",
    description:
      "Профессиональная переподготовка по специальности <b> «организация здравоохранения и общественное здоровье» </b> в Московском медицинском стоматологическом институте (ныне Московский государственный медико–стоматологический университет им. А. И. Евдокимова), Москва, РФ",
  },
  {
    year: "2017",
    description: "Переподтверждение по специальности <b> «Онкология» </b>",
  },
  {
    year: "2018",
    description:
      "Переподтверждение по специальности <b> «Организация здравоохранения и общественное здоровье» </b>",
  },
  {
    year: "2020",
    description: "Переподтверждение по специальности <b> «Хирургия» </b>",
  },
  {
    year: "2020",
    description:
      "Переподтверждение по специальности <b> «Пластическая хирургия» </b>",
  },
];

const Education = () => {
  return (
    <section className="my-10 md:my-16">
      <div className="max-w-7xl px-4 md:px-20 mx-auto flex flex-col md:flex-row overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-[35%]"
        >
          <h2 className="text-[2rem] mb-6 md:mb-0 md:text-[2.5rem] font-semibold text-[rgb(15,58,97)]  leading-13">
            {" "}
            Образование
          </h2>
        </motion.div>
        <ul className=" md:pl-12 md:pr-10 md:w-[65%] list-disc    leading-8">
          {education.map((item, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              key={index}
              className="text-[rgb(59,59,59)] flex justify-between"
            >
              <span className="w-[20%]  text-lg text-[rgb(15,58,97)] font-rubik tracking-widest pb-6 font-bold">
                {item.year}
              </span>{" "}
              <p
                className="w-[80%] border-l md:w-full pl-4 md:pl-10 border-[rgb(59,59,59)] text-[rgb(59,59,59)] leading-[1.8em] pb-6 font-questrial"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
