import { workExperience } from "../../constants/data";

export default function WorkExperience() {
  return (
    <section id="work-experience" className="max-w-5xl mx-auto pt-22 space-y-6">
      <h2 className="text-4xl font-semibold text-[#420075]">Опыт работы</h2>

      <ul className="list-disc list-outside pl-4 md:pl-28 space-y-2">
        {workExperience.map((job, index) => (
          <li key={index}>
            <span className="">
              <b> {job.year}:</b>
            </span>{" "}
            <span dangerouslySetInnerHTML={{ __html: job.title }} />{" "}
            <span dangerouslySetInnerHTML={{ __html: job.description }} />
          </li>
        ))}
      </ul>
    </section>
  );
}
