import { researchData } from "../../constants/data";

export default function ResearchInterests() {
  return (
    <section
      id="research-interests"
      className="max-w-5xl mx-auto pt-22 space-y-6"
    >
      <h2 className="text-4xl mb-4 font-semibold text-[#420075]">
        Научно-исследовательские интересы
      </h2>

      {researchData.map((section, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#420075]">
            {section.title}
          </h3>
          <ul className="list-disc list-outside pl-4 md:pl-10 lg:pl-28 space-y-2">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
