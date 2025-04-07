import { additionalEducation } from "../../constants/data";

export default function AdditionalEducation() {
  return (
    <section
      id="additional-education"
      className="max-w-5xl mx-auto pt-22 space-y-6 leading-6.5"
    >
      {/* How to Get an Appointment Section */}
      <div className="space-y-4 ">
        <h2 className="text-4xl font-semibold text-[#420075]">
          Как попасть на приём?
        </h2>
        <div className=" md:pl-10 lg:pl-28 text-justify leading-7.5">
          <p>
            <b>Сомасундарам Субраманиан</b> (доктор Сома) ведет{" "}
            <b>очный приём в Москве</b>. Для жителей других регионов и стран
            возможна консультация в <b>дистанционном формате</b>.
          </p>
          <p>
            Доктор Сома обладает обширными навыками и опытом в лечении
            опухолевых заболеваний головы и шеи, полости рта, гортани, кожи,
            щитовидной и молочной желез. Выполняет все виды хирургических
            вмешательств по поводу этих заболеваний, в том числе
            реконструтивно-пластические
            <b>
              (вмешательства подробно перечислены в разделе «Специализации»).
            </b>
          </p>
          <p>
            Консультация специалиста является обязательным условием перед
            хирургическим лечением.
          </p>
          <p>
            Запишитесь на консультацию на сайте{" "}
            <a href="https://www.health-direct.info/" className="underline">
              {" "}
              <b>Health-Direct</b>
            </a>
          </p>
          <p>
            <b>
              Заполните обязательные поля, и менеджер свяжется с Вами, чтобы
              уточнить удобные дату и время.
            </b>
          </p>
        </div>
      </div>

      {/* Additional Education Section */}
      <h2 className="text-4xl font-semibold pt-10 text-[#420075]">
        Дополнительное образование, стажировки
      </h2>
      <ul className="mt-4 pl-4 md:pl-10 lg:pl-28 space-y-2 list-disc list-outside">
        {additionalEducation.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </section>
  );
}
