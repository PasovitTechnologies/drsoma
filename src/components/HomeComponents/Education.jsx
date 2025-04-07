import { education } from "../../constants/data";

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto  pt-22 leading-6.5">
      <h2 className="text-4xl font-semibold text-[#420075]">Образование</h2>
      <ul className="mt-4 pl-4 md:pl-10 lg:pl-28 space-y-2 list-disc list-outside ">
        {education.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </section>
  );
}
