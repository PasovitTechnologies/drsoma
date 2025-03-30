import {
  professionalMemberships,
  publicPositions,
  philanthropy,
  professionalExperience,
} from "../../constants/data";
export default function Memberships() {
  return (
    <section id="memberships" className="max-w-5xl mx-auto pt-22 space-y-6">
      {/* Memberships */}
      <div className="space-y-6">
        <h2 className="text-4xl font-semibold text-[#420075]">
          Членство в профессиональных организациях
        </h2>
        <ul className="list-disc list-outside pl-4 md:pl-28 space-y-2">
          {professionalMemberships.map((membership, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: membership }}
            ></li>
          ))}
        </ul>
      </div>

      {/* Public Positions */}
      <div className="space-y-6 pt-22">
        <h2 className="text-4xl font-semibold text-[#420075]">
          Общественные позиции
        </h2>
        <ul className="list-disc list-outside pl-4 md:pl-28 space-y-2">
          {publicPositions.map((position, index) => (
            <li key={index}>
              <b> {position.year} </b>
              <span
                dangerouslySetInnerHTML={{ __html: position.description }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Professional Experience */}
      <div className="space-y-6 pt-22">
        <h2 className="text-4xl font-semibold text-[#420075]">
          Профессиональный опыт
        </h2>
        <ul className="list-disc list-outside pl-4 md:pl-28 space-y-2">
          {professionalExperience.map((experience, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: experience }}
            ></li>
          ))}
        </ul>
      </div>

      {/* Philanthropy */}
      <div className="space-y-6 pt-22">
        <h2 className="text-4xl font-semibold text-[#420075]">Филантропия</h2>
        <div className="pl-4 md:pl-24">
          <strong className="text-lg">
            Учрежденные стипендии (основатель и спонсор):
          </strong>
          <ul className="list-disc mt-2 list-outside md:pl-4 leading-7 space-y-2">
            {philanthropy.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>{" "}
        </div>
      </div>
    </section>
  );
}
