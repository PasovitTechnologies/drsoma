import { awards, editorialExperience } from "../../constants/data";

export default function Awards() {
  return (
    <section id="awards" className="max-w-5xl mx-auto pt-22 space-y-6">
      {/* Awards Section */}
      <div className="space-y-6">
        <h2 className="text-4xl font-semibold text-[#420075]">Награды</h2>

        <ul className="list-disc list-outside pl-4 md:pl-28 space-y-2">
          {awards.map((award, index) => (
            <li key={index}>
              <b> {award.year} </b>
              <span dangerouslySetInnerHTML={{ __html: award.description }} />
            </li>
          ))}
        </ul>
      </div>

      {/* Editorial Experience Section */}
      <div className="space-y-6 pt-22">
        <h2 className="text-4xl font-semibold text-[#420075]">
          Редакторский опыт
        </h2>
        <ul className="list-disc list-outside pl-4  md:pl-28 space-y-2.5">
          {editorialExperience.map((experience, index) => (
            <li key={index}>{experience}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
