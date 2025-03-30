import { projects } from "../../constants/data";

export default function SuccessfulProjects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto pt-22 space-y-6">
      <h2 className="text-4xl font-semibold text-[#420075]">
        Успешные проекты
      </h2>

      <ul className="list-disc list-outside pl-4 md:pl-28 space-y-2">
        {projects.map((project, index) => (
          <li key={index}>
            <strong dangerouslySetInnerHTML={{ __html: project.title }} />
            {project.description && (
              <span
                dangerouslySetInnerHTML={{
                  __html: project.description,
                }}
              />
            )}

            {project.items && (
              <ul className="  mt-2 space-y-2">
                {project.items.map((item, subIndex) => (
                  <li key={subIndex}>{item}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
