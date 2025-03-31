import { Parallax } from "react-scroll-parallax";

const additionals = [
  {
    year: "2000",
    description:
      "<b> Практический курс «Оперативная хирургия при опухолях головы и шеи», </b> Университетский госпиталь Эйнтри», г. Ливерпуль, Объединенное Королевство",
  },
  {
    year: "2001",
    description:
      "<b> Высшая подготовка для молодых онкологов в центральной и восточной Европе, </b> Project HOPE, г. Краков, Польша",
  },
  {
    year: "2002",
    description:
      "<b> Мастер-класс по клинической онкологии, </b> Европейская школа по онкологии, г. Пистоя, Италия",
  },
  {
    year: "2003",
    description:
      "<b> Мастер-класс по оперативной хирургии при опухолях головы и шеи, </b> Университетский госпиталь «Мотол» Карловского университета, г. Прага, Чешская Республика",
  },
  {
    year: "2004",
    description:
      "<b> Мастер-класс «Методы проведения клинических испытаний/исследований в онкологии» </b> – (6th FECS/AACR/ASCO Joint Workshop), Федерация Европейских онкологических обществ, деревня Флимс, Швейцария",
  },
  {
    year: "2005",
    description:
      "Cтажировка по <b> организации онкологической помощи и проведению клинических исследований </b> в Национальном институте рака США (US NCI), Бетезда и в аккредитованных им онкологических центрах и ведущих противораковых организациях (ACS – Американское противораковое общество, SCBCF – Фонд против рака груди им. Сьюзана Комена, Международный центр Фогарти Национальных институтов здравоохранения), США",
  },
  {
    year: "2007",
    description:
      "Стажировка по <b> Изолированной перфузии конечностей </b> (меланома и саркомы) Университетский медицинский центр ERASMUS, Роттердам, Нидерланды",
  },
  {
    year: "2013",
    description:
      "Стажировка по <b> онкологии головы и шеи, </b> Мемориальный онкологический центр им. Слоуна и Кеттеринга, г. Нью-Йорк, США",
  },
  {
    year: "2013, 2014",
    description:
      "Cтажировки по <b> хирургической онкомаммологии и онкогинекологии </b> в Больнице святого Стефана, Будапешт, Венгрия",
  },
  {
    year: "2019",
    description:
      "Стажировка в отделе Оториноларингологии – хирургии головы и шеи в Главный госпиталь Торонто, Торонто, Канада",
  },
];

export default function Additional() {
  return (
    <section className="relative flex flex-col lg:flex-row min-h-screen">
      {/* Static Image on Small Screens, Parallax on Large Screens */}
      <div className="w-full lg:w-1/3 h-64 lg:h-full overflow-hidden">
        <div className="block lg:hidden">
          <img
            src="https://static.wixstatic.com/media/e6f22e_cb9a153afe2a463a927591d7e34c60a0~mv2.jpg"
            alt="Static"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Parallax Effect Only on Large Screens */}
        <div className="hidden lg:block">
          <Parallax speed={-60} className="w-full h-full">
            <img
              src="https://static.wixstatic.com/media/e6f22e_cb9a153afe2a463a927591d7e34c60a0~mv2.jpg/v1/fill/w_352,h_854,al_c,q_80,enc_avif,quality_auto/e6f22e_cb9a153afe2a463a927591d7e34c60a0~mv2.jpg"
              alt="Parallax"
              className="w-full h-full object-cover"
            />
          </Parallax>
        </div>
      </div>

      {/* Content on Right */}
      <div className="w-full lg:w-2/3 py-5 px-4 sm:px-10 md:px-20 lg:pl-44 lg:pr-20">
        <h2 className="text-2xl sm:text-3xl md:text-[3.15rem] font-roboto font-semibold leading-[1.4em] text-[rgb(15,58,97)]">
          Дополнительное образование, стажировки
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-[rgb(59,59,59)]">
          {additionals.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold font-rubik">{item.year}</h3>
              <p
                className="leading-[1.8em] font-rubik"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
